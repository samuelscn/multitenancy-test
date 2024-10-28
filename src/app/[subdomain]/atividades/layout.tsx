export default async function AtividadeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await fetch(
    `https://aey7vvraaf.execute-api.us-east-1.amazonaws.com/dev/v2/schools/teresiano?registered_student=true`,
    { next: { revalidate: 86400 } }
  )
  const schoolData = await data.json()
  console.log('SCHOOL DATA', schoolData)

  return (
    <section>
      <h1>SEGUNDO LAYOUT</h1>
      {children}
    </section>
  );
}
