import connectDatabase from "@/lib/db";
import AccountModel from "@/model/Account";
import { verifyToken } from "@/auth/auth";
import { cookies } from 'next/headers';
import { NextResponse } from "next/server";
import { User } from "@/model/User";

export async function GET(request: Request) {
  await connectDatabase();

  const cookieStore = cookies()
  const token = cookieStore.get('token');
  if (!token) return NextResponse.redirect(new URL('/', request.url));
  const secretKey = process.env.JWT_SECRET as string;

  try {
    const user = await verifyToken(token?.value, secretKey);
    if (!user) throw new Error('Token inválido');

    const account = AccountModel.findOne({ userId: (user.payload as unknown as User)?.id.toString() })
    return NextResponse.json({ user, account }, { status: 200 })
  } catch (error) {
    console.log('Ocorreu um erro: ', error)
    return NextResponse.json({ message: 'Ocorreu um erro' }, { status: 500 })
  }
}