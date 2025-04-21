import { NextRequest,NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

export function middleware(request) {

    let cookies = request.cookies.get('my-cookie')
    let headers = new Headers(request.headers)
    const isLoggedIn = true;
    // if(!isLoggedIn && request.url === "http://localhost:3000/test") {
    //     // return NextResponse.redirect('/')
    //     return NextResponse.redirect(new URL('/', request.url))
    // }
    // return NextResponse.next()

    if (isLoggedIn) {
        return NextResponse.next()
    }
    return NextResponse.redirect(new URL('/', request.url))

    // --------------------------------------
    // return NextResponse.json({
    //     message: "Hello from middleware",
    // })

    // --------------------------------------
    // Temporary JSON response for debugging
    // return NextResponse.json({
    //     cookies: cookies || 'No cookies found',
    //     headers: Object.fromEntries(headers.entries()),
    // });
}

export const config = {
    matcher: ['/test'],
}