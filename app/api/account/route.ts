import connectDatabase from "@/lib/db";
import { verifyToken } from "@/auth/auth";
import { cookies } from 'next/headers';
import { NextResponse } from "next/server";
import { User } from "@/model/User";
import AccountModel, { Account } from "@/model/Account";
import mongoose from 'mongoose';

export async function GET(request: Request) {
  console.log('passou aqui')
  await connectDatabase();

  const cookieStore = cookies()
  const token = cookieStore.get('token');
  if (!token) return NextResponse.redirect(new URL('/', request.url));
  console.log('token', token)
  const secretKey = process.env.JWT_SECRET as string;

  try {
    const user = await verifyToken(token?.value, secretKey);
    if (!user) throw new Error('Token inválido');
    console.log('user', user)

    const account: Account | null = await AccountModel.findOne({ userId: (user.payload as unknown as User)?.id })
    console.log('account', account)
    const response = NextResponse.json({ 
      token,
      user, 
      account: {
        ...account,
        userId: account?.userId.toString(),
      } 
    }, { status: 200 })
    return response;
  } catch (error) {
    console.log('Ocorreu um erro: ', error)
    return NextResponse.json({ message: 'Ocorreu um erro' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  await connectDatabase();

  const cookieStore = cookies()
  const token = cookieStore.get('token');
  if (!token) return NextResponse.redirect(new URL('/', request.url));

  const { userId, type, amount } = await request.json();
  console.log('userId', userId);

  /**
  const userIdObject = new mongoose.Types.ObjectId(userId);

  const account = AccountModel.findOne({ userId: userIdObject });
  console.log('account', account);
   */

  return NextResponse.json({ message: 'Deu bom' }, { status: 200 })
}