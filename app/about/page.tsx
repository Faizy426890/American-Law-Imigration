// components/AboutSection.tsx
"use client"
import React from 'react';
import Image from 'next/image';  
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const AboutSection = () => {
  return ( 
    <> 
   <Navbar/>
    <section className="bg-white">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-20 lg:py-32">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-yellow-50 border-2 border-yellow-400 rounded-full mb-8">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-bold text-yellow-700 uppercase tracking-wider">About Us</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
            Your Trusted Partner in<br />
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              U.S. Immigration Law
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are a dedicated team of immigration attorneys and consultants committed to helping individuals, 
            families, and businesses navigate the complexities of U.S. immigration law with confidence and clarity.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl lg:rounded-[3rem] p-8 md:p-12 lg:p-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-8">
            Our Mission
          </h2>
          
          <div className="space-y-6 text-gray-300 text-base md:text-lg leading-relaxed mb-12">
            <p>
              At our firm, we believe that everyone deserves a chance to build a better future in the United States. 
              Our mission is to provide exceptional legal representation and personalized guidance throughout every 
              step of the immigration process. With over many years of combined experience, we have successfully helped 
              thousands of clients achieve their American dream.
            </p>
            <p>
              We understand that immigration matters are deeply personal and can impact your entire family. That's 
              why we approach each case with dedication, compassion, and a commitment to excellence. From visa 
              applications to citizenship petitions, we stand by your side with unwavering support.
            </p>
          </div>

        
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
            Meet Our Legal Team
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Experienced professionals dedicated to your success
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Team Member 1 - Aman Khan */}
          <div className="bg-gray-50 rounded-3xl lg:rounded-[3rem] p-8 md:p-12 border-3 border-gray-200 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-400/20 transition-all duration-500 hover:-translate-y-3">
            <div className="flex flex-col items-center mb-8">
              <div className="relative w-64 h-64 md:w-72 md:h-72 mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-3 bg-white rounded-full overflow-hidden shadow-2xl">
                  <Image
                    src="https://res.cloudinary.com/diml90c1y/image/upload/v1767991488/Image-empty-state_1_m8iswx.avif"
                    alt="Aman Khan - Attorney at Law"
                    width={280}
                    height={280}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
              
              <span className="inline-block px-6 py-2 bg-yellow-400 text-gray-900 text-xs md:text-sm font-bold uppercase tracking-wider rounded-full mb-3">
                Attorney at Law
              </span>
              <h3 className="text-3xl md:text-4xl font-black text-gray-900">Aman Khan</h3>
            </div>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 text-center md:text-left">
              Aman Khan is a distinguished immigration attorney with experience of representing 
              clients in complex immigration matters. A graduate of Law School, Aman has built a 
              reputation for excellence in family-based immigration, employment visas, and deportation defense. 
              His client-centered approach and deep understanding of immigration law have resulted in thousands 
              of successful cases.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-5 py-2.5 bg-white text-yellow-700 text-sm font-semibold rounded-full border-2 border-yellow-400 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-500 hover:text-white hover:-translate-y-1 transition-all duration-300">
                Family Immigration
              </span>
              <span className="px-5 py-2.5 bg-white text-yellow-700 text-sm font-semibold rounded-full border-2 border-yellow-400 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-500 hover:text-white hover:-translate-y-1 transition-all duration-300">
                Employment Visas
              </span>
              <span className="px-5 py-2.5 bg-white text-yellow-700 text-sm font-semibold rounded-full border-2 border-yellow-400 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-500 hover:text-white hover:-translate-y-1 transition-all duration-300">
                Deportation Defense
              </span>
              <span className="px-5 py-2.5 bg-white text-yellow-700 text-sm font-semibold rounded-full border-2 border-yellow-400 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-500 hover:text-white hover:-translate-y-1 transition-all duration-300">
                Citizenship
              </span>
            </div>
          </div>

          {/* Team Member 2 - Zafar Iqbal */}
          <div className="bg-gray-50 rounded-3xl lg:rounded-[3rem] p-8 md:p-12 border-3 border-gray-200 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-400/20 transition-all duration-500 hover:-translate-y-3">
            <div className="flex flex-col items-center mb-8">
              <div className="relative w-64 h-64 md:w-72 md:h-72 mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-3 bg-white rounded-full overflow-hidden shadow-2xl">
                  <Image
                    src="https://res.cloudinary.com/diml90c1y/image/upload/v1767991488/Image-empty-state_2_bwvknf.avif"
                    alt="Zafar Iqbal - Senior Immigration Consultant"
                    width={280}
                    height={280}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
              
              <span className="inline-block px-6 py-2 bg-yellow-400 text-gray-900 text-xs md:text-sm font-bold uppercase tracking-wider rounded-full mb-3">
                Senior Immigration Consultant
              </span>
              <h3 className="text-3xl md:text-4xl font-black text-gray-900">Zafar Iqbal</h3>
            </div>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 text-center md:text-left">
              Zafar Iqbal brings of specialized experience in immigration consulting and case 
              management. With extensive knowledge of visa procedures and documentation requirements, Zafar 
              ensures that every application is meticulously prepared and strategically positioned for success. 
              His expertise in business immigration and investor visas has helped numerous entrepreneurs and 
              professionals establish themselves in the United States.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-5 py-2.5 bg-white text-yellow-700 text-sm font-semibold rounded-full border-2 border-yellow-400 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-500 hover:text-white hover:-translate-y-1 transition-all duration-300">
                Business Immigration
              </span>
              <span className="px-5 py-2.5 bg-white text-yellow-700 text-sm font-semibold rounded-full border-2 border-yellow-400 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-500 hover:text-white hover:-translate-y-1 transition-all duration-300">
                Investor Visas
              </span>
              <span className="px-5 py-2.5 bg-white text-yellow-700 text-sm font-semibold rounded-full border-2 border-yellow-400 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-500 hover:text-white hover:-translate-y-1 transition-all duration-300">
                Student Visas
              </span>
              <span className="px-5 py-2.5 bg-white text-yellow-700 text-sm font-semibold rounded-full border-2 border-yellow-400 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-500 hover:text-white hover:-translate-y-1 transition-all duration-300">
                Documentation
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 text-center mb-16 lg:mb-20">
          Why Choose Our Firm?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border-3 border-gray-100 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-400/20 hover:-translate-y-3 transition-all duration-500">
            <div className="text-5xl md:text-6xl mb-6">⚖️</div>
            <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-4"> Legal Guidance</h3>
            <p className="text-gray-600 leading-relaxed">
              Our attorneys stay current with the latest immigration laws and policies to provide you with accurate, 
              reliable legal advice.
            </p>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border-3 border-gray-100 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-400/20 hover:-translate-y-3 transition-all duration-500">
            <div className="text-5xl md:text-6xl mb-6">🤝</div>
            <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-4">Personalized Service</h3>
            <p className="text-gray-600 leading-relaxed">
              We understand that every case is unique. We tailor our approach to meet your specific needs and 
              circumstances.
            </p>
          </div>

          

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border-3 border-gray-100 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-400/20 hover:-translate-y-3 transition-all duration-500">
            <div className="text-5xl md:text-6xl mb-6">💬</div>
            <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-4">Clear Communication</h3>
            <p className="text-gray-600 leading-relaxed">
              We keep you informed every step of the way, explaining complex legal processes in simple, 
              understandable terms.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-3xl lg:rounded-[3rem] p-10 md:p-16 lg:p-20 text-center shadow-2xl shadow-yellow-500/30">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Ready to Begin Your Immigration Journey?
          </h2>
          <p className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto mb-10 leading-relaxed">
            Schedule a consultation with our experienced team today and take the first step toward securing your 
            future in the United States.
          </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
  <a 
    href="/contact" 
    className="w-full sm:w-auto px-10 py-5 bg-gray-900 text-yellow-400 text-base md:text-lg font-bold rounded-full hover:bg-black hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 uppercase tracking-wider flex items-center justify-center gap-3 no-underline"
  >
    Schedule Consultation
    <span className="text-xl">→</span>
  </a>
  <a 
    href="/contact" 
    className="w-full sm:w-auto px-10 py-5 bg-white text-gray-900 text-base md:text-lg font-bold rounded-full border-3 border-gray-900 hover:bg-gray-900 hover:text-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 uppercase tracking-wider no-underline"
  >
    Contact Us
  </a>
</div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>  
    <Footer/>
     </>
  );
};

export default AboutSection;