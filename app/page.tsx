import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rencychemutai.com'

export const metadata: Metadata = {
  title: 'Dairy Farming Consultant Kenya | Rency Chemutai',
  description: 'Expert dairy farming consulting in Eldoret, Kenya. Boost milk production, farm profitability, and herd health with data-driven solutions. Free consultation available.',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Dairy Farming Consultant Kenya | Rency Chemutai',
    description: 'Expert dairy farming consulting in Eldoret, Kenya. Boost milk production and farm profitability.',
    images: [
      {
        url: `${siteUrl}/hero-desktop.png`,
        width: 1200,
        height: 630,
        alt: 'Rency Chemutai - Dairy Farming Consultant',
      },
    ],
  },
}

// JSON-LD Schema for LocalBusiness
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': siteUrl,
  name: 'Rency Chemutai Dairy Farming Consultant',
  alternateName: 'Rency Chemutai Dairy Consulting',
  description: 'Data-driven dairy farming consulting services in Eldoret, Kenya',
  url: siteUrl,
  email: 'rencychemutai@gmail.com',
  telephone: '+254705535090',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Eldoret',
    addressRegion: 'Uasin Gishu',
    addressCountry: 'KE',
  },
  areaServed: 'KE',
  priceRange: '$$',
  image: `${siteUrl}/hero-desktop.png`,
  serviceType: 'Dairy Farming Consulting',
}

