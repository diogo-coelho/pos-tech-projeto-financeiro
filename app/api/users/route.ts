import connectDatabase from "@/lib/db";
import UserModel, { User } from "@/model/User";
import AccountModel, { Account } from "@/model/Account";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  await connectDatabase();

  const data: User = await request.json();
  const user: User | null = await UserModel.findOne({ email: data.email });
  if (user) return NextResponse.json({ message: 'Usuário já cadastrado' }, { status: 400 })

  const newUser = new UserModel(data);
  const savedUser = await newUser.save();

  const newAccount = new AccountModel({ userId: savedUser._id.toString(), currentValue: 0 })
  await newAccount.save();
  return NextResponse.json({ message: 'Usuário criado com sucesso'}, { status: 201 })
}