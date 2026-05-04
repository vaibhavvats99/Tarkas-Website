import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Tarkas Cable Protection Solutions',
  description: 'Learn about Tarkas, our mission to revolutionize workplace safety through innovative cable protection solutions. Discover our story, values, and team.',
  keywords: 'about tarkas, company story, cable protection company, workplace safety, innovation, team',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Us - Tarkas Cable Protection Solutions',
    description: 'Learn about Tarkas, our mission to revolutionize workplace safety through innovative cable protection solutions.',
    url: '/about',
    siteName: 'Tarkas',
    images: [
      {
        url: '/file_00000000166862438e3863dca6ea2cf7.png',
        width: 1024,
        height: 1024,
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
    images: ['/file_00000000166862438e3863dca6ea2cf7.png'],
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
