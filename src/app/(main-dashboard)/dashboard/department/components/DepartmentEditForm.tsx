'use client'

import { TextInput, Checkbox, Button, Group, Box, Title } from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import { notifications } from "@mantine/notifications";
import * as yup from "yup";
import React, { useEffect } from 'react';
import { Prisma } from '@prisma/client';
import { fetcher, http } from '@/src/services/http-service';
import useSWR from "swr";
import { redirect, useRouter } from 'next/navigation';

export default function DepartmentEditForm({id} : {id: string}) {
    const {data} = useSWR(`http://localhost:3000/api/department/${id}`, fetcher)
    const router = useRouter()
    const schema = yup.object().shape({
        name: yup.string().required('department name is empty')
    })

  const form = useForm({
    initialValues: {
      name: '',
    },
    validate: yupResolver(schema),
    validateInputOnChange: true                                                 
  });

  const updateToDB =  async (values: any) => {
    const response = await http.put('http://localhost:3000/api/department/' + values.id, {
        name: values.name
    })
    notifications.show({
        title: 'result',
        message: response.data.message
      })
    router.replace('/dashboard/department')
  }

  useEffect(() => {
    form.setValues(data)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return (
      <Box maw={340} mx="auto">
        { data && (<Title>Edit record</Title>)}
        <p>{JSON.stringify(data)}</p>
      <form onSubmit={form.onSubmit(updateToDB)}>
        <TextInput
          withAsterisk
          label="new name"
          {...form.getInputProps('name')}
        />

        <Checkbox
          mt="md"
          label="Edit"
          {...form.getInputProps('termsOfService', { type: 'checkbox' })}
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}