'use client'

import { url } from 'inspector';
import Link from 'next/link'
import { useRouter } from 'next/navigation'


export default function Page() {

    const router = useRouter();

    const goToAboutPage = () => {
        router.push('/about')
    }

  return (
    <main>
      contact Page

      <br />
      <Link href="/" replace={true}>Home</Link>
      <br />
      <button onClick={goToAboutPage}>About page</button>
    </main>
  );
}