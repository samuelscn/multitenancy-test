'use server'

export default async function DynamicHome() {
  const data = await fetch('https://aey7vvraaf.execute-api.us-east-1.amazonaws.com/dev/v2/schools/teresiano/activities?registered_student=true')
  const activities = await data.json()

  return (
    <>
      <h1>{activities.school_name}</h1>
      {activities.activities.map((activity: any) => (<li>{activity.name}</li>))}
    </>
  );
}
