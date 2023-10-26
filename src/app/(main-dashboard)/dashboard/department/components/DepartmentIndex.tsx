"use client";

import { fetcher } from "@/src/services/http-service";
import {
  Center,
  Container,
  Title,
  Text,
  Loader,
  Alert,
  Table,
  Pagination,
  ActionIcon
} from "@mantine/core";
import {modals} from '@mantine/modals'
import { IconEditCircle, IconTrashXFilled} from '@tabler/icons-react'
import { Department } from "@prisma/client";
import { useState } from "react";
import useSWR from "swr";
import Page from "../page";

export default function DepartmentIndex() {
    const [page, setPage] = useState(1)
    const pageSize = 8

  const { data, isLoading, error } = useSWR(
   `http://localhost:3000/api/department?page=${page}&pageSize=${pageSize}`,
    fetcher
  );

  const openModal = (id: number) => {modals.openConfirmModal({
    title: 'Confirm to delete this record',
    labels: {confirm: 'ACCEPT' , cancel: 'BACK'},
    closeOnConfirm: true,
    onConfirm() {
    
    },
  })}

  if (isLoading) {
    return (
      <>
        <Center mt={"lg"}>
          <Loader color="redTheme" size={200} type="dots" />
        </Center>
      </>
    );
  }
  if (error) {
    return (
      <>
        <Center mt={"lg"}>
          <Alert>{JSON.stringify(error)}</Alert>
        </Center>
      </>
    );
  }

  return (
    <main>
      <>
        <Title>Department list {data.totalRecord} record</Title>
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>ID</Table.Th>
              <Table.Th>NAME</Table.Th>
              <Table.Th>Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {data.data.map((element: any) => (
              <Table.Tr key={element.id}>
                <Table.Td>{element.id}</Table.Td>
                <Table.Td>{element.name}</Table.Td>
                <Table.Td> 
                    <ActionIcon color="blue">
                        <IconEditCircle/>
                    </ActionIcon>
                    {'      '}
                    <ActionIcon color='red' onClick={() => {
                        openModal(element.id)
                    }}>
                        <IconTrashXFilled/>
                    </ActionIcon>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
        <hr />
        <Pagination value={page} onChange={setPage} total={Math.ceil(data.totalRecord/pageSize)} />
      </>
    </main>
  )
}

