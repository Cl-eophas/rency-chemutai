'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

const stories = [
  {
    name: 'James K.',
    location: 'Nakuru County',
    icon: '🎯',
    quote: 'Rency\'s guidance transformed my farm. My production increased by 35% and I\'ve been able to send my kids to better schools. Her data-driven approach just works.',
    metrics: [
      { label: 'Milk Increase', value: '+35%' },
      { label: 'Cost Reduction', value: '-18%' },
      { label: 'Income Growth', value: '+45%' },
    ],
  },
  {
    name: 'Grace M.',
    location: 'Eldoret',
    icon: '🌟',
    quote: 'Before working with Rency, I was losing money every month. Her feed optimization strategy cut my costs by nearly a fifth while keeping production steady. Game-changing.',
    metrics: [
      { label: 'Feed Costs Cut', value: '-22%' },
      { label: 'Milk Yield', value: 'Stable' },
      { label: 'Monthly Profit', value: '+KSh 15K' },
    ],
  },
  {
    name: 'Samuel O.',
    location: 'Kisii County',
    icon: '🏆',
    quote: 'Rency helped me understand my numbers for the first time. Now I know exactly where every shilling goes and how to improve. Best investment I\'ve made on my farm.',
    metrics: [
      { label: 'Production', value: '+28%' },
      { label: 'Profitability', value: '+38%' },
      { label: 'Herd Health', value: '+40%' },
    ],
  },
  {
    name: 'Mary W.',
    location: 'Uasin Gishu',
    icon: '✨',
    quote: 'The training Rency provided gave me confidence to manage my farm independently. I\'ve applied everything and my neighbors are asking for her contact details!',
    metrics: [
      { label: 'Skill Development', value: 'High' },
      { label: 'Independence', value: 'Full' },
      { label: 'Herd Growth', value: '+15 cows' },
    ],
  },
  {
    name: 'David P.',
    location: 'Trans Nzoia',
    icon: '💎',
    quote: 'Working with Rency wasn\'t just about numbers—it was about dignity. She treated my farm like it mattered and showed me it could be profitable and sustainable.',
    metrics: [
      { label: 'Milk Quality', value: 'Premium' },
      { label: 'Sustainability', value: 'Yes' },
      { label: 'Community Impact', value: '+12 Jobs' },
    ],
  },
  {
    name: 'Ruth N.',
    location: 'Kericho',
    icon: '🌺',
    quote: 'Rency\'s farm audit revealed opportunities I never saw coming. I\'ve doubled my income in just 18 months. She\'s not just a consultant—she\'s a partner.',
    metrics: [
      { label: 'Income Doubled', value: '18 mo.' },
      { label: 'Calf Survival', value: '+45%' },
      { label: 'Business Growth', value: 'Thriving' },
    ],
  },
]

export default function SuccessStoriesPage() {
  return (
    <>
      <Header />
      <main className="bg-[#fbf9f2]">
        {/* Hero */}
        <section className="bg-white py-12 md:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block border border-[#3f8455] rounded-full px-3 py-1 mb-4 text-xs text-[#3f8455]">
              SUCCESS STORIES
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#1a4a2c] mb-6">
              Real Farmers. Real Results.
            </h1>
            <p className="text-lg text-gray-600">
              Stories from farmers across Kenya who transformed their operations and livelihoods through data-driven consulting.
            </p>
          </div>
        </section>

        {/* Stories Grid */}
        <section className="py-12 md:py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((story, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 md:p-8 border border-[#f0f0f0] hover:shadow-lg hover:border-[#c9a24b] transition-all flex flex-col"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-4xl">{story.icon}</div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-[#1a4a2c]">{story.name}</h3>
                    <p className="text-xs text-gray-500">📍 {story.location}</p>
                  </div>
                </div>

                <blockquote className="text-gray-600 italic mb-6 flex-1">
                  "{story.quote}"
                </blockquote>

                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#f0f0f0]">
                  {story.metrics.map((metric, i) => (
                    <div key={i} className="text-center">
                      <div className="font-serif font-bold text-[#3f8455] mb-1">{metric.value}</div>
                      <p className="text-xs text-gray-500">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-[#1a4a2c] text-white py-12 md:py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12 text-center">
              The Impact, By the Numbers
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 text-center">
              <div>
                <div className="text-5xl font-serif font-bold text-[#c9a24b] mb-2">500+</div>
                <p className="text-white/80">Farmers Empowered</p>
              </div>
              <div>
                <div className="text-5xl font-serif font-bold text-[#c9a24b] mb-2">1M+</div>
                <p className="text-white/80">Liters Improved</p>
              </div>
              <div>
                <div className="text-5xl font-serif font-bold text-[#c9a24b] mb-2">KSh 50M+</div>
                <p className="text-white/80">Income Generated</p>
              </div>
              <div>
                <div className="text-5xl font-serif font-bold text-[#c9a24b] mb-2">98%</div>
                <p className="text-white/80">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white py-12 md:py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a4a2c] mb-6">
              Your Story Could Be Next
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Every farm has potential. Let&apos;s unlock yours with data-driven consulting tailored to your goals.
            </p>
            <a
              href="/contact"
              className="bg-[#3f8455] hover:bg-[#1a4a2c] text-white px-8 py-4 rounded-full font-bold text-lg transition-colors inline-flex items-center gap-2"
            >
              Book a Free Consultation →
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
