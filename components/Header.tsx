'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-[#0e2416] text-white text-xs py-2 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center flex-col md:flex-row gap-2 md:gap-0">
          <div className="flex gap-4 md:gap-6 text-center md:text-left flex-wrap justify-center md:justify-start">
            <div className="flex items-center gap-1">
              <span>✉️</span>
              <a href="mailto:rencychemutai@gmail.com" className="hover:opacity-80">
                rencychemutai@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-1">
              <span>📞</span>
              <a href="tel:+254718699566" className="hover:opacity-80">
                0718 699 566
              </a>
            </div>
            <div className="flex items-center gap-1">
              <span>📍</span>
              <span>Eldoret, Kenya</span>
            </div>
          </div>
          <div className="flex gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              f
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              📷
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              𝕏
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 font-serif font-bold text-xl md:text-2xl text-[#1a4a2c]">
              <span className="text-2xl">🌿</span>
              <span>Rency Chemutai</span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex gap-8 items-center">
              <Link href="/" className="text-sm hover:text-[#3f8455] transition-colors border-b-2 border-[#1a4a2c] pb-1">
                Home
              </Link>
              <Link href="/about" className="text-sm hover:text-[#3f8455] transition-colors">
                About
              </Link>
              <Link href="/services" className="text-sm hover:text-[#3f8455] transition-colors">
                Services
              </Link>
              <Link href="/resources" className="text-sm hover:text-[#3f8455] transition-colors">
                Resources
              </Link>
              <Link href="/success-stories" className="text-sm hover:text-[#3f8455] transition-colors">
                Success Stories
              </Link>
              <Link href="/blog" className="text-sm hover:text-[#3f8455] transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-sm hover:text-[#3f8455] transition-colors">
                Contact
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a
                href="/contact"
                className="bg-[#3f8455] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#1a4a2c] transition-colors"
              >
                Book a Consultation →
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-[#1a4a2c]"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile nav */}
          {mobileOpen && (
            <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3">
              <Link href="/" className="text-sm hover:text-[#3f8455]">
                Home
              </Link>
              <Link href="/about" className="text-sm hover:text-[#3f8455]">
                About
              </Link>
              <Link href="/services" className="text-sm hover:text-[#3f8455]">
                Services
              </Link>
              <Link href="/resources" className="text-sm hover:text-[#3f8455]">
                Resources
              </Link>
              <Link href="/success-stories" className="text-sm hover:text-[#3f8455]">
                Success Stories
              </Link>
              <Link href="/blog" className="text-sm hover:text-[#3f8455]">
                Blog
              </Link>
              <Link href="/contact" className="text-sm hover:text-[#3f8455]">
                Contact
              </Link>
              <a
                href="/contact"
                className="bg-[#3f8455] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#1a4a2c] transition-colors inline-block"
              >
                Book a Consultation
              </a>
            </nav>
          )}
        </div>
      </header>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/254718699566"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        title="WhatsApp"
      >
        💬
      </a>
    </>
  )
}
