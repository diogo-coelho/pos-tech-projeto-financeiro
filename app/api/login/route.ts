import connectDatabase from "@/lib/db";
import UserModel, { User } from "@/model/User";
import jwt from 'jsonwebtoken';
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const jwtSecret = process.env.JWT_SECRET as string;
  await connectDatabase();

  const { email, password } = await request.json();
  const user: User | null = await UserModel.findOne({ email });

  if (!user || user.password != password) {
    return NextResponse.json({ message: 'Credenciais inválidas' }, { status: 401 })
  }

  const token = jwt.sign({ id: user?._id?.toString(), name: user?.name, email: user?.email }, jwtSecret, { expiresIn: '1h'});
  const response = NextResponse.json({ message: 'Login autenticado', token }, { status: 200 }); 
  response.cookies.set('token', token, { path: '/', httpOnly: true });
  return response
}