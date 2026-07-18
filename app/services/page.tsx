'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

const services = [
  {
    id: 'farm-management',
    title: 'Dairy Farm Management',
    icon: '🚜',
    description: 'Streamlined, well-run operations don\'t happen by accident. Optimizing daily routines, herd handling, and resource use so every part of the farm works together.',
    details: [
      'Daily operation optimization',
      'Herd management systems',
      'Resource allocation',
      'Workflow efficiency',
    ],
  },
  {
    id: 'nutrition',
    title: 'Feed Formulation & Nutrition',
    icon: '🌾',
    description: 'Feed is often a dairy farm\'s biggest cost — and its biggest opportunity. Balanced, cost-effective rations tailored to the herd.',
    details: [
      'Nutritional planning',
      'Feed cost optimization',
      'Ration balancing',
      'Supplier evaluation',
    ],
  },
  {
    id: 'profitability',
    title: 'Farm Profitability Analysis',
    icon: '📊',
    description: 'Numbers tell the real story. Analyzing costs, yields, and margins to uncover where money is lost and where it can grow.',
    details: [
      'Cost analysis',
      'Margin calculation',
      'Financial forecasting',
      'Income optimization',
    ],
  },
  {
    id: 'records',
    title: 'Record Keeping & Monitoring',
    icon: '📋',
    description: 'What isn\'t measured can\'t be improved. Simple, accurate record-keeping systems for breeding, health, production, and finances.',
    details: [
      'Production tracking',
      'Health records',
      'Breeding documentation',
      'Financial ledgers',
    ],
  },
  {
    id: 'training',
    title: 'Farmer Training & Advisory',
    icon: '👨‍🏫',
    description: 'Sustainable results come from capacity, not just consulting. Hands-on, practical training that sticks.',
    details: [
      'Farm management training',
      'Skill development',
      'Best practice workshops',
      'Ongoing advisory support',
    ],
  },
  {
    id: 'livestock',
    title: 'Livestock Advisory',
    icon: '🐄',
    description: 'Healthy cows are productive cows. Guidance on animal health, breeding, and welfare.',
    details: [
      'Health management',
      'Breeding strategy',
      'Welfare standards',
      'Veterinary coordination',
    ],
  },
  {
    id: 'milk-quality',
    title: 'Milk Quality Improvement',
    icon: '🥛',
    description: 'Better quality means better prices. Handling and hygiene practices that unlock premium markets.',
    details: [
      'Quality standards',
      'Hygiene protocols',
      'Handling procedures',
      'Certification support',
    ],
  },
  {
    id: 'business',
    title: 'Business Planning',
    icon: '📈',
    description: 'A farm is a business first. Strategic, realistic plans for expansion, investment, and growth.',
    details: [
      'Strategic planning',
      'Expansion roadmaps',
      'Investment analysis',
      'Market positioning',
    ],
  },
  {
    id: 'audits',
    title: 'Farm Audits & Assessments',
    icon: '✓',
    description: 'Before you can grow, you need to know where you stand. Thorough audits identifying gaps and potential.',
    details: [
      'Farm assessment',
      'Gap identification',
      'Opportunity analysis',
      'Improvement roadmap',
    ],
  },
  {
    id: 'climate',
    title: 'Climate-Smart Solutions',
    icon: '🌱',
    description: 'Dairy farming\'s future depends on resilience. Climate-smart practices that protect production long-term.',
    details: [
      'Climate risk assessment',
      'Resilience planning',
      'Sustainable practices',
      'Water management',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="bg-[#fbf9f2]">
        {/* Hero */}
        <section className="bg-white py-12 md:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block border border-[#3f8455] rounded-full px-3 py-1 mb-4 text-xs text-[#3f8455]">
              SERVICES
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#1a4a2c] mb-6">
              Comprehensive Solutions for Every Dairy Farm
            </h1>
            <p className="text-lg text-gray-600">
              From day-to-day herd management to long-term business strategy, every service is built around one goal: a stronger, more profitable farm.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 md:py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  id={service.id}
                  className="bg-white p-6 md:p-8 rounded-xl border border-[#f0f0f0] hover:shadow-lg hover:border-[#c9a24b] transition-all"
                >
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="font-serif font-bold text-xl text-[#1a4a2c] mb-3">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="text-xs text-gray-500 flex items-start gap-2">
                        <span className="text-[#3f8455] mt-1">✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="text-[#3f8455] hover:text-[#1a4a2c] font-medium text-sm transition-colors inline-flex items-center gap-1"
                  >
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-white py-12 md:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a4a2c] mb-12 text-center">
              How I Work
            </h2>

            <div className="space-y-8">
              {[
                {
                  step: '01',
                  title: 'Assessment',
                  description: 'I visit your farm, analyze your records, and understand your unique situation.',
                },
                {
                  step: '02',
                  title: 'Analysis',
                  description: 'Data-driven review of your operations, financials, and opportunities for improvement.',
                },
                {
                  step: '03',
                  title: 'Strategy',
                  description: 'Custom recommendations tailored to your goals, resources, and timeline.',
                },
                {
                  step: '04',
                  title: 'Implementation',
                  description: 'Hands-on support as you implement changes, with training and regular check-ins.',
                },
                {
                  step: '05',
                  title: 'Monitoring',
                  description: 'Ongoing advisory and adjustment as you track progress and results.',
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#3f8455] text-white font-serif font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-[#1a4a2c] mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
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
              Book a consultation and let&apos;s discuss which services are right for your farm.
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
