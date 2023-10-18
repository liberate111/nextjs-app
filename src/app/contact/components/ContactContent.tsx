'use client'

import { useRouter } from 'next/navigation'
import Loading from '../loading';
import { Button } from '@mantine/core';


export default function ContactContent() {

    const router = useRouter();

    const goToAboutPage = () => {
        router.push('/about')
    }

  return (
    <>
      <button onClick={goToAboutPage}>About page</button> <br />
      <button onClick={()=>{router.refresh()}}>Refresh page</button><br />

      <Button color="org" onClick={goToAboutPage}>About page</Button>
    </>
  );
}