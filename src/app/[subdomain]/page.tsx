'use server'

import { AddProductButton } from "@/components/add-product-button"
import { CartButton } from "@/components/cart-button"
import { cookies, headers } from "next/headers"
import { Suspense } from "react"

// function formatHostname(hostName: string) {
//   const hostWithPort = hostName.split('.')[0]
//   return hostWithPort.split(':')[0]
// }

// async function RenderActivities() {
//   const data = await fetch(`https://aey7vvraaf.execute-api.us-east-1.amazonaws.com/dev/v2/schools/teresiano/activities?registered_student=true`, { next: { revalidate: 10 } })
//   const activities = await data.json() as any
//   return (
//     <>
//       { activities.activities.map((activity: any) => <p>{activity.name}</p>) }
//     </>
//   )
// }

export default async function DynamicHome() {
  // const dominioMap: any = {
  //   'multitenancy-poc': 'teresiano',
  //   'multitenancy-poc2': 'land-pituba'
  // }
  // const hostname = (await headers()).get('x-forwarded-host') as string
  // const nome = formatHostname(hostname) as any
  // const escola = process.env.NEXT_PUBLIC_NODE_ENV === 'local' ? 'teresiano' : dominioMap[nome]
  // const data = await fetch(`https://aey7vvraaf.execute-api.us-east-1.amazonaws.com/dev/v2/schools/${escola}?registered_student=true`, { cache: 'force-cache' })
  // const activities = await data.json()
  const cookei = cookies()
  const name = (await cookei).get('nome')?.value

  return (
    <>
      <h1>{name}</h1>
    </>
  );
}
