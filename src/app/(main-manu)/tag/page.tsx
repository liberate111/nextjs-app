
import { Container, Title } from '@mantine/core';
import { countTag, getTagRaw, getTags, getTagById } from './services/tag-service';
import { SearchForm, SearchFormById } from './components/SearchForm';
import { searchTagAction, searchTagActionById } from './services/tag-action';
import prisma from '@/src/lib/db';

export default async function Page({searchParams} : any) {
  const tag = searchParams.tag;
  let tags : any[]
  if(tag) {
    tags = await prisma.tag.searchTagByName(tag);
  } else {
    tags = await getTags();
  }

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
        <br/><br/>
        <br/><br/>
        <form action={searchTagAction}>
          <SearchForm/>
        </form>

        <form action={searchTagActionById}>
          <SearchFormById/>
        </form>

        <hr />
        {
          tags.length > 0 ? <p>{JSON.stringify(tags)}</p> : <p>not found</p>
        }
      </Container>
    </>
  )
}

