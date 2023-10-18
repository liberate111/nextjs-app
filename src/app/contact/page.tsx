import ContactContent from "./components/ContactContent";
import Image from 'next/image';
import { Suspense } from 'react'
import Loading from "./loading";

export default function Page() {
  return (
    <main>
       {/* <Suspense fallback={<Loading/>}>
        <ContactContent />
      </Suspense> */}
      contact Page
        <br /><br />
      <ContactContent/>
=

    <Image
      src="https://thumbs.dreamstime.com/z/lovebirdpeach-197698382.jpg"
      width={500}
      height={500}
      alt="Picture of the author"
    />
    </main>
  );
}