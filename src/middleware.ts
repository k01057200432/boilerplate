import "reflect-metadata"
import type { NextRequest } from 'next/server';



// See "Matching Paths" below to learn more
export const config = {
    matcher: '/api/:path*',
};

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {



}

