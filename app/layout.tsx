import Sidebar from '@/components/Sidebar'
import './globals.css'
import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import { getServerSession } from 'next-auth'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GG POS',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={raleway.className}>
        <main className='flex min-h-screen relative'>
          {session && <Sidebar />}
          {children}
        </main>
      </body>
    </html>
  )
}
