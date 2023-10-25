import '../globals.css'
import type { Metadata } from 'next'
import { Inter, Sarabun } from 'next/font/google'
import '@mantine/core/styles.css';
import {theme} from '@/src/theme';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { DLayout } from './dashboard/components/DLayout';


const inter = Inter({ subsets: ['latin'] })
export const sarabun = Sarabun({
  subsets: ['thai'],
  weight: "400"
})

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'KPI tag',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <head>
            <ColorSchemeScript></ColorSchemeScript>
        </head>
      <body>
        <MantineProvider theme={theme}>
          <DLayout>{children}</DLayout>
        </MantineProvider>
      </body>
    </html>
  )
}
