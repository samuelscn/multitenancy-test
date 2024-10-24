'use server'

function formatHostname(hostName: string) {
  const hostWithPort = hostName.split('.')[0]
  return hostWithPort.split(':')[0]
}

export default async function DynamicHome({ params }: { params: { subdomain: string } }) {
  const { subdomain } = await params
  const schoolName = process.env.NEXT_PUBLIC_NODE_ENV === 'local' ? 'teresiano' : subdomain
  console.log(subdomain)
  return (
    <h1>{schoolName}</h1>
  );
}
