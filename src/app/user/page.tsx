
import prisma from "@/src/lib/db";
import UserContent from "./components/UserContent";


async function getUser() {
    // return await prisma.user.findMany({
    //     orderBy: {id: "desc"},
    //     include: {
    //         profile: {
    //             select: {address: true}
    //         }
    //     }
    // })
    return await prisma.user.findMany({
        select: {
            id: true,
            // firstName : true,
            // lastName: true,
            fullName: true,
            profile: {
                select: {
                    address : true
                }
            }
        }
    })
}

export default async function Page() {
  const data = await getUser();
  return (
  <main>
    {/* {JSON.stringify(data)} */}
    <UserContent users={data}/>
  </main>
  )
}