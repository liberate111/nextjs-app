import ContactContent from "./components/ContactContent";
import Image from 'next/image';

export default function Page() {
  return (
    <main>
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