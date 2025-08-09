import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Tarkas Cable Protection Solutions',
  description: 'Learn about Tarkas, our mission to revolutionize workplace safety through innovative cable protection solutions. Discover our story, values, and team.',
  keywords: 'about tarkas, company story, cable protection company, workplace safety, innovation, team',
  openGraph: {
    title: 'About Us - Tarkas Cable Protection Solutions',
    description: 'Learn about Tarkas, our mission to revolutionize workplace safety through innovative cable protection solutions.',
    url: 'https://tarkas.com/about',
    siteName: 'Tarkas',
    images: [
      {
        url: '/api/placeholder/1200/630',
        width: 1200,
        height: 630,
        alt: 'Tarkas Team and Company Story',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - Tarkas Cable Protection Solutions',
    description: 'Learn about Tarkas, our mission to revolutionize workplace safety through innovative cable protection solutions.',
    images: ['/api/placeholder/1200/630'],
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}