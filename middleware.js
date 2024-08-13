import { NextResponse } from 'next/server'

export function middleware(request) {
    // Your middleware logic here
    console.log('Middleware executed')

    // Example: add a custom header
    const response = NextResponse.next()
    response.headers.set('/blog', 'my-value')

    return response
}

// Optional: Configure paths for middleware to run on
export const config = {
    matcher: ['/api/:path*', '/dashboard/:path*'],
}