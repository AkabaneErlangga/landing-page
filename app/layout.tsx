import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nodewave - Solusi Teknologi Untuk Kita Semua',
  description: 'Nodewave - Solusi Teknologi Untuk Kita Semua',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <head>
      <link rel='icon' href='https://www.nodewave.id/favicon.ico'/>
    </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
