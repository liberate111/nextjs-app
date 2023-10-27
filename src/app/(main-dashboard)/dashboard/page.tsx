import { getServerSession } from "next-auth/next"
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { Image } from '@mantine/core'

export default async function Page() {
  const session = await getServerSession(authOptions)

  return (
    <main>
      <h1>Dashboard</h1>
      <h2>Welcome {session?.user?.name}</h2>
      <p>{session?.user?.email}</p>
      <div>
        <Image src={session?.user?.image} alt="profile" width='1rem' height='4rem'></Image>
      </div>
    </main>
  );
}