import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

function formatHostname(hostName: string) {
  const hostWithPort = hostName.split('.')[0]
  return hostWithPort.split(':')[0]
}

export function middleware(request: NextRequest) {
  const url = new URL(request.url);
  const hostName = request.headers.get('Host') as string
  const schoolName =
    process.env.NEXT_PUBLIC_NODE_ENV === 'local'
      ? (process.env.NEXT_PUBLIC_SCHOOL_NAME as string)
      : formatHostname(hostName)
  console.log('SCHOOL NAME', schoolName)
  const cookie = request.cookies.get('registeredStudent')
  const response = NextResponse.next()
  response.cookies.set('schoolName', `${schoolName}`)
  if (typeof cookie === 'undefined') {
    response.cookies.set('registeredStudent', 'true')
  }

  request.headers.set("x-school-name", schoolName)

  if (process.env.NEXT_PUBLIC_NODE_ENV === 'local') return response

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
