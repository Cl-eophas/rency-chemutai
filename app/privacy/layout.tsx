import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rencychemutai.com'

export const metadata: Metadata = {
  title: 'Privacy Policy | Rency Chemutai',
  description: 'Privacy Policy for Rency Chemutai Dairy Farming Consulting. Learn how we handle and protect your personal information.',
  alternates: {
    canonical: `${siteUrl}/privacy`,
  },
  robots: {
    index: false,
  },
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
