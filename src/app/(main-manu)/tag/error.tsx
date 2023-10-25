'use client' // Error components must be Client Components
 
import { Button, Container, Title } from '@mantine/core'
import { useEffect } from 'react'
 
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
 
  return (
    <Container>
        <Title>Something went wrong!</Title>
      <Button onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }>
      Try again
      </Button>

      {/* <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button> */}

    </Container>
  )
}