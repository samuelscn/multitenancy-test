import { headers } from 'next/headers'

function formatHostname(hostName: string) {
  const hostWithPort = hostName.split('.')[0]
  return hostWithPort.split(':')[0]
}

export default async function DynamicHome() {
  const schoolName = process.env.NEXT_PUBLIC_NODE_ENV === 'local' ? 'teresiano' : formatHostname((await headers()).get('x-forwarded-host') as string)

  return (
    <h1>{schoolName}</h1>
  );
}
