import connectDatabase from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import AccountModel, { Account } from "@/model/Account";
import mongoose from 'mongoose';

export async function GET(request: NextRequest, { params }: { params: { userId: string }}) {
  try {
    await connectDatabase();
    const { userId } = await params;
    const userIdObject = new mongoose.Types.ObjectId(userId);
    const account: Account | null = await AccountModel.findOne({ userId: userIdObject });

    const response = NextResponse.json({ account }, { status: 200 })
    return response;
  } catch (error) {
    console.log('Ocorreu um erro: ', error)
    return NextResponse.json({ message: 'Ocorreu um erro' }, { status: 500 })
  }
}

export async function POST(request: NextRequest, { params }: { params: { userId: string }}) {
  try {
    await connectDatabase();
    const { userId } = await params;
    const { type, amount } = await request.json();
    const userIdObject = new mongoose.Types.ObjectId(userId);

    const account: Account | null = await AccountModel.findOne({ userId: userIdObject });
    if (!account) throw new Error('Conta não encontrada')

    const currentValue = type === 'Depósito' 
                           ? account!.currentValue + amount
                           : account!.currentValue - amount;
    const value: number = type === 'Depósito' ? amount : eval(`- ${amount}`);
    const statement = Array.isArray(account.statement) 
                      ? [{ title: type, value, date: new Date() }, ...account.statement ]
                      : [{ title: type, value, date: new Date() }];
    const updateData = { userId: userIdObject, currentValue, statement }

    await AccountModel.findOneAndUpdate(
      { userId: userIdObject },
      updateData, 
      { new: true, useFindAndModify: false } 
    ) 

    return NextResponse.json({ message: 'Transferência executada com sucesso' }, { status: 200 });
  } catch (error) {
    console.log('Ocorreu um erro: ', error)
    return NextResponse.json({ message: 'Ocorreu um erro' }, { status: 500 })
  }
}