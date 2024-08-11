import {auth } from '@/app/_lib/auth';

export const metadata = {
  title: 'Guest area'
}

export default async function Page () {
  const session = await auth();
  console.log(session)
  const firstName = session.user.name.split(' ')[0];
  return (
    <h1>Hello {firstName}!</h1>
  )
}