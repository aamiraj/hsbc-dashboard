// import { NextResponse } from "next/server";

// // This function can be marked `async` if using `await` inside
// export function middleware(request) {
//   return NextResponse.redirect(new URL("/home", request.url));
// }

// See "Matching Paths" below to learn more
// export { default } from "next-auth/middleware";
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    // without admin role you cannot access any page start with dashboard
    if (
      req.nextUrl.pathname.startsWith("/dashboard") &&
      req.nextauth.token.role != "admin"
    ) {
      return NextResponse.rewrite(new URL("/", req.url));
    }
    // without customer role you cannot access any page start with customer
    if (
      req.nextUrl.pathname.startsWith("/customer") &&
      req.nextauth.token.role != "customer"
    ) {
      return NextResponse.rewrite(new URL("/", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ["/dashboard/:path", "/customer/:path"],
};
