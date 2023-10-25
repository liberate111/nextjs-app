'use client' // Error components must be Client Components
 
import { Button, Container, Title } from '@mantine/core'
import { useEffect } from 'react'
import { Alert } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';

 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  const icon = <IconInfoCircle />;
 
  return (
    <Container>
        <Title>Something went wrong!</Title>
        <Alert variant="filled" color="rgba(135, 0, 0, 1)" radius="xl" withCloseButton title="Alert title" icon={icon}>
            {error.message}
        </Alert>
      <Button onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }>
      Try again
      </Button>
    </Container>
  )
}