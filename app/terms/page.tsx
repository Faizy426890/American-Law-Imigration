import React from 'react';
import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-slate-900 text-white py-4 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold tracking-tight hover:text-amber-400 transition-colors">
              American Immigration Lawyers
            </Link>
            <nav className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-amber-400 transition-colors text-sm font-medium">
                Privacy Policy
              </Link>
              <Link href="/" className="hover:text-amber-400 transition-colors text-sm font-medium">
                Home
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">Terms of Service</h1>
          <p className="text-xl text-slate-300 mb-2">American Immigration Lawyers (AIL)</p>
          <p className="text-sm text-amber-400 font-medium">Effective Date: January 29, 2026</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Introduction */}
        <section className="mb-12 bg-white rounded-lg shadow-sm p-8 border-l-4 border-amber-500">
          <p className="text-lg leading-relaxed text-slate-700">
            Welcome to American Immigration Lawyers (AIL). These Terms of Service govern your use of our website 
            and the provision of our legal services. By accessing our website or engaging our services, you agree 
            to be bound by these Terms. Please read them carefully before proceeding.
          </p>
        </section>

        {/* Important Notice */}
        <section className="mb-12 bg-red-50 border-4 border-red-600 rounded-lg shadow-lg p-8">
          <div className="flex items-start gap-4">
            <div className="text-red-600 text-4xl flex-shrink-0">⚠</div>
            <div>
              <h3 className="text-2xl font-bold text-red-900 mb-3">IMPORTANT NOTICE</h3>
              <p className="text-red-900 font-semibold leading-relaxed">
                This website is for informational purposes only and does not provide legal advice. Please do not 
                act or refrain from acting based on anything you read on this site. Using this site or communicating 
                with AIL through this site does not form an attorney-client relationship.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1 */}
        <section className="mb-10 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-amber-500">
            1. Acceptance of Terms
          </h2>
          <p className="text-slate-700 leading-relaxed">
            By accessing or using our website, you acknowledge that you have read, understood, and agree to be bound 
            by these Terms of Service and our Privacy Policy. If you do not agree to these Terms, you must not use 
            our website or services. We reserve the right to modify these Terms at any time, and such modifications 
            will be effective immediately upon posting on our website.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-10 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-amber-500">
            2. No Attorney-Client Relationship
          </h2>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-4 rounded">
            <p className="text-slate-900 font-bold leading-relaxed mb-3">
              Use of this website, submission of inquiries, or communication through this website does NOT create 
              an attorney-client relationship.
            </p>
            <p className="text-slate-700 leading-relaxed">
              An attorney-client relationship is established only when:
            </p>
          </div>
          <ul className="space-y-2 ml-6 mb-4">
            <li className="text-slate-700 flex items-start">
              <span className="text-amber-500 mr-3 mt-1">▪</span>
              <span>You have executed a written engagement agreement with AIL</span>
            </li>
            <li className="text-slate-700 flex items-start">
              <span className="text-amber-500 mr-3 mt-1">▪</span>
              <span>AIL has confirmed acceptance of your representation in writing</span>
            </li>
            <li className="text-slate-700 flex items-start">
              <span className="text-amber-500 mr-3 mt-1">▪</span>
              <span>Any required retainer or fee has been paid</span>
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed">
            Until an attorney-client relationship is formally established, any information you provide will not be 
            treated as confidential or privileged attorney-client communications.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-10 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-amber-500">
            3. Informational Purposes Only
          </h2>
          <p className="text-slate-700 mb-4 leading-relaxed">
            The content on this website, including but not limited to articles, blog posts, FAQs, and general 
            information about immigration law, is provided for informational purposes only and does not constitute 
            legal advice. You should not act or refrain from acting based on any information on this website without 
            seeking professional legal counsel appropriate to your specific circumstances.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Immigration law is complex and constantly changing. The information on this website may not reflect the 
            most current legal developments and may not apply to your individual situation. Every immigration case 
            is unique, and outcomes depend on specific facts and circumstances.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-10 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-amber-500">
            4. Scope of Services
          </h2>
          <p className="text-slate-700 mb-4 leading-relaxed">
            AIL provides legal services related to immigration law, including but not limited to:
          </p>
          <ul className="space-y-2 ml-6 mb-4">
            <li className="text-slate-700 flex items-start">
              <span className="text-amber-500 mr-3 mt-1">▪</span>
              <span>Visa applications and petitions</span>
            </li>
            <li className="text-slate-700 flex items-start">
              <span className="text-amber-500 mr-3 mt-1">▪</span>
              <span>Green card applications and citizenship matters</span>
            </li>
            <li className="text-slate-700 flex items-start">
              <span className="text-amber-500 mr-3 mt-1">▪</span>
              <span>Asylum and refugee protection</span>
            </li>
            <li className="text-slate-700 flex items-start">
              <span className="text-amber-500 mr-3 mt-1">▪</span>
              <span>Deportation defense and removal proceedings</span>
            </li>
            <li className="text-slate-700 flex items-start">
              <span className="text-amber-500 mr-3 mt-1">▪</span>
              <span>Employment-based immigration</span>
            </li>
            <li className="text-slate-700 flex items-start">
              <span className="text-amber-500 mr-3 mt-1">▪</span>
              <span>Family-based immigration</span>
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed">
            The specific scope of services will be defined in a written engagement agreement. Services not specified 
            in the engagement agreement are not included unless expressly agreed upon in writing.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-10 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-amber-500">
            5. No Guarantee of Results
          </h2>
          <div className="bg-amber-50 border-2 border-amber-400 p-6 rounded-lg">
            <p className="text-slate-900 leading-relaxed">
              <span className="font-bold">AIL makes no guarantees, warranties, or representations regarding the 
              outcome of any legal matter.</span> Immigration decisions are made by government agencies, and we 
              cannot control or predict their decisions. Past results do not guarantee future outcomes. Each case 
              is evaluated on its own merits, and results vary based on individual circumstances.
            </p>
          </div>
        </section>

        {/* Section 6 */}
        <section className="mb-10 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-amber-500">
            6. Client Responsibilities
          </h2>
          <p className="text-slate-700 mb-4 leading-relaxed">
            As a client of AIL, you agree to:
          </p>
          <ul className="space-y-2 ml-6 mb-4">
            <li className="text-slate-700 flex items-start">
              <span className="text-amber-500 mr-3 mt-1">▪</span>
              <span>Provide complete, accurate, and truthful information</span>
            </li>
            <li className="text-slate-700 flex items-start">
              <span className="text-amber-500 mr-3 mt-1">▪</span>
              <span>Respond promptly to requests for information or documents</span>
            </li>
            <li className="text-slate-700 flex items-start">
              <span className="text-amber-500 mr-3 mt-1">▪</span>
              <span>Comply with all deadlines and requirements</span>
            </li>
            <li className="text-slate-700 flex items-start">
              <span className="text-amber-500 mr-3 mt-1">▪</span>
              <span>Pay all fees and costs in a timely manner</span>
            </li>
            <li className="text-slate-700 flex items-start">
              <span className="text-amber-500 mr-3 mt-1">▪</span>
              <span>Keep AIL informed of any changes in contact information or circumstances</span>
            </li>
            <li className="text-slate-700 flex items-start">
              <span className="text-amber-500 mr-3 mt-1">▪</span>
              <span>Cooperate fully in the preparation and prosecution of your case</span>
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed">
            Failure to fulfill these responsibilities may adversely affect your case and may result in termination 
            of representation.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-10 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-amber-500">
            7. Fees and Payment
          </h2>
          <p className="text-slate-700 mb-4 leading-relaxed">
            Legal fees and payment terms will be outlined in a written engagement agreement. Fees may be charged 
            on an hourly basis, flat fee basis, or other arrangement as specified in the agreement. Clients are 
            responsible for:
          </p>
          <ul className="space-y-2 ml-6 mb-4">
            <li className="text-slate-700 flex items-start">
              <span className="text-amber-500 mr-3 mt-1">▪</span>
              <span>Attorney fees as specified in the engagement agreement</span>
            </li>
            <li className="text-slate-700 flex items-start">
              <span className="text-amber-500 mr-3 mt-1">▪</span>
              <span>Government filing fees</span>
            </li>
            <li className="text-slate-700 flex items-start">
              <span className="text-amber-500 mr-3 mt-1">▪</span>
              <span>Third-party costs (translations, courier services, etc.)</span>
            </li>
            <li className="text-slate-700 flex items-start">
              <span className="text-amber-500 mr-3 mt-1">▪</span>
              <span>Any other costs incurred in connection with your case</span>
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed">
            Payment is due according to the terms specified in your engagement agreement. Late payments may result 
            in suspension of services or termination of representation.
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-10 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-amber-500">
            8. Confidentiality and Attorney-Client Privilege
          </h2>
          <p className="text-slate-700 mb-4 leading-relaxed">
            Once an attorney-client relationship is established, AIL will maintain the confidentiality of your 
            information in accordance with professional ethical rules and applicable law. Attorney-client privilege 
            protects confidential communications between you and your attorney.
          </p>
          <p className="text-slate-700 leading-relaxed">
            However, please note that communications made through this website before establishing an attorney-client 
            relationship are not protected by attorney-client privilege and should not include confidential or 
            sensitive information.
          </p>
        </section>

        {/* Section 9 */}
        <section className="mb-10 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-amber-500">
            9. Termination of Representation
          </h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-slate-800 mb-3">9.1 Client Termination</h3>
            <p className="text-slate-700 leading-relaxed">
              You may terminate representation at any time by providing written notice to AIL. You will be responsible 
              for payment of all fees and costs incurred up to the date of termination.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">9.2 AIL Termination</h3>
            <p className="text-slate-700 mb-3 leading-relaxed">
              AIL may withdraw from representation for good cause, including but not limited to:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="text-slate-700 flex items-start">
                <span className="text-amber-500 mr-3 mt-1">▪</span>
                <span>Non-payment of fees or costs</span>
              </li>
              <li className="text-slate-700 flex items-start">
                <span className="text-amber-500 mr-3 mt-1">▪</span>
                <span>Failure to cooperate or provide necessary information</span>
              </li>
              <li className="text-slate-700 flex items-start">
                <span className="text-amber-500 mr-3 mt-1">▪</span>
                <span>Client dishonesty or fraud</span>
              </li>
              <li className="text-slate-700 flex items-start">
                <span className="text-amber-500 mr-3 mt-1">▪</span>
                <span>Conflicts of interest</span>
              </li>
              <li className="text-slate-700 flex items-start">
                <span className="text-amber-500 mr-3 mt-1">▪</span>
                <span>Other circumstances permitted under professional rules of conduct</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 10 */}
        <section className="mb-10 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-amber-500">
            10. Limitation of Liability
          </h2>
          <p className="text-slate-700 leading-relaxed">
            To the fullest extent permitted by law, AIL shall not be liable for any indirect, incidental, special, 
            consequential, or punitive damages arising out of or related to your use of this website or our legal 
            services. This includes, but is not limited to, damages for loss of profits, goodwill, data, or other 
            intangible losses, even if AIL has been advised of the possibility of such damages.
          </p>
        </section>

        {/* Section 11 */}
        <section className="mb-10 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-amber-500">
            11. Website Use and Restrictions
          </h2>
          <p className="text-slate-700 mb-4 leading-relaxed">You agree not to:</p>
          <ul className="space-y-2 ml-6">
            <li className="text-slate-700 flex items-start">
              <span className="text-amber-500 mr-3 mt-1">▪</span>
              <span>Use this website for any unlawful purpose</span>
            </li>
            <li className="text-slate-700 flex items-start">
              <span className="text-amber-500 mr-3 mt-1">▪</span>
              <span>Attempt to gain unauthorized access to any portion of the website</span>
            </li>
            <li className="text-slate-700 flex items-start">
              <span className="text-amber-500 mr-3 mt-1">▪</span>
              <span>Interfere with or disrupt the website or servers</span>
            </li>
            <li className="text-slate-700 flex items-start">
              <span className="text-amber-500 mr-3 mt-1">▪</span>
              <span>Transmit viruses, malware, or harmful code</span>
            </li>
            <li className="text-slate-700 flex items-start">
              <span className="text-amber-500 mr-3 mt-1">▪</span>
              <span>Copy, modify, or distribute website content without permission</span>
            </li>
            <li className="text-slate-700 flex items-start">
              <span className="text-amber-500 mr-3 mt-1">▪</span>
              <span>Use automated systems to access the website without authorization</span>
            </li>
          </ul>
        </section>

        {/* Condensed remaining sections */}
        <section className="mb-10 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-amber-500">
            12. Intellectual Property
          </h2>
          <p className="text-slate-700 leading-relaxed">
            All content on this website, including text, graphics, logos, images, and software, is the property of 
            AIL or its licensors and is protected by copyright, trademark, and other intellectual property laws.
          </p>
        </section>

        <section className="mb-10 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-amber-500">
            13. Third-Party Links
          </h2>
          <p className="text-slate-700 leading-relaxed">
            This website may contain links to third-party websites. AIL does not endorse, control, or assume 
            responsibility for third-party content, privacy policies, or practices.
          </p>
        </section>

        <section className="mb-10 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-amber-500">
            14. Disclaimer of Warranties
          </h2>
          <div className="bg-slate-100 border-l-4 border-slate-600 p-6 rounded">
            <p className="text-slate-900 font-bold leading-relaxed mb-2">
              THIS WEBSITE AND ITS CONTENT ARE PROVIDED "AS IS" WITHOUT ANY WARRANTIES OF ANY KIND.
            </p>
            <p className="text-slate-700 leading-relaxed">
              AIL disclaims all warranties, including merchantability, fitness for a particular purpose, accuracy, 
              completeness, and non-infringement.
            </p>
          </div>
        </section>

        <section className="mb-10 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-amber-500">
            15. Indemnification
          </h2>
          <p className="text-slate-700 leading-relaxed">
            You agree to indemnify, defend, and hold harmless AIL, its attorneys, employees, and affiliates from 
            any claims, liabilities, damages, losses, costs, or expenses arising out of your use of this website 
            or violation of these Terms.
          </p>
        </section>

        <section className="mb-10 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-amber-500">
            16. Governing Law and Jurisdiction
          </h2>
          <p className="text-slate-700 leading-relaxed">
            These Terms shall be governed by the laws of [Your State/Country], without regard to conflict of law 
            provisions. Disputes arising under these Terms shall be subject to the exclusive jurisdiction of courts 
            located in [Your Jurisdiction].
          </p>
        </section>

        <section className="mb-10 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-amber-500">
            17. Dispute Resolution
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Disputes arising from these Terms will be resolved through good faith negotiation, mediation, 
            arbitration, or litigation as appropriate.
          </p>
        </section>

        <section className="mb-10 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-amber-500">
            18. Severability
          </h2>
          <p className="text-slate-700 leading-relaxed">
            If any provision is found invalid or unenforceable, the remaining provisions shall continue in full 
            force and effect.
          </p>
        </section>

        <section className="mb-10 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-amber-500">
            19. Entire Agreement
          </h2>
          <p className="text-slate-700 leading-relaxed">
            These Terms, together with our Privacy Policy and any written engagement agreement, constitute the 
            entire agreement between you and AIL regarding your use of this website.
          </p>
        </section>

        <section className="mb-10 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-amber-500">
            20. Changes to Terms
          </h2>
          <p className="text-slate-700 leading-relaxed">
            AIL reserves the right to modify these Terms at any time. Changes will be effective immediately upon 
            posting. Your continued use constitutes acceptance of modified Terms.
          </p>
        </section>

        {/* Contact Section */}
        <section className="mb-10 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg shadow-sm p-8 border-2 border-amber-300">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Contact Information</h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            If you have questions about these Terms of Service, please contact us:
          </p>
          <div className="space-y-3 text-slate-800">
            <p className="font-bold text-lg">American Immigration Lawyers (AIL)</p>
            <p><span className="font-semibold">Email:</span> info@americanimmigrationlawyers.com</p>
            <p><span className="font-semibold">Phone:</span> [Your Phone Number]</p>
            <p><span className="font-semibold">Address:</span> [Your Physical Address]</p>
          </div>
        </section>

        {/* Final Acknowledgment */}
        <section className="bg-slate-900 text-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold mb-4">Acknowledgment and Acceptance</h3>
          <p className="leading-relaxed mb-4">
            By using this website or engaging our services, you acknowledge that you have read, understood, and 
            agree to be bound by these Terms of Service and our Privacy Policy.
          </p>
          <p className="text-slate-400 text-sm italic text-center mt-6">
            ©2026 by American Immigration Lawyers (AIL). All rights reserved.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-8">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">©2026 by American Immigration Lawyers (AIL). All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="text-sm hover:text-amber-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-sm hover:text-amber-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}