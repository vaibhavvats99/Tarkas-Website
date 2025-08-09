import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tarkas - Premium Floor Wire Protectors',
  description: 'Protect Your Wires, Protect Your Space. Premium quality floor wire protectors for safe and organized cable management.',
  keywords: 'floor wire protector, cable management, wire protection, safety, Tarkas',
  authors: [{ name: 'Tarkas' }],
  creator: 'Tarkas',
  publisher: 'Tarkas',
  openGraph: {
    title: 'Tarkas - Premium Floor Wire Protectors',
    description: 'Protect Your Wires, Protect Your Space. Premium quality floor wire protectors for safe and organized cable management.',
    url: 'https://tarkasindia.in',
    siteName: 'Tarkas',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tarkas - Premium Floor Wire Protectors',
    description: 'Protect Your Wires, Protect Your Space. Premium quality floor wire protectors for safe and organized cable management.',
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