/* import { NextResponse } from "next/server"

export function middleware(request) {
  // console.log(request)
  const redirectUrl = new URL('/about', request.url);
  return NextResponse.redirect(redirectUrl);
} */

import {auth} from "@/app/_lib/auth";
export const middleware = auth;

export const config = {
  matcher: ["/account"]
}