import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicy() {
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
              <Link href="/terms-of-service" className="hover:text-amber-400 transition-colors text-sm font-medium">
                Terms of Service
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">Privacy Policy</h1>
          <p className="text-xl text-slate-300 mb-2">American Immigration Lawyers (AIL)</p>
          <p className="text-sm text-amber-400 font-medium">Effective Date: January 29, 2026</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Introduction */}
        <section className="mb-12 bg-white rounded-lg shadow-sm p-8 border-l-4 border-amber-500">
          <p className="text-lg leading-relaxed text-slate-700 mb-4">
            American Immigration Lawyers (AIL) is committed to protecting your privacy and handling your personal 
            information with care and respect. This Privacy Policy explains how we collect, use, disclose, and 
            safeguard your information when you visit our website or engage our legal services.
          </p>
          <p className="text-lg leading-relaxed text-slate-700">
            Please read this Privacy Policy carefully. By using our website or services, you acknowledge that you 
            have read and understood this Privacy Policy and agree to be bound by its terms.
          </p>
        </section>

        {/* Section 1 */}
        <section className="mb-10 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-amber-500">
            1. Information We Collect
          </h2>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">1.1 Personal Information</h3>
            <p className="text-slate-700 mb-4 leading-relaxed">
              When you contact us, schedule a consultation, or engage our services, we may collect:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="text-slate-700 flex items-start">
                <span className="text-amber-500 mr-3 mt-1">▪</span>
                <span>Name, email address, phone number, and mailing address</span>
              </li>
              <li className="text-slate-700 flex items-start">
                <span className="text-amber-500 mr-3 mt-1">▪</span>
                <span>Date of birth, place of birth, and citizenship information</span>
              </li>
              <li className="text-slate-700 flex items-start">
                <span className="text-amber-500 mr-3 mt-1">▪</span>
                <span>Immigration status, visa information, and travel history</span>
              </li>
              <li className="text-slate-700 flex items-start">
                <span className="text-amber-500 mr-3 mt-1">▪</span>
                <span>Employment history, educational background, and family information</span>
              </li>
              <li className="text-slate-700 flex items-start">
                <span className="text-amber-500 mr-3 mt-1">▪</span>
                <span>Government-issued identification documents (passport, driver's license, etc.)</span>
              </li>
              <li className="text-slate-700 flex items-start">
                <span className="text-amber-500 mr-3 mt-1">▪</span>
                <span>Financial information for billing purposes</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">1.2 Automatically Collected Information</h3>
            <p className="text-slate-700 mb-4 leading-relaxed">
              When you visit our website, we may automatically collect:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="text-slate-700 flex items-start">
                <span className="text-amber-500 mr-3 mt-1">▪</span>
                <span>IP address, browser type, and device information</span>
              </li>
              <li className="text-slate-700 flex items-start">
                <span className="text-amber-500 mr-3 mt-1">▪</span>
                <span>Pages visited, time spent on pages, and referral sources</span>
              </li>
              <li className="text-slate-700 flex items-start">
                <span className="text-amber-500 mr-3 mt-1">▪</span>
                <span>Cookies and similar tracking technologies (see our Cookie Policy)</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-10 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-amber-500">
            2. How We Use Your Information
          </h2>
          <p className="text-slate-700 mb-4 leading-relaxed">
            We use your information for the following purposes:
          </p>
          <ul className="space-y-2 ml-6">
            <li className="text-slate-700 flex items-start">
              <span className="text-amber-500 mr-3 mt-1">▪</span>
              <span>To provide legal services and immigration consultancy</span>
            </li>
            <li className="text-slate-700 flex items-start">
              <span className="text-amber-500 mr-3 mt-1">▪</span>
              <span>To communicate with you about your case and respond to inquiries</span>
            </li>
            <li className="text-slate-700 flex items-start">
              <span className="text-amber-500 mr-3 mt-1">▪</span>
              <span>To prepare and file immigration applications and related documents</span>
            </li>
            <li className="text-slate-700 flex items-start">
              <span className="text-amber-500 mr-3 mt-1">▪</span>
              <span>To process payments and maintain billing records</span>
            </li>
            <li className="text-slate-700 flex items-start">
              <span className="text-amber-500 mr-3 mt-1">▪</span>
              <span>To comply with legal obligations and government requests</span>
            </li>
            <li className="text-slate-700 flex items-start">
              <span className="text-amber-500 mr-3 mt-1">▪</span>
              <span>To improve our website, services, and client experience</span>
            </li>
            <li className="text-slate-700 flex items-start">
              <span className="text-amber-500 mr-3 mt-1">▪</span>
              <span>To send you relevant updates, newsletters, or marketing communications (with your consent)</span>
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-10 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-amber-500">
            3. Legal Basis for Processing (GDPR)
          </h2>
          <p className="text-slate-700 mb-4 leading-relaxed">
            If you are located in the European Economic Area (EEA), we process your personal information based on:
          </p>
          <ul className="space-y-3 ml-6">
            <li className="text-slate-700 flex items-start">
              <span className="text-amber-500 mr-3 mt-1 font-bold">▪</span>
              <div>
                <span className="font-semibold">Consent:</span> When you provide explicit consent for specific purposes
              </div>
            </li>
            <li className="text-slate-700 flex items-start">
              <span className="text-amber-500 mr-3 mt-1 font-bold">▪</span>
              <div>
                <span className="font-semibold">Contract:</span> To perform our legal services under our engagement agreement
              </div>
            </li>
            <li className="text-slate-700 flex items-start">
              <span className="text-amber-500 mr-3 mt-1 font-bold">▪</span>
              <div>
                <span className="font-semibold">Legal Obligation:</span> To comply with applicable laws and regulations
              </div>
            </li>
            <li className="text-slate-700 flex items-start">
              <span className="text-amber-500 mr-3 mt-1 font-bold">▪</span>
              <div>
                <span className="font-semibold">Legitimate Interests:</span> To operate our business and provide quality services
              </div>
            </li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mb-10 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-amber-500">
            4. How We Share Your Information
          </h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            We maintain strict confidentiality standards. We may share your information only in the following circumstances:
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">4.1 With Your Consent</h3>
              <p className="text-slate-700 leading-relaxed">
                We may share your information with third parties when you provide explicit consent.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">4.2 Service Providers</h3>
              <p className="text-slate-700 mb-3 leading-relaxed">
                We may share information with trusted service providers who assist us in:
              </p>
              <ul className="space-y-2 ml-6 mb-3">
                <li className="text-slate-700 flex items-start">
                  <span className="text-amber-500 mr-3 mt-1">▪</span>
                  <span>Document translation services</span>
                </li>
                <li className="text-slate-700 flex items-start">
                  <span className="text-amber-500 mr-3 mt-1">▪</span>
                  <span>Background check providers</span>
                </li>
                <li className="text-slate-700 flex items-start">
                  <span className="text-amber-500 mr-3 mt-1">▪</span>
                  <span>Payment processing</span>
                </li>
                <li className="text-slate-700 flex items-start">
                  <span className="text-amber-500 mr-3 mt-1">▪</span>
                  <span>IT services and website hosting</span>
                </li>
              </ul>
              <p className="text-slate-700 leading-relaxed">
                These service providers are contractually bound to protect your information and use it only for the purposes we specify.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">4.3 Government Authorities</h3>
              <p className="text-slate-700 mb-3 leading-relaxed">
                We share information with government agencies when:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="text-slate-700 flex items-start">
                  <span className="text-amber-500 mr-3 mt-1">▪</span>
                  <span>Filing immigration applications and petitions</span>
                </li>
                <li className="text-slate-700 flex items-start">
                  <span className="text-amber-500 mr-3 mt-1">▪</span>
                  <span>Responding to lawful requests or court orders</span>
                </li>
                <li className="text-slate-700 flex items-start">
                  <span className="text-amber-500 mr-3 mt-1">▪</span>
                  <span>Required by applicable laws and regulations</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">4.4 Business Transfers</h3>
              <p className="text-slate-700 leading-relaxed">
                In the event of a merger, acquisition, or sale of assets, your information may be transferred to the 
                successor entity, subject to the same privacy protections.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section className="mb-10 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-amber-500">
            5. Data Security
          </h2>
          <p className="text-slate-700 mb-4 leading-relaxed">
            We implement reasonable administrative, technical, and physical safeguards to protect your information 
            from unauthorized access, disclosure, alteration, or destruction. These measures include:
          </p>
          <ul className="space-y-2 ml-6 mb-4">
            <li className="text-slate-700 flex items-start">
              <span className="text-amber-500 mr-3 mt-1">▪</span>
              <span>Encrypted data transmission (SSL/TLS)</span>
            </li>
            <li className="text-slate-700 flex items-start">
              <span className="text-amber-500 mr-3 mt-1">▪</span>
              <span>Secure file storage systems</span>
            </li>
            <li className="text-slate-700 flex items-start">
              <span className="text-amber-500 mr-3 mt-1">▪</span>
              <span>Access controls and authentication procedures</span>
            </li>
            <li className="text-slate-700 flex items-start">
              <span className="text-amber-500 mr-3 mt-1">▪</span>
              <span>Regular security audits and updates</span>
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed">
            However, no method of transmission or storage is completely secure. While we strive to protect your 
            information, we cannot guarantee absolute security.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-10 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-amber-500">
            6. Data Retention
          </h2>
          <p className="text-slate-700 mb-4 leading-relaxed">
            We retain your personal information for as long as necessary to fulfill the purposes outlined in this 
            Privacy Policy, unless a longer retention period is required or permitted by law. Factors affecting retention include:
          </p>
          <ul className="space-y-2 ml-6">
            <li className="text-slate-700 flex items-start">
              <span className="text-amber-500 mr-3 mt-1">▪</span>
              <span>The duration of our attorney-client relationship</span>
            </li>
            <li className="text-slate-700 flex items-start">
              <span className="text-amber-500 mr-3 mt-1">▪</span>
              <span>Legal and regulatory obligations (typically 7 years for legal files)</span>
            </li>
            <li className="text-slate-700 flex items-start">
              <span className="text-amber-500 mr-3 mt-1">▪</span>
              <span>Potential legal claims or disputes</span>
            </li>
            <li className="text-slate-700 flex items-start">
              <span className="text-amber-500 mr-3 mt-1">▪</span>
              <span>Your consent or request for continued storage</span>
            </li>
          </ul>
        </section>

        {/* Section 7 */}
        <section className="mb-10 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-amber-500">
            7. Your Privacy Rights
          </h2>
          <p className="text-slate-700 mb-4 leading-relaxed">
            Depending on your location, you may have the following rights:
          </p>
          <ul className="space-y-3 ml-6 mb-4">
            <li className="text-slate-700 flex items-start">
              <span className="text-amber-500 mr-3 mt-1 font-bold">▪</span>
              <div>
                <span className="font-semibold">Access:</span> Request copies of your personal information
              </div>
            </li>
            <li className="text-slate-700 flex items-start">
              <span className="text-amber-500 mr-3 mt-1 font-bold">▪</span>
              <div>
                <span className="font-semibold">Correction:</span> Request correction of inaccurate or incomplete information
              </div>
            </li>
            <li className="text-slate-700 flex items-start">
              <span className="text-amber-500 mr-3 mt-1 font-bold">▪</span>
              <div>
                <span className="font-semibold">Deletion:</span> Request deletion of your personal information
              </div>
            </li>
            <li className="text-slate-700 flex items-start">
              <span className="text-amber-500 mr-3 mt-1 font-bold">▪</span>
              <div>
                <span className="font-semibold">Restriction:</span> Request limitation on how we use your information
              </div>
            </li>
            <li className="text-slate-700 flex items-start">
              <span className="text-amber-500 mr-3 mt-1 font-bold">▪</span>
              <div>
                <span className="font-semibold">Portability:</span> Request transfer of your data to another service provider
              </div>
            </li>
            <li className="text-slate-700 flex items-start">
              <span className="text-amber-500 mr-3 mt-1 font-bold">▪</span>
              <div>
                <span className="font-semibold">Object:</span> Object to processing based on legitimate interests
              </div>
            </li>
            <li className="text-slate-700 flex items-start">
              <span className="text-amber-500 mr-3 mt-1 font-bold">▪</span>
              <div>
                <span className="font-semibold">Withdraw Consent:</span> Withdraw previously provided consent
              </div>
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed">
            To exercise these rights, please contact us using the information provided below. We will respond to your 
            request within 30 days. Please note that certain legal and ethical obligations may limit our ability to 
            fulfill some requests.
          </p>
        </section>

        {/* Remaining sections in condensed format for space */}
        <section className="mb-10 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-amber-500">
            8. Cookies and Tracking Technologies
          </h2>
          <p className="text-slate-700 mb-4 leading-relaxed">
            Our website uses cookies and similar tracking technologies to enhance your browsing experience. 
            Cookies are small data files stored on your device that help us remember your preferences, analyze 
            traffic, and improve functionality. You can control cookie preferences through your browser settings.
          </p>
        </section>

        <section className="mb-10 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-amber-500">
            9. Third-Party Links
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices 
            or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
          </p>
        </section>

        <section className="mb-10 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-amber-500">
            10. Children's Privacy
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Our services are not directed to individuals under the age of 18. We do not knowingly collect personal 
            information from children. If we become aware that we have collected information from a child without 
            parental consent, we will take steps to delete such information promptly.
          </p>
        </section>

        <section className="mb-10 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-amber-500">
            11. International Data Transfers
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Your information may be transferred to and processed in countries other than your country of residence. 
            When we transfer your information internationally, we ensure appropriate safeguards are in place to protect 
            your data in accordance with this Privacy Policy and applicable laws.
          </p>
        </section>

        <section className="mb-10 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-amber-500">
            12. California Privacy Rights
          </h2>
          <p className="text-slate-700 mb-4 leading-relaxed">
            If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA) 
            including the right to know, delete, and opt-out of the sale of personal information (we do not sell personal information).
          </p>
        </section>

        <section className="mb-10 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-amber-500">
            13. Changes to This Privacy Policy
          </h2>
          <p className="text-slate-700 leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify you of material changes by posting 
            the updated policy on our website with a new effective date. Your continued use of our services after 
            such changes constitutes acceptance of the updated Privacy Policy.
          </p>
        </section>

        {/* Contact Section */}
        <section className="mb-10 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg shadow-sm p-8 border-2 border-amber-300">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Contact Us</h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
          </p>
          <div className="space-y-3 text-slate-800">
            <p className="font-bold text-lg">American Immigration Lawyers (AIL)</p>
            <p><span className="font-semibold">Email:</span> privacy@americanimmigrationlawyers.com</p>
            <p><span className="font-semibold">Phone:</span> [Your Phone Number]</p>
            <p><span className="font-semibold">Address:</span> [Your Physical Address]</p>
          </div>
        </section>

        {/* Acknowledgment */}
        <section className="bg-slate-900 text-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Acknowledgment</h3>
          <p className="leading-relaxed">
            By using our website or services, you acknowledge that you have read, understood, and agree to be bound 
            by this Privacy Policy.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-8 mt-16">
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