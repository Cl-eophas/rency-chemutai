import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rencychemutai.com'

export const metadata: Metadata = {
  title: 'Contact Rency Chemutai | Book Your Dairy Farming Consultation',
  description: 'Get in touch with Rency Chemutai for a free consultation on dairy farm management, profitability, and herd health. Available in Eldoret and across Kenya.',
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    type: 'website',
    url: `${siteUrl}/contact`,
    title: 'Contact Rency Chemutai | Book Your Consultation',
    description: 'Schedule a free consultation to improve your dairy farm productivity.',
    images: [
      {
        url: `${siteUrl}/hero-desktop.png`,
        width: 1200,
        height: 630,
        alt: 'Contact - Book Consultation',
      },
    ],
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