export default function Page() {
  return (
    <>
      <Header />
      <main className="bg-[#fbf9f2]">
        {/* Hero Section - Responsive with Art-Directed Images */}
        <section className="relative w-full min-h-screen lg:min-h-[100vh] flex flex-col lg:flex-row items-stretch overflow-hidden bg-[#0e2416]">
          {/* Art-Directed Image Container */}
          <div className="absolute inset-0 lg:relative lg:w-1/2 z-0 lg:z-10">
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet="/hero-desktop.png"
              />
              <source
                media="(max-width: 1023px)"
                srcSet="/hero-mobile.png"
              />
              <Image
                src="/hero-desktop.png"
                alt="Rency Chemutai, Dairy Farming Consultant, in a pastoral setting with cows"
                fill
                className="object-cover"
                priority
              />
            </picture>
            {/* Dark overlay - mobile only */}
            <div className="absolute inset-0 lg:hidden bg-gradient-to-r from-[#0e2416] via-[#1a4a2c]/70 to-transparent" />
          </div>

          {/* Content Container */}
          <div className="relative z-20 w-full lg:w-1/2 flex items-center justify-center lg:justify-start p-6 sm:p-8 md:p-12">
            <div className="max-w-xl w-full py-8 md:py-12">
              {/* Eyebrow - No Duplicates */}
              <div className="inline-block border border-[#a9c9ab] rounded-full px-3 py-1 mb-6 text-xs md:text-sm text-[#a9c9ab] font-medium">
                ✓ EMPOWERING FARMERS. TRANSFORMING FARMS.
              </div>

              {/* Headline - Single Instance */}
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
                Stronger Farms.
                <span className="block">Healthier Cows.</span>
                <span className="text-[#c9a24b]">Better Tomorrows.</span>
              </h1>

              {/* Subhead */}
              <p className="text-sm md:text-base lg:text-lg text-white/90 mb-8 max-w-xl leading-relaxed">
                Data-driven solutions to improve productivity, profitability and sustainability for dairy farmers in Kenya and beyond.
              </p>

              {/* CTAs - Proper Flex Row */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/services"
                  className="bg-[#a85c3f] hover:bg-[#8a4a32] text-white px-6 py-3 rounded-full font-medium text-center transition-colors"
                >
                  Explore My Services →
                </Link>
                <a
                  href="#"
                  className="border-2 border-white hover:border-[#c9a24b] text-white hover:text-[#c9a24b] px-6 py-3 rounded-full font-medium text-center transition-colors"
                >
                  ▶ Watch Video
                </a>
              </div>

              {/* Stats Strip - Responsive Grid */}
              <div className="bg-[#0e2416]/80 backdrop-blur-sm rounded-lg p-4 md:p-6 grid grid-cols-3 gap-4">
                <div className="text-center lg:text-left">
                  <div className="text-[#c9a24b] font-serif font-bold text-lg md:text-2xl">100+</div>
                  <div className="text-xs md:text-sm text-white/80">Farmers Empowered</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-[#c9a24b] font-serif font-bold text-lg md:text-2xl">50K+</div>
                  <div className="text-xs md:text-sm text-white/80">Cows Impacted</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-[#c9a24b] font-serif font-bold text-lg md:text-2xl">30%+</div>
                  <div className="text-xs md:text-sm text-white/80">Increase in Productivity</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="bg-[#f6f2e7] py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <p className="text-sm md:text-base text-[#1a4a2c] font-medium mb-6">
              TRUSTED BY FARMERS AND PARTNERS ACROSS KENYA
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 opacity-70">
              <div className="text-2xl">🌾</div>
              <div className="text-2xl">🐄</div>
              <div className="text-2xl">📊</div>
              <div className="text-2xl">🌍</div>
              <div className="text-2xl">✅</div>
              <div className="text-2xl">🤝</div>
            </div>
          </div>
        </section>

        {/* Value Props */}
        <section className="py-12 md:py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="font-serif font-bold mb-2 text-[#1a4a2c]">Data-Driven</h3>
              <p className="text-sm text-gray-600">Every decision backed by metrics and analysis</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="font-serif font-bold mb-2 text-[#1a4a2c]">Higher Productivity</h3>
              <p className="text-sm text-gray-600">Real improvements in milk yield and herd health</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="font-serif font-bold mb-2 text-[#1a4a2c]">More Profit</h3>
              <p className="text-sm text-gray-600">Increased income and reduced operational costs</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="font-serif font-bold mb-2 text-[#1a4a2c]">Sustainable Future</h3>
              <p className="text-sm text-gray-600">Practices that protect the environment</p>
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-12 md:py-20 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              {/* Image */}
              <div className="w-full md:w-1/3">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jul%2019%2C%202026%2C%2001_41_43%20AM-jROUeUbALOLS6RsSUMVFddL6I8My6Q.png"
                    alt="Rency Chemutai"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-2/3">
                <div className="inline-block border border-[#3f8455] rounded-full px-3 py-1 mb-4 text-xs text-[#3f8455]">
                  ABOUT ME
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a4a2c] mb-4">
                  Passionate About Dairy. Committed to Your Success.
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  I hold a BSc in Agricultural Economics from the University of Eldoret and have spent 5+ years closing the gap between hard farm work and real profit—replacing guesswork with data-driven systems.
                </p>
                <p className="italic text-[#3f8455] font-serif mb-6">
                  "Empowering Farmers. Building a Sustainable Future."
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div>
                    <div className="text-2xl font-serif font-bold text-[#3f8455]">5+</div>
                    <div className="text-xs text-gray-600">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-serif font-bold text-[#3f8455]">500+</div>
                    <div className="text-xs text-gray-600">Farmers Consulted</div>
                  </div>
                  <div>
                    <div className="text-2xl font-serif font-bold text-[#3f8455]">25%</div>
                    <div className="text-xs text-gray-600">Avg. Milk Increase</div>
                  </div>
                  <div>
                    <div className="text-2xl font-serif font-bold text-[#3f8455]">30%</div>
                    <div className="text-xs text-gray-600">Avg. Profit Growth</div>
                  </div>
                </div>

                <Link
                  href="/about"
                  className="text-[#3f8455] hover:text-[#1a4a2c] font-medium transition-colors inline-flex items-center gap-2"
                >
                  Learn More About Me →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-12 md:py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block border border-[#3f8455] rounded-full px-3 py-1 mb-4 text-xs text-[#3f8455]">
                SERVICES
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a4a2c] mb-4">
                Comprehensive Solutions for Every Dairy Farm
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From day-to-day herd management to long-term business strategy, every service is built around one goal: a stronger, more profitable farm.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Dairy Farm Management', icon: '🚜', desc: 'Optimizing daily routines and resource use' },
                { title: 'Feed Formulation & Nutrition', icon: '🌾', desc: 'Balanced, cost-effective rations' },
                { title: 'Farm Profitability Analysis', icon: '📊', desc: 'Uncover where money is lost and where it can grow' },
                { title: 'Record Keeping & Monitoring', icon: '📋', desc: 'Simple, accurate record-keeping systems' },
                { title: 'Farmer Training & Advisory', icon: '👨‍🏫', desc: 'Hands-on, practical training that sticks' },
                { title: 'Livestock Advisory', icon: '🐄', desc: 'Guidance on animal health and breeding' },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl border border-[#f0f0f0] hover:shadow-lg hover:border-[#c9a24b] transition-all"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="font-serif font-bold text-[#1a4a2c] mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/services"
                className="bg-[#3f8455] hover:bg-[#1a4a2c] text-white px-6 py-3 rounded-full font-medium transition-colors inline-flex items-center gap-2"
              >
                View All Services →
              </Link>
            </div>
          </div>
        </section>

        {/* Impact Band */}
        <section className="py-12 md:py-20 px-4 md:px-8 bg-[#1a4a2c] text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12">
              Real Results, Measured in Milk and Money
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
              <div>
                <div className="text-4xl md:text-5xl font-serif font-bold text-[#c9a24b] mb-2">1M+</div>
                <div className="text-[#a9c9ab]">Liters of Milk Improved</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-serif font-bold text-[#c9a24b] mb-2">KSh 50M+</div>
                <div className="text-[#a9c9ab]">Additional Income Generated</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-serif font-bold text-[#c9a24b] mb-2">20+</div>
                <div className="text-[#a9c9ab]">Counties Reached</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-serif font-bold text-[#c9a24b] mb-2">98%</div>
                <div className="text-[#a9c9ab]">Client Satisfaction</div>
              </div>
            </div>

            {/* Featured Testimonial */}
            <div className="mt-12 bg-[#0e2416] rounded-xl p-6 md:p-8 max-w-2xl mx-auto">
              <p className="text-lg mb-4 italic">
                "Rency's guidance transformed my farm. My production increased by 35% and I&apos;ve been able to send my kids to better schools. Her data-driven approach just works."
              </p>
              <p className="font-serif font-bold">James K., Dairy Farmer, Nakuru</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-16 md:py-24 px-4 md:px-8 bg-gradient-to-r from-[#1a4a2c] to-[#3f8455] text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Ready to Build a Stronger, More Profitable Farm?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Book a free consultation and let&apos;s discuss how data-driven solutions can transform your dairy farm.
            </p>
            <Link
              href="/contact"
              className="bg-[#c9a24b] hover:bg-[#b38a3a] text-[#1a4a2c] px-8 py-4 rounded-full font-bold text-lg transition-colors inline-flex items-center gap-2"
            >
              Book a Free Consultation →
            </Link>
            <p className="mt-8 text-sm text-white/80">
              STRONG FARMS. HEALTHY COWS. BRIGHTER TOMORROWS.
            </p>
          </div>
        </section>
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </main>
      <Footer />
    </>
  )
}
