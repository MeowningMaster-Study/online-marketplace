import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { auth } from '@/utilities/auth'

export default async function middleware(request: NextRequest) {
	if (!auth.get()) {
		return NextResponse.redirect(new URL('/login', request.url))
	}
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico|login|sign-up).*)'],
}
