import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rencychemutai.com'

export const metadata: Metadata = {
  title: 'Terms of Service | Rency Chemutai',
  description: 'Terms of Service for Rency Chemutai Dairy Farming Consulting. Please read these terms carefully before using our services.',
  alternates: {
    canonical: `${siteUrl}/terms`,
  },
  robots: {
    index: false,
  },
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
