import { Loader, Center } from "@mantine/core";

export default function Loading() {
    // Or a custom loading skeleton component
    return (
      <>
      <Center>
        <h2 color="redTheme">product loading</h2>
        <Loader color="redTheme" size={200} type="dots" />;
      </Center>
      </>
    )
  }