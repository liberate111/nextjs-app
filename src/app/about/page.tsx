import { Center, Container, Title, Text } from '@mantine/core';
import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation';
 
export const metadata: Metadata = {
  title: 'About Next.js',
  description: 'about page'
}

function handleErr() {
    throw new Error('error')
}

async function getData() {
  const res = await fetch('https://api.codingthailand.com/api/version');
  if (res.status === 404) {
    notFound();
  }
  if (res.status === 500) {
    throw new Error('server error');
  }
  return res.json();
}
export default async function Page() {
    // handleErr();

    // static rendering
    const data = await getData();
    
    return (
      <Container bg='gray.3' py='sm' size={'lg'} mt={'sm'}>
        <Center>
          <Title order={1}>About page</Title>
        </Center>

        <Text>{ JSON.stringify(data)}</Text>
        <Text fz={'sm'} my={'sm'} c={'org'}> testttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt</Text>
        <br />
        <Link href="/" replace={true}>Home</Link>

      </Container>
   
  );
}