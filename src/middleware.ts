import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

function formatHostname(hostName: string) {
  const hostWithPort = hostName.split('.')[0]
  return hostWithPort.split(':')[0]
}

export function middleware(request: NextRequest) {
  const url = new URL(request.url);
  const hostName = request.headers.get('Host') as string
  const schoolName = formatHostname(hostName)
  return NextResponse.rewrite(new URL(`/${schoolName}${url.pathname}`, request.url))
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
