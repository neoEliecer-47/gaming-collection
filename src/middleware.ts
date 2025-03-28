import { NextRequest, NextResponse } from "next/server";

//const SECRET = process.env.JWT_SECRET || "secret_key";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token")?.value;
  //console.log('collection',pathname)
  //const ip = request.ip || request.headers.get('x-forwarded-for');

  if (pathname.startsWith("/collections")) {
    const country = request.geo?.country || 'MT';
    console.log("country", country);
    if (country === "MT") {
      return NextResponse.json(
        { message: "Access to this content is restricted in your country" },
        { status: 403 }
      );
    }
  }

  if (pathname.startsWith("/user")) {
    console.log(token)
    if (!token) {
        console.log('here middlewareee')
        return NextResponse.redirect(new URL("/", request.url)); //redirect to home if user is not authenticated
    }

    return NextResponse.next();
  
  }

}

export const config = {
    matcher: ["/collections/:path*", "/user"],
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
