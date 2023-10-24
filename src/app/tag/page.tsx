
import { Container, Title } from '@mantine/core';
import { countTag, getTagRaw, getTags } from './services/tag-service';
import { raw } from '@prisma/client/runtime/library';

export default async function Page() {
  const data = await getTags();
  const count = await countTag();
  const raw = await getTagRaw();
  return (
    <>
      <Container>
        <Title>
          Total tag {count}
        </Title>
        <br/><br/>
        {JSON.stringify(data)}
        <br/><br/>
        {JSON.stringify(raw)}
      </Container>
    </>
  )
}

