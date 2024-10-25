import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

function formatHostname(hostName: string) {
  const hostWithPort = hostName.split('.')[0]
  return hostWithPort.split(':')[0]
}

export async function middleware(request: NextRequest) {
  const url = new URL(request.url);
  const hostName = request.headers.get('Host') as string
  const schoolName = formatHostname(hostName)
  const dominioMap: any = {
    'multitenancy-poc': 'teresiano',
    'multitenancy-poc2': 'land-pituba'
  }
  const response = NextResponse.rewrite(new URL(`/${schoolName}${url.pathname}`, request.url))
  if (schoolName === 'multitenancy-poc') {
    response.cookies.set('nome', schoolName)
  } else {
    response.cookies.set('nome', schoolName)
  }

  return response
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
