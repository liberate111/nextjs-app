import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Not Found 404</h2>
      <h3>Could not find requested resource</h3>
      <Link href="/">Return Home</Link>
    </div>
  );
}