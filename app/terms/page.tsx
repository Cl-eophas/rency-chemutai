'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="bg-[#fbf9f2]">
        <section className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20">
          <Link href="/" className="text-[#3f8455] hover:text-[#1a4a2c] mb-6 inline-flex items-center gap-1">
            ← Back to Home
          </Link>

          <div className="bg-white rounded-xl p-6 md:p-12 border border-[#f0f0f0]">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#1a4a2c] mb-2">Terms of Service</h1>
            <p className="text-xs text-gray-500 mb-8">Last updated: July 2026</p>

            <div className="prose prose-sm max-w-none text-gray-700 space-y-6">
              <section>
                <h2 className="font-serif font-bold text-xl text-[#1a4a2c] mb-3">1. Agreement to Terms</h2>
                <p>
                  By accessing and using this website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="font-serif font-bold text-xl text-[#1a4a2c] mb-3">2. Use License</h2>
                <p>
                  Permission is granted to temporarily download one copy of the materials (information or software) on Rency Chemutai Dairy Consulting website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Modifying or copying the materials</li>
                  <li>Using the materials for any commercial purpose or for any public display</li>
                  <li>Attempting to decompile or reverse engineer any software contained on the website</li>
                  <li>Transferring the materials to another person or "mirror" the materials on any other server</li>
                  <li>Violating any applicable laws or regulations</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif font-bold text-xl text-[#1a4a2c] mb-3">3. Disclaimer</h2>
                <p>
                  The materials on Rency Chemutai Dairy Consulting website are provided "as is". Rency Chemutai makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </section>

              <section>
                <h2 className="font-serif font-bold text-xl text-[#1a4a2c] mb-3">4. Limitations</h2>
                <p>
                  In no event shall Rency Chemutai or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the website.
                </p>
              </section>

              <section>
                <h2 className="font-serif font-bold text-xl text-[#1a4a2c] mb-3">5. Accuracy of Materials</h2>
                <p>
                  The materials appearing on Rency Chemutai website could include technical, typographical, or photographic errors. Rency Chemutai does not warrant that any of the materials on its website are accurate, complete, or current.
                </p>
              </section>

              <section>
                <h2 className="font-serif font-bold text-xl text-[#1a4a2c] mb-3">6. Links</h2>
                <p>
                  Rency Chemutai has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Rency Chemutai of the site. Use of any such linked website is at the user&apos;s own risk.
                </p>
              </section>

              <section>
                <h2 className="font-serif font-bold text-xl text-[#1a4a2c] mb-3">7. Modifications</h2>
                <p>
                  Rency Chemutai may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </section>

              <section>
                <h2 className="font-serif font-bold text-xl text-[#1a4a2c] mb-3">8. Governing Law</h2>
                <p>
                  These terms and conditions are governed by and construed in accordance with the laws of Kenya, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
