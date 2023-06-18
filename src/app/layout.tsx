import './globals.css'
import Navbar from '@/components/Navbar'

import { Kanit } from 'next/font/google'

const roboto = Kanit({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Navbar />
      <body className={roboto.className}>{children}</body>
  
    </html>
  )
}
