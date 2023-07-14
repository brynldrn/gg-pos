import Sidebar from '@/components/Sidebar'
import type { Metadata } from 'next'
import { Suspense } from 'react'
import Loading from './loading'

export const metadata: Metadata = {
  title: 'GG POS | App',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <main className='flex min-h-screen relative'>
      <Sidebar />
      <section className='w-full px-8 py-4'>
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
      </section>
    </main>
  )
}
