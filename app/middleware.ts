import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(request: Request) {
  const token = request.headers.get('authorization')?.split(' ')[1];

  if (!token) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  try {
    const secretKey = process.env.JWT_SECRET as string;
    const user = jwt.verify(token, secretKey);

    if (!user) throw new Error('Token inválido');

    const response = NextResponse.next();
    response.cookies.set('token', token, { httpOnly: true, path: '/'});
    return response;
  } catch(error) {
    return NextResponse.redirect(new URL('/', request.url));
  }
}

export const config = {
  matcher: ['/dashboard/:path*']
}