import { jwtVerify } from 'jose';

export async function verifyToken(token: string, secretKey: string) {
  try {
    const user = await jwtVerify(token, new TextEncoder().encode(secretKey));
    return user;
  } catch (error) {
    console.log('error: ', error)
    throw new Error('Token inválido');
  }
}
