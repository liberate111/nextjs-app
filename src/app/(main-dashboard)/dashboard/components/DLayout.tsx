'use client'

import { useDisclosure } from '@mantine/hooks';
import { AppShell, Burger, Button, Group, Skeleton , Text, Title} from '@mantine/core';
import { NavbarSimpleColored } from './NavbarSimple';
import { signOut } from "next-auth/react"
import { Session } from 'next-auth';

export function DLayout({children, session} : {children: React.ReactNode, session: Session | null}) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: { base: 60, md: 70, lg: 80 } }}
      navbar={{
        width: { base: 200, md: 300, lg: 300 },
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify='space-between'>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Title visibleFrom='sm'>PMAS</Title>
          <Group>
            <Text>
                Welcome 
            </Text>
            <Button onClick={ () => {
              signOut({ callbackUrl: '/'})
            }}>
                Logout
            </Button>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar>
        <NavbarSimpleColored/>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}

