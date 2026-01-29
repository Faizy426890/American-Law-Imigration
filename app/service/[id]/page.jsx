'use client'
import React from 'react';
import { Phone, Mail, ChevronRight, Clock, CheckCircle, Users, Award, CreditCard, Briefcase, FileText, Home, Building2, Flag } from 'lucide-react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { useParams } from 'next/navigation';

const servicesData = {
  "investment-based": {
    title: "Investment-Based Immigration",
    description: "Comprehensive visa programs for global investors seeking U.S. permanent residency and business opportunities.",
    image: "https://static.joonsite.com/storage/3428/media/2504011118267619.png",
    overview: "Investment-based immigration programs provide pathways for foreign nationals to obtain U.S. permanent residency through significant capital investment. These programs are designed for high-net-worth individuals, entrepreneurs, and business investors looking to establish themselves in the United States market.",
    details: [
      "EB-5 Immigrant Investor Visa - Direct or Regional Center investment options",
      "E-2 Treaty Investor Visa - For treaty country nationals with substantial investment",
      "E-1 Treaty Trader Visa - For individuals engaged in international trade",
    ],
    eligibility: "Investment programs typically require substantial capital investment (EB-5 minimum varies) and a business plan demonstrating job creation and economic impact. Treaty visas require citizenship from treaty countries and proof of investment.",
    process: "The process includes business plan preparation, investment documentation, visa petition filing, background checks, and interview. Timeline varies from 12-36 months depending on program and complexity.",
    icon: CreditCard,
    color: "from-blue-600 to-blue-800",
    accentColor: "blue"
  },
  "work-visas": {
    title: "Work Visas",
    description: "Specialized work visa programs for skilled professionals, temporary workers, and exceptional talent.",
    image: "https://www.twelvers.in/uploads/services/visa-consultant121.jpg",
    overview: "Our work visa services cover a comprehensive range of employment-based visa categories designed to meet the diverse needs of employers and qualified workers. From H-1B specialty occupations to O-1 extraordinary ability visas, we navigate the complex requirements and documentation needed for successful work authorization.",
    details: [
      "H-1B – Specialty Occupation Workers requiring bachelor's degree or higher",
      "H-2A / H-2B – Agricultural & Non-Agricultural temporary workers",
      "O-1 – Individuals with Extraordinary Ability in sciences, arts, business, or athletics",
      "P Visas – Athletes, Artists, and Entertainers performing at internationally recognized levels",
      "TN – Canadian & Mexican Professionals under USMCA trade agreement",
    ],
    eligibility: "Requirements vary by visa type. H-1B requires specialization and employer sponsorship. O-1 requires sustained national or international acclaim. Each category has specific educational, experience, or achievement requirements.",
    process: "Processing involves job offer documentation, labor market test (LCA), petition filing, and approval. Work visa processing typically takes 1-6 months depending on category and completeness of application.",
    icon: Briefcase,
    color: "from-green-600 to-green-800",
    accentColor: "green"
  },
  "labor-certification": {
    title: "Labor Certification (PERM)",
    description: "Guidance through the PERM labor certification process for employment-based green cards.",
    image: "https://dm-consultant.in/wp-content/uploads/2023/11/Image-18.jpg",
    overview: "PERM (Program Electronic Review Management) labor certification is a critical step for employers seeking to sponsor foreign workers for permanent residency. Our team guides employers through recruitment requirements, prevailing wage determinations, and Department of Labor compliance.",
    details: [
      "PERM Labor Certification Process - Complete guidance through all stages",
      "Prevailing Wage Determination - Obtaining accurate wage assessments",
      "Recruitment & Department of Labor Compliance - Meeting all recruitment requirements",
      "Employer-Sponsored Green Cards (EB-2 / EB-3) - Second and Third preference categories",
    ],
    eligibility: "Employers must demonstrate inability to find U.S. workers willing, able, and qualified for the position. Prevailing wage must be offered. Position requirements and labor market conditions are evaluated.",
    process: "PERM processing includes 20-day recruitment period, priority date filing, DOL processing (typically 4-6 months), and approval. Total timeline from initiation to approval is typically 1-2 years.",
    icon: FileText,
    color: "from-purple-600 to-purple-800",
    accentColor: "purple"
  },
  "family-based": {
    title: "Family-Based Immigration",
    description: "Navigate family immigration sponsorship to reunite loved ones in the United States.",
    image: "https://media.istockphoto.com/id/452267187/photo/female-travel-agent-with-customers.jpg?s=612x612&w=0&k=20&c=_8pi3YmTsKFic1shn9ZzEcAKBoFIvIyUaCrbP8JlN4M=",
    overview: "Family-based immigration allows U.S. citizens and lawful permanent residents to sponsor qualified family members for permanent residency. We help families navigate the complex petition processes, visa categories, and interview requirements.",
    details: [
      "Immediate Relative Visas - Spouse, unmarried children under 21, parents (for USC)",
      "Spouse & Fiancé (K-1) Visas - For U.S. citizens marrying foreign nationals",
      "Parent & Child Sponsorship - Biological and adopted children and parents",
      "Sibling Petitions - Sponsorship of brothers and sisters",
      "Adjustment of Status & Consular Processing - Two pathways to green card",
    ],
    eligibility: "Petitioner must be U.S. citizen or permanent resident with proof of relationship. Income requirements (I-864 Affidavit of Support) must be met. Beneficiary must be admissible to the U.S.",
    process: "Process includes petition filing, visa bulletin tracking, medical examination, background checks, and interview. Timeline varies from 6 months (immediate relatives) to several years for preference categories.",
    icon: Home,
    color: "from-pink-600 to-pink-800",
    accentColor: "pink"
  },
  "business-immigration": {
    title: "Business Immigration",
    description: "Comprehensive immigration solutions for companies, entrepreneurs, and multinational executives.",
    image: "https://www.the-travel-franchise.com/wp-content/uploads/2023/11/couple-with-travel-agent-at-the-office-2022-04-07-12-58-22-utc_11zon.jpg",
    overview: "We provide full-service business immigration support for multinational corporations, startups, and entrepreneurs. From intracompany transfers to executive visas, we handle the complex requirements of moving talent and leadership globally.",
    details: [
      "L-1A / L-1B – Intracompany Transfers for managers, executives, and specialized knowledge workers",
      "E-2 Business Visas – For foreign investors and entrepreneurs from treaty countries",
      "EB-1C Multinational Manager Green Cards – Permanent residency for international managers",
      "Start-Up & Entrepreneur Visas – Emerging visa programs for founders and innovators",
      "Corporate Compliance & Visa Strategy – Ongoing support for multinational operations",
    ],
    eligibility: "Requirements depend on visa category. L-1 requires one year employment with parent/affiliate company. E-2 requires treaty country citizenship and substantial investment. EB-1C requires managerial/executive role.",
    process: "Processing timelines vary: L-1 typically 4-8 weeks, E-2 6-12 weeks, EB-1C similar to employment-based processes. Corporate compliance includes annual I-9 audits and visa monitoring.",
    icon: Building2,
    color: "from-indigo-600 to-indigo-800",
    accentColor: "indigo"
  },
  "citizenship": {
    title: "Citizenship & Naturalization",
    description: "Complete guidance through the naturalization process to achieve U.S. citizenship.",
    image: "https://media.istockphoto.com/id/1396984358/photo/at-travel-agency.jpg?s=612x612&w=0&k=20&c=p1Z-dwQiCYI3iNmwaAbyKe03cw98ydXaxBrxXd8ThUU=",
    overview: "We provide comprehensive support for lawful permanent residents seeking U.S. citizenship. From application preparation to interview coaching and test review, we ensure applicants are thoroughly prepared for every aspect of the naturalization process.",
    details: [
      "N-400 Naturalization Applications - Complete application preparation and filing",
      "Citizenship Interview Preparation - Mock interviews and personalized coaching",
      "English & Civics Test Guidance - Preparation materials for civics examination",
      "Dual Citizenship Issues - Guidance on maintaining other citizenships",
      "Certificate of Citizenship - Applications and document verification",
    ],
    eligibility: "Must be permanent resident for 5 years (or 3 if married to USC), demonstrate English proficiency, pass civics test, and show good moral character. Some exceptions and special provisions apply.",
    process: "Application processing takes 8-12 months. Interview includes background review, English testing, and civics exam. Oath ceremony follows approval. Total timeline typically 9-15 months.",
    icon: Flag,
    color: "from-red-600 to-red-800",
    accentColor: "red"
  },
  "green-card": {
    title: "Green Card Services",
    description: "Guidance for all paths to U.S. permanent residency (green card).",
    image: "https://img.freepik.com/free-photo/medium-shot-woman-working-as-travel-agent_23-2150455603.jpg",
    overview: "Green card sponsorship provides permanent residency status, allowing individuals to live, work, and study permanently in the United States. We handle all employment-based, family-based, diversity, and special visa programs.",
    details: [
      "Employment-Based Green Cards - EB-1 through EB-5 preference categories",
      "Family-Based Green Cards - Immediate relatives and preference categories",
      "Adjustment of Status (I-485) - Green card application while in the U.S.",
      "Consular Processing - Green card issuance abroad through consulates",
      "Green Card Renewals & Replacements - I-90 renewal and replacement cards",
      "Removal of Conditions (I-751) - Removing conditions from conditional green cards",
    ],
    eligibility: "Eligibility depends on category: employment-based requires job offer/sponsorship, family-based requires qualifying relative, diversity requires lottery selection. All require admissibility to the U.S.",
    process: "Timeline varies significantly by category: immediate relatives 6-12 months, employment-based 1-2+ years, diversity visa 1 year. Process includes medical exam, background checks, visa interview, and card issuance.",
    icon: CreditCard,
    color: "from-teal-600 to-teal-800",
    accentColor: "teal"
  },
};

