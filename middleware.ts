import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from './auth/auth';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token');

  if (!token) return NextResponse.redirect(new URL('/', request.url))

  const secretKey = process.env.JWT_SECRET as string;
  try {
    const user = await verifyToken(token.value, secretKey);

    if (!user) throw new Error('Token inválido');

    return NextResponse.next();
  } catch(error) {
    console.log('error: ', error);
    return NextResponse.redirect(new URL('/', request.url));
  }
}

export const config = {
  matcher: ['/dashboard/:path*']
}