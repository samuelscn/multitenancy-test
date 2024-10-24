import { headers } from 'next/headers'

function formatHostname(hostName: string) {
  const hostWithPort = hostName.split('.')[0]
  return hostWithPort.split(':')[0]
}

export default async function DynamicHome() {
  const headersData = await headers()
  const hostname = headersData.get('x-forwarded-host') as string

  console.log('HOSTNAME', hostname)

  return (
    <h1>{formatHostname(hostname)}</h1>
  );
}
