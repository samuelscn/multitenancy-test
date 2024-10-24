import { headers } from 'next/headers'

export default async function DynamicHome() {
  const headersList = await headers()
  const pathname = headersList.get('schoolName')

  return (
    <h1>{pathname}</h1>
  );
}
