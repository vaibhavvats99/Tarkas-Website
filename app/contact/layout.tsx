import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Tarkas Customer Support',
  description: 'Get in touch with Tarkas for product information or general inquiries. Multiple ways to reach our team including phone, email, and live chat.',
  keywords: 'contact tarkas, customer support, product information, technical support, get in touch',
  openGraph: {
    title: 'Contact Us - Tarkas Customer Support',
    description: 'Get in touch with Tarkas for product information, technical support, or general inquiries.',
    url: 'https://tarkasindia.in/contact',
    siteName: 'Tarkas',
    images: [
      {
        url: '/api/placeholder/1200/630',
        width: 1200,
        height: 630,
        alt: 'Contact Tarkas Support Team',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - Tarkas Customer Support',
    description: 'Get in touch with Tarkas for product information, technical support, or general inquiries.',
    images: ['/api/placeholder/1200/630'],
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}