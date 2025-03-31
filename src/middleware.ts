import { NextRequest, NextResponse } from "next/server";

//const SECRET = process.env.JWT_SECRET || "secret_key";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const session = request.cookies.get("session")?.value;
  //console.log('collection',pathname)
  //const ip = request.ip || request.headers.get('x-forwarded-for');

  const country =
    process.env.VERCEL_ENV === "production" //this is for vercel production and NEXT15
      ? request.headers.get("x-vercel-ip-country") // Vercel production
      : "MT"; // Mock value (e.g., 'US', 'GB', etc.)

  if (pathname.startsWith("/collections")) {
    console.log("country", country);
    if (country === "MT") {
      return NextResponse.json(
        { message: "Access to this content is restricted in your country" },
        { status: 403 }
      );
    }
  }

  if (pathname.startsWith("/user")) {
    //console.log(token)
    if (!session) {
      console.log("here middlewareee");
      return NextResponse.redirect(new URL("/login", request.url)); //redirect to home if user is not authenticated
    }

    return NextResponse.next();
  }

  if (pathname.startsWith("/login")) {
    //console.log(token)
    if (session) {
      
      return NextResponse.redirect(new URL("/user", request.url)); //redirect to home if user is not authenticated
    }

    return NextResponse.next();
  }
  
}



export const config = {
  matcher: ["/collections/:path*", "/user", "/login"],
  //runtime: 'nodejs',//forces nodejs runtime
};

// let country = 'US'; // Default fallback
//   if (ip) {
//     try {
//       const response = await fetch(`https://ipapi.co/${ip}/country/`);
//       country = await response.text();
//     } catch (error) {
//       console.error('Failed to fetch country:', error);
//     }
//   }
