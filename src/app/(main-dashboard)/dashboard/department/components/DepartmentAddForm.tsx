import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import { notifications } from "@mantine/notifications";
import * as yup from "yup";
import React from 'react';
import { Prisma } from '@prisma/client';
import { http } from '@/src/services/http-service';

export default function DepartmentAddForm({close, mutate}: any) {
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

  const insertToDB =  async (values: Prisma.DepartmentCreateInput) => {
    const response = await http.post('http://localhost:3000/api/department', values)
    notifications.show({
        title: 'result',
        message: response.data.message
      })
    // close modal
    close()
    // re-fetch data swr
    await mutate()
  }

  return (
    <Box maw={340} mx="auto">
      <form onSubmit={form.onSubmit(insertToDB)}>
        <TextInput
          withAsterisk
          label="name"
          {...form.getInputProps('name')}
        />

        <Checkbox
          mt="md"
          label="Add"
          {...form.getInputProps('termsOfService', { type: 'checkbox' })}
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}