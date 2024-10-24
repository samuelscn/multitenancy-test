import { headers } from 'next/headers'

export default async function DynamicHome() {
  const headersList = await headers()
  const pathname = headersList.get('schoolName')

  console.log('PATHNAME SUBDOMAIN', pathname)

  return (
    <h1>{pathname}</h1>
  );
}
