import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl
        //console.log('collection',pathname)
        //const ip = request.ip || request.headers.get('x-forwarded-for');
       
        if(pathname.startsWith('/collections')){
            const country = request.geo?.country
            console.log('country',country)
            if(country === 'MT'){
                return NextResponse.json({ message: 'Access to this content is restricted in your country' }, { status: 403 })
            }
        }

        return NextResponse.next()
}


export const config = {
    matcher: '/collections/:path*'
}



// let country = 'US'; // Default fallback
//   if (ip) {
//     try {
//       const response = await fetch(`https://ipapi.co/${ip}/country/`);
//       country = await response.text();
//     } catch (error) {
//       console.error('Failed to fetch country:', error);
//     }
//   }