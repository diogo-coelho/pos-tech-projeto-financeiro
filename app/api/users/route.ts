import connectDatabase from "@/lib/db";
import UserModel, { User } from "@/model/User";

export async function POST(req: Request): Promise<Response> {
  await connectDatabase();

  const users: User[] = await UserModel.find();
  if (users.length > 0) {
    return new Response(JSON.stringify({
      message: "Usuário já cadastrado no banco"
    }), {
      status: 400,
      headers: { 'Content-Type': 'application/json'}
    });
  }
  const data: User = await req.json();
  const newUser = new UserModel(data);
  await newUser.save();

  return new Response(JSON.stringify({
    message: "Usuário criado com sucesso"
  }), {
    status: 201,
    headers: { 'Content-Type': 'application/json'}
  });
}