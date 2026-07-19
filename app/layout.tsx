import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rencychemutai.com'

export const metadata: Metadata = {
  title: 'Rency Chemutai | Dairy Farming Consultant Kenya',
  description: 'Data-driven dairy farming consulting in Eldoret, Kenya. Expert advice on farm management, feed formulation, profitability analysis, and herd health to boost milk production and farm income.',
  generator: 'v0.app',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: siteUrl,
    siteName: 'Rency Chemutai Dairy Consulting',
    title: 'Rency Chemutai | Dairy Farming Consultant Kenya',
    description: 'Data-driven dairy farming consulting in Eldoret, Kenya. Expert advice on farm management, feed formulation, profitability analysis, and herd health.',
    images: [
      {
        url: `${siteUrl}/hero-desktop.png`,
        width: 1200,
        height: 630,
        alt: 'Rency Chemutai - Dairy Farming Consultant',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rency Chemutai | Dairy Farming Consultant Kenya',
    description: 'Data-driven dairy farming consulting in Eldoret, Kenya.',
    images: [`${siteUrl}/hero-desktop.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  keywords: [
    'dairy farming consultant Kenya',
    'dairy farm management Eldoret',
    'feed formulation Kenya',
    'milk production consulting',
    'dairy farming advisory',
    'herd health Kenya',
    'farm profitability analysis',
    'dairy nutrition',
  ],
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [{ media: '(prefers-color-scheme: light)', color: '#0e2416' }],
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-[#fbf9f2] text-[#1a1a1a]">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
