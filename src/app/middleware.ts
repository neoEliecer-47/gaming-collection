import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl
    console.log('collection',pathname)

    if(pathname.startsWith('/collections')){
        console.log('HEREEEEEE')
        const country = request.geo?.country || 'MT'
        console.log('country',country)
        if(country === 'MT'){
            return NextResponse.json({ message: 'Acces to this content is restricted in your country' }, { status: 403 })
        }
    }

    return NextResponse.next()
}


// Configure the middleware to run only on the collections route
export const config = {
    matcher: '/collections/:path*'
}