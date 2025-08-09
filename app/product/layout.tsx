import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Premium Floor Wire Protector - Tarkas',
  description: 'Heavy-duty floor wire protectors designed for maximum cable protection and safety. Easy installation, durable construction, and professional appearance.',
  keywords: 'floor wire protector, cable protection, wire management, safety equipment, heavy duty, professional grade',
  openGraph: {
    title: 'Premium Floor Wire Protector - Tarkas',
    description: 'Heavy-duty floor wire protectors designed for maximum cable protection and safety. Easy installation, durable construction, and professional appearance.',
    url: 'https://tarkasindia.in/product',
    siteName: 'Tarkas',
    images: [
      {
        url: '/api/placeholder/1200/630',
        width: 1200,
        height: 630,
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
    images: ['/api/placeholder/1200/630'],
  },
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}