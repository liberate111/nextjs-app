import DepartmentEditForm from "../components/DepartmentEditForm";

export default function Page({ params }: {
  params: { id: string };
}) {
  const id = params.id;
  return (
    <main>
      <DepartmentEditForm id={id}/>
    </main>
  );
}