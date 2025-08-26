import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  // return NextResponse.redirect(new URL('/home', request.url))
  const authToken = request.cookies.get("authToken")?.value;



  if(request.nextUrl.pathname === "/api/login" || request.nextUrl.pathname === "/api/users"){
    return;
  }

  const userNotLoginAccess = request.nextUrl.pathname === "/login" || request.nextUrl.pathname === '/signup';


  if(userNotLoginAccess){
    if(authToken){
      return NextResponse.redirect(new URL("/profile/user",request.url))
    }
  }else if(!authToken){
    if(request.nextUrl.pathname.startsWith("/api")){
      return NextResponse.json({
        message: " accsessing Denied",
        success: false,

      },{
        status: 401,
      })
    }
    return NextResponse.redirect(new URL("/login",request.url))
  }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/add-task',
    '/show-task',
    '/login',
    '/signup',
    '/profile/:path*',

    '/api/:path*'],
}