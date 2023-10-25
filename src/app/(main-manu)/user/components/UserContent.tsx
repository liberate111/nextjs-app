"use client";

import { Table, Container, Title } from "@mantine/core";
import { Prisma } from "@prisma/client";
import Link from "next/link";

const userWithProfile = Prisma.validator<Prisma.UserDefaultArgs>()({
    include: { profile: true },
})
type UserWithProfile = Prisma.UserGetPayload<typeof userWithProfile>


export default function UserContent({ users }: any) {
  const rows = users.map((user: UserWithProfile) => (
    <Table.Tr key={user.id}>
      <Table.Td>{user.id}</Table.Td>
      {/* <Table.Td>{user.firstName}</Table.Td>
      <Table.Td>{user.lastName}</Table.Td> */}
      <Table.Td>{user.fullName}</Table.Td>
      <Table.Td>{user.profile?.address}</Table.Td>
      <Table.Td>
        <Link href={'/user/' + user.id}>
            Detail
        </Link>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Container size="lg" mt={20}>
      <Title>Users</Title>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>ID</Table.Th>
            <Table.Th>Fullname</Table.Th>
            <Table.Th>Address</Table.Th>
            <Table.Th>Action</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Container>
  );
}
