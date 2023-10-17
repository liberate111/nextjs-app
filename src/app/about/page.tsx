import { Metadata } from 'next'
import Link from 'next/link'
 
export const metadata: Metadata = {
  title: 'About Next.js',
  description: 'about page'
}

export default function Page() {
    
  return (
    <main>
      about Page

      <br />
      <Link href="/" replace={true}>Home</Link>
    </main>
  );
}