import { cookies, headers } from 'next/headers'

export default async function DynamicHome() {
  const headersList = await headers()
  const pathname = headersList.get('x-school-name')
  const nextCookie = await cookies()
  const hostname = nextCookie.get('schoolName')?.value

  console.log('PATHNAME SUBDOMAIN', pathname)
  console.log('HOSTNAME', hostname)

  return (
    <h1>{pathname}</h1>
  );
}
