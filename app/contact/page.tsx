'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { useState } from 'react'

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    consultationType: '',
    preferredDate: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formState)
    alert('Thank you for your message. I will get back to you soon!')
    setFormState({
      name: '',
      email: '',
      phone: '',
      location: '',
      consultationType: '',
      preferredDate: '',
      message: '',
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <Header />
      <main className="bg-[#fbf9f2]">
        {/* Hero */}
        <section className="bg-white py-12 md:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block border border-[#3f8455] rounded-full px-3 py-1 mb-4 text-xs text-[#3f8455]">
              CONTACT ME
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#1a4a2c] mb-6">
              Let&apos;s Transform Your Farm Together
            </h1>
            <p className="text-lg text-gray-600">
              I&apos;m here to help you build a stronger, more profitable dairy farm. Reach out for a consultation.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 md:py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {/* Left Column - Contact Info & Photo */}
              <div className="flex flex-col">
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-xl mb-8">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jul%2019%2C%202026%2C%2001_41_43%20AM-jROUeUbALOLS6RsSUMVFddL6I8My6Q.png"
                    alt="Rency Chemutai"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="bg-white p-6 md:p-8 rounded-xl border border-[#f0f0f0]">
                  <h3 className="font-serif font-bold text-xl text-[#1a4a2c] mb-6">Contact Details</h3>

                  <div className="space-y-6">
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Phone</p>
                      <a
                        href="tel:+254718699566"
                        className="text-lg font-medium text-[#3f8455] hover:text-[#1a4a2c] transition-colors"
                      >
                        0718 699 566
                      </a>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Email</p>
                      <a
                        href="mailto:rencychemutai@gmail.com"
                        className="text-lg font-medium text-[#3f8455] hover:text-[#1a4a2c] transition-colors break-all"
                      >
                        rencychemutai@gmail.com
                      </a>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Location</p>
                      <p className="text-lg font-medium text-[#1a4a2c]">Eldoret, Kenya</p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Hours</p>
                      <p className="text-lg font-medium text-[#1a4a2c]">Monday–Friday: 8:00 AM - 5:00 PM</p>
                      <p className="text-sm text-gray-600">Weekend consultations by appointment</p>
                    </div>

                    <div className="pt-4 border-t border-[#f0f0f0]">
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">Quick Message</p>
                      <a
                        href="https://wa.me/254718699566"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-medium transition-colors"
                      >
                        💬 WhatsApp Me
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="bg-white p-6 md:p-8 rounded-xl border border-[#f0f0f0]">
                <h3 className="font-serif font-bold text-xl text-[#1a4a2c] mb-6">Send Me a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#1a4a2c] mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-[#f0f0f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3f8455] bg-white"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#1a4a2c] mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-[#f0f0f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3f8455] bg-white"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#1a4a2c] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-[#f0f0f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3f8455] bg-white"
                        placeholder="0718 699 566"
                      />
                    </div>
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-[#1a4a2c] mb-2">
                        Farm Location
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formState.location}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-[#f0f0f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3f8455] bg-white"
                        placeholder="County/Region"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="consultationType" className="block text-sm font-medium text-[#1a4a2c] mb-2">
                        Type of Consultation
                      </label>
                      <select
                        id="consultationType"
                        name="consultationType"
                        value={formState.consultationType}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-[#f0f0f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3f8455] bg-white"
                      >
                        <option value="">Select a service</option>
                        <option value="farm-management">Dairy Farm Management</option>
                        <option value="nutrition">Feed Formulation</option>
                        <option value="profitability">Profitability Analysis</option>
                        <option value="training">Farmer Training</option>
                        <option value="livestock">Livestock Advisory</option>
                        <option value="audit">Farm Audit</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="preferredDate" className="block text-sm font-medium text-[#1a4a2c] mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        value={formState.preferredDate}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-[#f0f0f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3f8455] bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#1a4a2c] mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-[#f0f0f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3f8455] bg-white resize-none"
                      placeholder="Tell me about your farm and what you'd like to achieve..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#3f8455] hover:bg-[#1a4a2c] text-white px-6 py-3 rounded-lg font-bold transition-colors inline-flex items-center justify-center gap-2"
                  >
                    Send Message 📧
                  </button>
                </form>

                <p className="text-xs text-gray-500 mt-4">
                  I typically respond within 24 hours during business days. Looking forward to connecting!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white py-12 md:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a4a2c] mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: 'How much does a consultation cost?',
                  a: 'The initial consultation is free. This allows us to discuss your situation and I can give you initial feedback. Custom packages are available based on your needs.',
                },
                {
                  q: 'How long does the process take?',
                  a: 'Initial assessment typically takes 2-4 weeks. Implementation can range from 3-12 months depending on the scope of your farm and goals.',
                },
                {
                  q: 'Do you work with small farms?',
                  a: 'Yes! I work with farms of all sizes. Whether you have 2 cows or 200, I can help you optimize and grow profitably.',
                },
                {
                  q: 'What if I\'m already working with an agronomist?',
                  a: 'That\'s great! I can complement their work by bringing a business and data-focused perspective to farm management.',
                },
              ].map((item, idx) => (
                <div key={idx} className="pb-6 border-b border-[#f0f0f0] last:border-b-0">
                  <h3 className="font-serif font-bold text-lg text-[#1a4a2c] mb-3">{item.q}</h3>
                  <p className="text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
