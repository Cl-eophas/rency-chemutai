'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

const resources = [
  {
    title: 'Guides & E-Books',
    icon: '📚',
    description: 'In-depth guides on dairy farm management, feeding, and business practices.',
    items: ['Dairy Farm Management 101', 'Nutrition Guide for Cows', 'Profitability Playbook'],
  },
  {
    title: 'Tools & Calculators',
    icon: '🧮',
    description: 'Practical tools and templates for managing and tracking your farm.',
    items: ['Feed Cost Calculator', 'Milk Production Tracker', 'Income Planner'],
  },
  {
    title: 'Fact Sheets',
    icon: '📄',
    description: 'Key materials on dairy farming topics and best practices.',
    items: ['Breeding Tips', 'Health Management', 'Sustainability Practices'],
  },
  {
    title: 'Videos & Webinars',
    icon: '🎥',
    description: 'Video training sessions and recorded webinars to grow your skills.',
    items: ['Farm Management Series', 'Nutrition Workshops', 'Business Planning Videos'],
  },
  {
    title: 'Templates & Checklists',
    icon: '✓',
    description: 'Downloadable templates and checklists to streamline your farm operations.',
    items: ['Daily Management Checklist', 'Record Templates', 'Audit Checklist'],
  },
]

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main className="bg-[#fbf9f2]">
        {/* Hero */}
        <section className="bg-white py-12 md:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block border border-[#3f8455] rounded-full px-3 py-1 mb-4 text-xs text-[#3f8455]">
              RESOURCES
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#1a4a2c] mb-6">
              Tools & Knowledge to Build a Better Farm
            </h1>
            <p className="text-lg text-gray-600">
              Practical guides, tools, and materials to help you build a stronger, more profitable dairy farm.
            </p>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-12 md:py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, idx) => (
              <div
                key={idx}
                className="bg-white p-6 md:p-8 rounded-xl border border-[#f0f0f0] hover:shadow-lg hover:border-[#c9a24b] transition-all"
              >
                <div className="text-5xl mb-4">{resource.icon}</div>
                <h3 className="font-serif font-bold text-xl text-[#1a4a2c] mb-2">{resource.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{resource.description}</p>
                <ul className="space-y-2 mb-6">
                  {resource.items.map((item, i) => (
                    <li key={i} className="text-xs text-gray-500 flex items-start gap-2">
                      <span className="text-[#3f8455]">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="text-[#3f8455] hover:text-[#1a4a2c] font-medium text-sm transition-colors inline-flex items-center gap-1">
                  Explore →
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Resources */}
        <section className="bg-white py-12 md:py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a4a2c] mb-12 text-center">
              Featured Resources
            </h2>

            <div className="space-y-8">
              <div className="border-b pb-8">
                <h3 className="font-serif font-bold text-xl text-[#1a4a2c] mb-2">The Farmer&apos;s Guide to Dairy Profitability</h3>
                <p className="text-gray-600 mb-4">
                  A comprehensive e-book covering financial management, cost reduction, and income optimization strategies for dairy farmers.
                </p>
                <button className="text-[#3f8455] hover:text-[#1a4a2c] font-medium transition-colors inline-flex items-center gap-1">
                  Download PDF →
                </button>
              </div>

              <div className="border-b pb-8">
                <h3 className="font-serif font-bold text-xl text-[#1a4a2c] mb-2">Feed Cost Calculator Spreadsheet</h3>
                <p className="text-gray-600 mb-4">
                  An easy-to-use spreadsheet tool to calculate optimal feed mixes and track costs for maximum efficiency.
                </p>
                <button className="text-[#3f8455] hover:text-[#1a4a2c] font-medium transition-colors inline-flex items-center gap-1">
                  Download Tool →
                </button>
              </div>

              <div>
                <h3 className="font-serif font-bold text-xl text-[#1a4a2c] mb-2">Video: 10 Keys to Sustainable Milk Production</h3>
                <p className="text-gray-600 mb-4">
                  A 15-minute video overview of the essential practices for building a sustainable and profitable dairy operation.
                </p>
                <button className="text-[#3f8455] hover:text-[#1a4a2c] font-medium transition-colors inline-flex items-center gap-1">
                  Watch Video →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#1a4a2c] text-white py-12 md:py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Want Personalized Guidance?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              These resources are great starting points, but every farm is unique. Book a consultation for tailored advice.
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
