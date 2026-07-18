'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-[#fbf9f2]">
        <section className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20">
          <Link href="/" className="text-[#3f8455] hover:text-[#1a4a2c] mb-6 inline-flex items-center gap-1">
            ← Back to Home
          </Link>

          <div className="bg-white rounded-xl p-6 md:p-12 border border-[#f0f0f0]">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#1a4a2c] mb-2">Privacy Policy</h1>
            <p className="text-xs text-gray-500 mb-8">Last updated: July 2026</p>

            <div className="prose prose-sm max-w-none text-gray-700 space-y-6">
              <section>
                <h2 className="font-serif font-bold text-xl text-[#1a4a2c] mb-3">1. Introduction</h2>
                <p>
                  Rency Chemutai Dairy Consulting ("we" or "us" or "our") operates the website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
                </p>
              </section>

              <section>
                <h2 className="font-serif font-bold text-xl text-[#1a4a2c] mb-3">2. Information Collection and Use</h2>
                <p>We collect several different types of information for various purposes to provide and improve our Service.</p>
                <p className="mt-3">
                  <strong>Types of Data Collected:</strong>
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Personal Data: Name, email address, phone number, farm location, and agricultural information you provide</li>
                  <li>Usage Data: Information about your interactions with our website</li>
                  <li>Cookies and Tracking Technologies: To improve user experience</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif font-bold text-xl text-[#1a4a2c] mb-3">3. Use of Data</h2>
                <p>Rency Chemutai uses the collected data for various purposes:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>To provide and maintain our service</li>
                  <li>To notify you about changes to our service</li>
                  <li>To allow you to participate in interactive features of our service</li>
                  <li>To provide customer support</li>
                  <li>To gather analysis or valuable information to improve our service</li>
                  <li>To monitor the usage of our service</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif font-bold text-xl text-[#1a4a2c] mb-3">4. Security of Data</h2>
                <p>
                  The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                </p>
              </section>

              <section>
                <h2 className="font-serif font-bold text-xl text-[#1a4a2c] mb-3">5. Your Rights</h2>
                <p>
                  You have the right to access, update, or delete your personal information at any time by contacting us. You may opt out of receiving promotional communications from us by following the unsubscribe instructions in any email we send.
                </p>
              </section>

              <section>
                <h2 className="font-serif font-bold text-xl text-[#1a4a2c] mb-3">6. Third-Party Links</h2>
                <p>
                  Our Service may contain links to other sites that are not operated by us. This Privacy Policy does not apply to third-party websites and we are not responsible for their privacy practices. We encourage you to review their privacy policies.
                </p>
              </section>

              <section>
                <h2 className="font-serif font-bold text-xl text-[#1a4a2c] mb-3">7. Children&apos;s Privacy</h2>
                <p>
                  Our Service does not address anyone under the age of 18 ("Children"). We do not knowingly collect personally identifiable information from children under 18. If we become aware that a child has provided us with personal information, we immediately delete such information and terminate the child&apos;s access to the Service.
                </p>
              </section>

              <section>
                <h2 className="font-serif font-bold text-xl text-[#1a4a2c] mb-3">8. Changes to This Privacy Policy</h2>
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="font-serif font-bold text-xl text-[#1a4a2c] mb-3">9. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p className="mt-3">
                  <strong>Email:</strong> rencychemutai@gmail.com
                  <br />
                  <strong>Phone:</strong> 0718 699 566
                  <br />
                  <strong>Location:</strong> Eldoret, Kenya
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
