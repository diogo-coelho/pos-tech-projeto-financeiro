// next.d.ts
import { NextRequest } from 'next/server';

interface UserPayload {
  id: string
}

declare module 'next' {
  interface NextRequest {
    user?: UserPayload;
  }
}
