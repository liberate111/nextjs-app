import { Center, Container, Text } from "@mantine/core";
import { ProductContent } from "./components/ProductContent";

async function getProduct() {
  const res = await fetch('https://api.codingthailand.com/api/course', {
    // next: {revalidate: 3}
    cache: "no-store"
  })
  if (!res.ok) {
    throw new Error('get API error')
  }
  return res.json();
}

export default async function Page() {
  const resp = await getProduct();

  return (
    <Container size={"lg"}>
      <Text> product </Text>
      <Center>
      </Center>

      <ProductContent data={resp.data}/>
      
    </Container>
);
}