import { getTagById } from "../services/tag-service";

 type TagDetailProps = {
      params: {id: string}
  }
  
  export default async function Page({ params }: TagDetailProps) {
    const data = await getTagById(Number(params.id));
  
    return <main>
      {JSON.stringify(data)}
    </main>;
  }