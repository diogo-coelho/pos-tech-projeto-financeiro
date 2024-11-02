import connectDatabase from "@/lib/db";
import UserModel, { User } from "@/model/User";
import jwt from 'jsonwebtoken';

export async function POST(req: Request): Promise<Response> {
  const jwtSecret = process.env.JWT_SECRET as string;
  await connectDatabase();

  const { email, password } = await req.json();
  console.log('dados', email, password)
  const user: User | null = await UserModel.findOne({ email });
  console.log('user', user)

  if (!user || user.password != password) {
    return new Response(JSON.stringify({
      message: "Credenciais inválidas"
    }), {
      status: 401,
      headers: { 'Content-Type': 'application/json'}
    });
  }

  const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: '1h'});

  return new Response(JSON.stringify({
    token
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json'}
  });  
}