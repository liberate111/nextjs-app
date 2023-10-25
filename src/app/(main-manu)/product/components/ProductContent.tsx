import { Badge, Card, CardSection, Group, SimpleGrid, Text, Image, Button } from '@mantine/core';
import NextImage from 'next/image'
import { ProductResponse, Product } from '../types/product-response';
import Link from 'next/link';

export function ProductContent({data} : ProductResponse) {
  return (
    <SimpleGrid cols={4}>
      {
        data &&
        data.map((item: Product, index: number) => {
            return (
                <Card shadow="sm" padding="lg" radius="md" withBorder key={item.id}>
                    <CardSection>
                        <Image
                        src={item.picture}
                        height={0}
                        component={NextImage}
                        width={0}
                        sizes='100vm'
                        style={{width: '100%', height: 216}}
                        alt={item.detail}
                        />
                    </CardSection>
        
                    <Group justify="space-between" mt="md" mb="xs">
                        <Text fw={500}>{item.title}</Text>
                        <Badge color="pink" variant="light">
                        On Sale
                        </Badge>
                    </Group>
        
                    <Text size="sm" c="dimmed">
                        {item.detail}
                    </Text>

                    <Button
                      component={Link}
                      href={'/product/'+item.id}
                      variant='light'
                      color='redTheme'
                      fullWidth
                      mt='md'
                      radius='md'
                    >
                      Detail More
                    </Button>
                </Card>
            )
        })
      }
    </SimpleGrid>
  )
}