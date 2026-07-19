import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rencychemutai.com'

export const metadata: Metadata = {
  title: 'Dairy Farming Blog | Tips & Insights | Rency Chemutai',
  description: 'Latest insights, tips, and best practices for dairy farmers. Learn about milk production, farm management, nutrition, and profitability.',
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
  openGraph: {
    type: 'website',
    url: `${siteUrl}/blog`,
    title: 'Dairy Farming Blog | Tips & Insights',
    description: 'Latest insights and best practices for improving dairy farm productivity.',
    images: [
      {
        url: `${siteUrl}/hero-desktop.png`,
        width: 1200,
        height: 630,
        alt: 'Blog - Dairy Farming Tips',
      },
    ],
  },
}

const blogPosts = [
  {
    title: '5 Ways to Improve Milk Production Naturally',
    excerpt: 'Simple, practical steps to boost milk yield without expensive inputs.',
    date: 'May 15, 2026',
    icon: '🥛',
  },
  {
    title: 'Understanding Cow Nutrition: The Basics',
    excerpt: 'Learn how proper nutrition impacts production, health, and profitability.',
    date: 'Apr 22, 2026',
    icon: '🌾',
  },
  {
    title: 'Record Keeping: The Key to Profitable Farming',
    excerpt: 'Why accurate records transform your decision-making and boost profits.',
    date: 'Apr 10, 2026',
    icon: '📋',
  },
  {
    title: 'Calf Rearing Best Practices for Farmers',
    excerpt: 'Essential tips for raising healthy, productive cows from birth.',
    date: 'Mar 28, 2026',
    icon: '🐄',
  },
  {
    title: 'Climate-Smart Farming in Kenya',
    excerpt: 'Practical strategies to protect your farm and income from climate risks.',
    date: 'Mar 15, 2026',
    icon: '🌱',
  },
  {
    title: 'Maximizing Feed Efficiency and Minimizing Costs',
    excerpt: 'How to feed your cows better for less money.',
    date: 'Feb 28, 2026',
    icon: '💰',
  },
]

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="bg-[#fbf9f2]">
        {/* Hero */}
        <section className="bg-white py-12 md:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block border border-[#3f8455] rounded-full px-3 py-1 mb-4 text-xs text-[#3f8455]">
              BLOG
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#1a4a2c] mb-6">
              Insights, Tips, and Stories
            </h1>
            <p className="text-lg text-gray-600">
              Practical advice and updates to keep you informed and inspired on your farming journey.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-12 md:py-20 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {blogPosts.map((post, idx) => (
                <article
                  key={idx}
                  className="bg-white rounded-xl overflow-hidden border border-[#f0f0f0] hover:shadow-lg hover:border-[#c9a24b] transition-all"
                >
                  <div className="bg-gradient-to-br from-[#3f8455]/10 to-[#c9a24b]/10 p-8 flex items-center justify-center min-h-[200px]">
                    <span className="text-6xl">{post.icon}</span>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="text-xs text-gray-500 mb-3">{post.date}</div>
                    <h3 className="font-serif font-bold text-xl text-[#1a4a2c] mb-3">{post.title}</h3>
                    <p className="text-gray-600 text-sm mb-6">{post.excerpt}</p>
                    <Link
                      href="#"
                      className="text-[#3f8455] hover:text-[#1a4a2c] font-medium text-sm transition-colors inline-flex items-center gap-1"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="bg-[#3f8455] hover:bg-[#1a4a2c] text-white px-8 py-3 rounded-full font-medium transition-colors">
                View All Blog Posts →
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-[#1a4a2c] text-white py-12 md:py-16 px-4 md:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Stay Updated with Dairy Farming Insights
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Get tips, research, and updates delivered to your inbox weekly.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-full bg-white text-[#1a4a2c] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c9a24b]"
              />
              <button
                type="submit"
                className="bg-[#c9a24b] hover:bg-[#b38a3a] text-[#1a4a2c] px-6 py-3 rounded-full font-bold transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
