import ContactContent from "./components/ContactContent";
import Image from 'next/image';
import { Suspense } from 'react'
import Loading from "./loading";
import { Container } from '@mantine/core';

export default function Page() {
  return (
    <>
      <Container size={'lg'} mt={5}>
        <ContactContent/>

      </Container>
    </>
    
    
  );
}