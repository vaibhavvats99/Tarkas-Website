import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Tarkas Customer Support',
  description: 'Get in touch with Tarkas for product information or general inquiries. Multiple ways to reach our team including phone, email, and live chat.',
  keywords: 'contact tarkas, customer support, product information, technical support, get in touch',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us - Tarkas Customer Support',
    description: 'Get in touch with Tarkas for product information, technical support, or general inquiries.',
    url: '/contact',
    siteName: 'Tarkas',
    images: [
      {
        url: '/file_00000000166862438e3863dca6ea2cf7.png',
        width: 1024,
        height: 1024,
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
    images: ['/file_00000000166862438e3863dca6ea2cf7.png'],
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
