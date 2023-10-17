import { AppHeader } from "@/src/components/AppHeader"

import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Contact Next.js',
  description: 'contact page'
}

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <AppHeader/>
   
        {children}
      </section>
    )
  }