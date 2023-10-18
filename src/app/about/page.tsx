import { Center, Container, Title, Text } from '@mantine/core';
import { Metadata } from 'next'
import Link from 'next/link'
 
export const metadata: Metadata = {
  title: 'About Next.js',
  description: 'about page'
}

function handleErr() {
    throw new Error('error')
}

export default function Page() {
    // handleErr();
    
    return (
      <Container bg='gray.3' py='sm' size={'lg'} mt={'sm'}>
        <Center>
          <Title order={1}>About page</Title>
        </Center>

        <Text fz={'sm'} my={'sm'} c={'org'}> testttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt</Text>
        <br />
        <Link href="/" replace={true}>Home</Link>

      </Container>
   
  );
}