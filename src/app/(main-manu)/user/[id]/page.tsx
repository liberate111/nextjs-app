import prisma from "@/src/lib/db";
import { Container, Title } from "@mantine/core";

async function getUserById(id : number) {
    return await prisma.user.findUnique({
        where: {id: id},
        select: {
            profile: true,
            firstName: true,
            blogs: true
        }
    })
}

export default async function Page({ params }: {
  params: { id: string };
}) {
  const id = params.id;
  const user = await getUserById(Number(id));

  return user ? (
    <>
    <Container>
        <Title>{user?.firstName}</Title>
    </Container>
    </>
  ) : (
    <>
      <Container size={"lg"}>
        <p>Not found</p>
      </Container>
    </>
  );
}