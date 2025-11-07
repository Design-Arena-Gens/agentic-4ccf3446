import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VIKAS AI Assistant - Fastrac Digital Service Provider',
  description: 'Professional digital service representative for VIKAS CSC',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
