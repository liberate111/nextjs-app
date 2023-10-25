'use client'

import { Loader, Center } from "@mantine/core";

export default function Loading() {
    // Or a custom loading skeleton component
    return (
      <>
      <Center>
        <Loader color="redTheme" size="xl" type="dots" />;
      </Center>
      </>
    )
  }