'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-[#fbf9f2]">
        {/* Hero */}
        <section className="bg-white py-12 md:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block border border-[#3f8455] rounded-full px-3 py-1 mb-4 text-xs text-[#3f8455]">
              ABOUT ME
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#1a4a2c] mb-6">
              Passionate About Dairy. Committed to Your Success.
            </h1>
          </div>
        </section>

        {/* Bio Section */}
        <section className="py-12 md:py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jul%2019%2C%202026%2C%2001_41_43%20AM-jROUeUbALOLS6RsSUMVFddL6I8My6Q.png"
                  alt="Rency Chemutai"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h2 className="font-serif text-3xl font-bold text-[#1a4a2c] mb-6">My Journey</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  I hold a BSc in Agricultural Economics from the University of Eldoret and have spent over 5 years
                  in dairy farming consulting. My mission is simple: help farmers replace guesswork with data.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Starting in my community, I noticed most farmers were making critical decisions based on habit,
                  not numbers. I became obsessed with changing that. Through meticulous record-keeping, nutritional
                  analysis, and market insights, I&apos;ve helped over 500 farmers transform their operations.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Today, I work across Kenya, helping dairy farmers at every scale build stronger, more profitable
                  operations while protecting the environment for future generations.
                </p>

                <p className="italic text-[#3f8455] font-serif text-lg mb-8">
                  "The difference between a struggling farm and a thriving one isn&apos;t luck—it&apos;s data."
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-white p-4 rounded-lg border border-[#f0f0f0]">
                    <div className="text-3xl font-serif font-bold text-[#3f8455]">BSc</div>
                    <p className="text-sm text-gray-600">Agricultural Economics</p>
                    <p className="text-xs text-gray-500">University of Eldoret</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-[#f0f0f0]">
                    <div className="text-3xl font-serif font-bold text-[#3f8455]">5+</div>
                    <p className="text-sm text-gray-600">Years in Consulting</p>
                    <p className="text-xs text-gray-500">Kenya & Beyond</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-white py-12 md:py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="py-6">
              <div className="font-serif text-4xl md:text-5xl font-bold text-[#3f8455] mb-2">500+</div>
              <p className="text-gray-600">Farmers Consulted</p>
            </div>
            <div className="py-6">
              <div className="font-serif text-4xl md:text-5xl font-bold text-[#3f8455] mb-2">25%</div>
              <p className="text-gray-600">Avg. Milk Increase</p>
            </div>
            <div className="py-6">
              <div className="font-serif text-4xl md:text-5xl font-bold text-[#3f8455] mb-2">30%</div>
              <p className="text-gray-600">Avg. Profit Growth</p>
            </div>
            <div className="py-6">
              <div className="font-serif text-4xl md:text-5xl font-bold text-[#3f8455] mb-2">20+</div>
              <p className="text-gray-600">Counties Reached</p>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-12 md:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a4a2c] mb-8 text-center">
              My Philosophy
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-6 md:p-8 rounded-xl border-l-4 border-[#3f8455]">
                <h3 className="font-serif font-bold text-xl text-[#1a4a2c] mb-3">Data Over Tradition</h3>
                <p className="text-gray-700">
                  I respect the wisdom of experienced farmers, but I believe decisions should be rooted in data.
                  Milk production, costs, breeding outcomes—every metric matters.
                </p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-xl border-l-4 border-[#3f8455]">
                <h3 className="font-serif font-bold text-xl text-[#1a4a2c] mb-3">Hands-On Guidance</h3>
                <p className="text-gray-700">
                  I don&apos;t believe in one-size-fits-all advice. Every farm is unique. I visit, I analyze, I listen,
                  and I design solutions tailored to each farmer&apos;s situation and goals.
                </p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-xl border-l-4 border-[#3f8455]">
                <h3 className="font-serif font-bold text-xl text-[#1a4a2c] mb-3">Sustainability First</h3>
                <p className="text-gray-700">
                  Profit without planet is hollow. I help farmers adopt climate-smart practices that boost productivity
                  while protecting land and water for generations to come.
                </p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-xl border-l-4 border-[#3f8455]">
                <h3 className="font-serif font-bold text-xl text-[#1a4a2c] mb-3">Capacity Building</h3>
                <p className="text-gray-700">
                  True transformation happens when farmers understand the why behind every recommendation. I invest
                  in farmer training and long-term partnerships, not quick fixes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#1a4a2c] text-white py-12 md:py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Farm?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Let&apos;s discuss your unique situation and how data-driven consulting can help you succeed.
            </p>
            <Link
              href="/contact"
              className="bg-[#c9a24b] hover:bg-[#b38a3a] text-[#1a4a2c] px-8 py-4 rounded-full font-bold text-lg transition-colors inline-flex items-center gap-2"
            >
              Book a Free Consultation →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
