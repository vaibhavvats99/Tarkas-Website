import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products - Tarkas Floor Wire Protectors',
  description: 'Explore Tarkas floor wire protectors built for safe, organized, and durable cable management in homes, offices, studios, and commercial spaces.',
  keywords: 'tarkas products, floor wire protectors, cable protectors, cable management products',
  alternates: {
    canonical: '/products',
  },
  openGraph: {
    title: 'Products - Tarkas Floor Wire Protectors',
    description: 'Explore Tarkas floor wire protectors built for safe, organized, and durable cable management.',
    url: '/products',
    siteName: 'Tarkas',
    images: [
      {
        url: '/file_00000000166862438e3863dca6ea2cf7.png',
        width: 1024,
        height: 1024,
        alt: 'Tarkas floor wire protector products',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Products - Tarkas Floor Wire Protectors',
    description: 'Explore Tarkas floor wire protectors built for safe, organized, and durable cable management.',
    images: ['/file_00000000166862438e3863dca6ea2cf7.png'],
  },
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
