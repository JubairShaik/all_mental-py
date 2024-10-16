import { auth } from './auth'

export default auth;

export const config = {
    matcher: [
        "/dashboard/:path*",
        "/editor/:path*",
        "/login",
        "/register",
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ],
};