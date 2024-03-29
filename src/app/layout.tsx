import type { Metadata } from 'next';
import { Amiko } from 'next/font/google';
import './globals.css';

const amiko = Amiko({subsets: ['latin'], weight: ['400', '600', '700']});

export const metadata: Metadata = {
  title: 'fnmatheus',
  description: 'Personal portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={amiko.className}>{children}</body>
    </html>
  )
}