export default function ServiceDetailPage() {
  // Get the serviceId from URL parameters
  const params = useParams();
  const serviceId = params.id;
  
  // Check if service exists, otherwise show 404
  if (!serviceId || !servicesData[serviceId]) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex flex-col items-center justify-center p-8">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
            <h2 className="text-3xl font-semibold text-gray-600 mb-6">Service Not Found</h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              The immigration service you're looking for doesn't exist or has been moved.
            </p>
            <a 
              href="/immigration-services" 
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              ← Back to Services
            </a>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const service = servicesData[serviceId];
  const ServiceIcon = service.icon;

  return ( 
    <> 
      <Navbar/>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <div className={`relative bg-gradient-to-r ${service.color} text-white overflow-hidden`}>
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="max-w-4xl">
              <div className="inline-flex items-center px-5 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6 border border-white/30">
                <ServiceIcon className="h-4 w-4 mr-2" />
                Professional Immigration Services
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">{service.title}</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">{service.description}</p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact" 
                  className="px-8 py-4 bg-white text-gray-900 rounded-xl hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl font-bold inline-flex items-center group"
                >
                  Get Started Today
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#overview" 
                  className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all font-bold"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero Image */}
          <div className="mb-20">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center space-x-3 text-white">
                  <ServiceIcon className="h-8 w-8" />
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Overview Section */}
          <div id="overview" className="mb-20">
            <div className="flex items-center mb-8">
              <div className={`h-1 w-16 bg-gradient-to-r ${service.color} mr-4 rounded-full`}></div>
              <h2 className="text-4xl font-bold text-gray-900">Overview</h2>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <p className="text-lg text-gray-700 leading-relaxed">{service.overview}</p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-20">
            <div className="flex items-center mb-8">
              <div className={`h-1 w-16 bg-gradient-to-r ${service.color} mr-4 rounded-full`}></div>
              <h2 className="text-4xl font-bold text-gray-900">Services & Programs</h2>
            </div>
            <div className="grid gap-6">
              {service.details.map((detail, index) => (
                <div 
                  key={index}
                  className={`bg-white p-8 rounded-2xl shadow-md border-l-4 border-${service.accentColor}-500 hover:shadow-xl transition-all hover:-translate-y-1`}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className={`h-10 w-10 rounded-full bg-${service.accentColor}-100 flex items-center justify-center`}>
                        <CheckCircle className={`h-6 w-6 text-${service.accentColor}-600`} />
                      </div>
                    </div>
                    <div className="ml-6">
                      <p className="text-gray-800 text-lg leading-relaxed font-medium">{detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* Eligibility */}
            <div className={`bg-gradient-to-br from-${service.accentColor}-50 via-white to-white p-10 rounded-2xl shadow-lg border border-${service.accentColor}-100`}>
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl bg-${service.accentColor}-100`}>
                  <Users className={`h-8 w-8 text-${service.accentColor}-600`} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 ml-4">Eligibility Requirements</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">{service.eligibility}</p>
            </div>

            {/* Process */}
            <div className="bg-gradient-to-br from-gray-50 via-white to-white p-10 rounded-2xl shadow-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-xl bg-gray-100">
                  <Clock className="h-8 w-8 text-gray-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 ml-4">Application Process</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">{service.process}</p>
            </div>
          </div>

          {/* CTA Section */}
          <div id="contact" className={`bg-gradient-to-r ${service.color} rounded-3xl shadow-2xl p-12 md:p-16 text-center text-white relative overflow-hidden`}>
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center p-4 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <Award className="h-12 w-12" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Begin Your Journey?</h2>
              <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                Our experienced immigration attorneys are ready to guide you through every step of your immigration journey with personalized attention and proven expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="tel:+14692006508" 
                  className="px-10 py-5 bg-white text-gray-900 rounded-xl hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl font-bold inline-flex items-center group"
                >
                  <Phone className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                  Call Us Now
                </a>
                <a 
                  href="mailto:info@khanlegalgroup.com" 
                  className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all font-bold inline-flex items-center group"
                >
                  <Mail className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>   
      <Footer/>
    </>
  );
}