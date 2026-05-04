import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tarkasindia.in'),
  title: 'Tarkas - Premium Floor Wire Protectors',
  description: 'Protect Your Wires, Protect Your Space. Premium quality floor wire protectors for safe and organized cable management.',
  keywords: 'floor wire protector, cable management, wire protection, safety, Tarkas',
  authors: [{ name: 'Tarkas' }],
  creator: 'Tarkas',
  publisher: 'Tarkas',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-48x48.png', type: 'image/png', sizes: '48x48' },
      { url: '/icon.png', type: 'image/png', sizes: '1024x1024' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', type: 'image/png', sizes: '180x180' },
    ],
  },
  openGraph: {
    title: 'Tarkas - Premium Floor Wire Protectors',
    description: 'Protect Your Wires, Protect Your Space. Premium quality floor wire protectors for safe and organized cable management.',
    url: '/',
    siteName: 'Tarkas',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/file_00000000166862438e3863dca6ea2cf7.png',
        width: 1024,
        height: 1024,
        alt: 'Tarkas logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tarkas - Premium Floor Wire Protectors',
    description: 'Protect Your Wires, Protect Your Space. Premium quality floor wire protectors for safe and organized cable management.',
    images: ['/file_00000000166862438e3863dca6ea2cf7.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
