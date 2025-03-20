import { NextRequest, NextResponse } from 'next/server'
import createMiddleware from 'next-intl/middleware'
import { routing } from '@/core/i18n/routing'

const intlMiddleware = createMiddleware(routing)

export default function middleware(req: NextRequest) {
  // Serve index.html for the talks page
  if (req.nextUrl.pathname === '/talks/freelancing-with-ai') {
    return NextResponse.rewrite(new URL('/talks/freelancing-with-ai/index.html', req.url))
  }

  // Use next-intl middleware for other routes
  return intlMiddleware(req)
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
