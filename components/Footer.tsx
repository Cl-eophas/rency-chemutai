import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#0e2416] text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-serif font-bold text-xl mb-2">
              <span className="text-2xl">🌿</span>
              <span>Rency Chemutai</span>
            </div>
            <p className="text-[#a9c9ab] text-sm">
              Data-Driven Solutions. Stronger Farms. Better Futures.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-[#a9c9ab] hover:text-[#c9a24b] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#a9c9ab] hover:text-[#c9a24b] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-[#a9c9ab] hover:text-[#c9a24b] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#a9c9ab] hover:text-[#c9a24b] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/services#farm-management" className="text-[#a9c9ab] hover:text-[#c9a24b] transition-colors">
                  Dairy Farm Management
                </a>
              </li>
              <li>
                <a href="/services#nutrition" className="text-[#a9c9ab] hover:text-[#c9a24b] transition-colors">
                  Feed Formulation
                </a>
              </li>
              <li>
                <a href="/services#profitability" className="text-[#a9c9ab] hover:text-[#c9a24b] transition-colors">
                  Profitability Analysis
                </a>
              </li>
              <li>
                <a href="/services#training" className="text-[#a9c9ab] hover:text-[#c9a24b] transition-colors">
                  Farmer Training
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+254718699566" className="text-[#a9c9ab] hover:text-[#c9a24b] transition-colors">
                  0718 699 566
                </a>
              </li>
              <li>
                <a href="mailto:rencychemutai@gmail.com" className="text-[#a9c9ab] hover:text-[#c9a24b] transition-colors">
                  rencychemutai@gmail.com
                </a>
              </li>
              <li className="text-[#a9c9ab]">Eldoret, Kenya</li>
              <li className="text-[#a9c9ab] text-xs">Mon–Fri 8:00 AM - 5:00 PM</li>
              <li className="pt-2">
                <a
                  href="https://wa.me/254718699566"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a9c9ab] hover:text-[#c9a24b] transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#3f8455] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#a9c9ab]">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p>© 2026 Rency Chemutai Dairy Consulting. All rights reserved.</p>
            <span className="text-[#3f8455] text-opacity-60">Built by KoinX</span>
          </div>
          <div className="flex gap-4">
            <Link href="/terms" className="hover:text-[#c9a24b] transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-[#c9a24b] transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
