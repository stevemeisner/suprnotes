import type { Metadata } from 'next'
import '@styles/globals.scss'
import { Inter } from 'next/font/google'
import Header from '@components/Header/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SupaNotes',
  description: 'An anonymous note-taking and sharing app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
