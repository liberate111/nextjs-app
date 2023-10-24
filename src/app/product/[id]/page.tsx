async function getData(id : number) {
  const res = await fetch('https://api.codingthailand.com/api/course/'+id, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

type ProductDetailProps = {
    params: {id: string}
}

export default async function Page({ params }: ProductDetailProps) {
  const data = await getData(Number(params.id));

  return <main>
    {JSON.stringify(data)}
  </main>;
}