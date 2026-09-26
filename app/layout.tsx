import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Gabriel Patel — AI Systems & Full-Stack Developer',
  description:
    'Gabriel Patel builds AI-assisted software, full-stack products, and automation systems. Available for remote technology roles.',
  openGraph: {
    title: 'Gabriel Patel — AI Systems & Full-Stack Developer',
    description:
      'Builds AI-assisted software, full-stack products, and automation systems. Available for remote technology roles.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#080b12',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        <a href="#main-content" className="skip-link">Skip to content</a>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
