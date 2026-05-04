import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Premium Floor Wire Protector - Tarkas',
  description: 'Heavy-duty floor wire protectors designed for maximum cable protection and safety. Easy installation, durable construction, and professional appearance.',
  keywords: 'floor wire protector, cable protection, wire management, safety equipment, heavy duty, professional grade',
  alternates: {
    canonical: '/product',
  },
  openGraph: {
    title: 'Premium Floor Wire Protector - Tarkas',
    description: 'Heavy-duty floor wire protectors designed for maximum cable protection and safety. Easy installation, durable construction, and professional appearance.',
    url: '/product',
    siteName: 'Tarkas',
    images: [
      {
        url: '/file_00000000166862438e3863dca6ea2cf7.png',
        width: 1024,
        height: 1024,
        alt: 'Tarkas Premium Floor Wire Protector',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Floor Wire Protector - Tarkas',
    description: 'Heavy-duty floor wire protectors designed for maximum cable protection and safety.',
    images: ['/file_00000000166862438e3863dca6ea2cf7.png'],
  },
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
