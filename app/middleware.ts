import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const cspHeader = `
    default-src 'self';
    script-src 'self' https://google.com;
    object-src 'none'; 
    base-uri 'self';
  `;

  const response = NextResponse.next();
  response.headers.set("Content-Security-Policy", cspHeader);

  return response;
}
