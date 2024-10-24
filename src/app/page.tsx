import { headers } from "next/headers";

export default async function Home() {
  const headersList = await headers()
  const pathname = headersList.get('x-school-name')

  console.log('PATHNAME STATIC', pathname)

  return (
    <h1>{pathname}</h1>
  );
}
