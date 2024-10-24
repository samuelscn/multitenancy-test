import { headers } from "next/headers";

export default async function Home() {
  const headersList = await headers()
  const pathname = headersList.get('schoolName')

  console.log('PATHNAME STATIC', pathname)

  return (
    <h1>{pathname}</h1>
  );
}
