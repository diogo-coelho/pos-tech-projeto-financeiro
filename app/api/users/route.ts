export async function POST(req: Request): Promise<Response> {
  const data = await req.json();
  return new Response(JSON.stringify({
    message: "Usuário criado com sucesso"
  }), {
    status: 201,
    headers: { 'Content-Type': 'application/json'}
  });
}