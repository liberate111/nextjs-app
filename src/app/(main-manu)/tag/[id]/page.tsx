import { Container } from "@mantine/core";
import { getTagById } from "../services/tag-service";

type TagDetailProps = {
  params: { id: string };
};

export default async function Page({ params }: TagDetailProps) {
  const data = await getTagById(Number(params.id));

  return data ? (
    <>
    <Container>{JSON.stringify(data)}</Container>
    </>
  ) : (
    <>
      <Container size={"lg"}>
        <p>Not found</p>
      </Container>
    </>
  );
}
