'use server'

import { headers } from "next/headers"

function formatHostname(hostName: string) {
  const hostWithPort = hostName.split('.')[0]
  return hostWithPort.split(':')[0]
}

export default async function DynamicHome() {
  const dominioMap: any = {
    'multitenancy-poc': 'teresiano',
    'multitenancy-poc2': 'land-pituba'
  }
  const hostname = (await headers()).get('x-forwarded-host') as string
  const nome = formatHostname(hostname) as any
  const escola = process.env.NEXT_PUBLIC_NODE_ENV === 'local' ? 'teresiano' : dominioMap[nome]
  const data = await fetch(`https://aey7vvraaf.execute-api.us-east-1.amazonaws.com/dev/v2/schools/${escola}?registered_student=true`, { cache: 'force-cache' })
  const activities = await data.json()

  return (
    <>
      <h1>{JSON.stringify(activities)}</h1>
    </>
  );
}
