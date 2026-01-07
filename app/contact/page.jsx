"use client"
import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return ( 
    <> 
    <Navbar/>
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900  pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6">
            <span className="px-5 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-xs font-bold uppercase tracking-widest rounded-full shadow-lg">
              Get In Touch
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Let's Start Your <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">Immigration Journey</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our experienced immigration attorneys are ready to help you achieve your American dream
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Contact Form - 7 columns */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-10 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"></div>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900">Send Us a Message</h2>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">First Name</label>
                    <input 
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:bg-white focus:outline-none transition-all duration-300"
                      placeholder="John"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Last Name</label>
                    <input 
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:bg-white focus:outline-none transition-all duration-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Email Address</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:bg-white focus:outline-none transition-all duration-300"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Phone Number</label>
                  <input 
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:bg-white focus:outline-none transition-all duration-300"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Service Interested In</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:bg-white focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
                  >
                    <option value="">Select a service</option>
                    <option value="visa-evaluation">Visa Evaluation</option>
                    <option value="h-1b-visa">H-1B Visa</option>
                    <option value="l-1-visa">L-1 Visa</option>
                    <option value="o-1-visa">O-1 Visa</option>
                    <option value="e-2-visa">E-2 Visa</option>
                    <option value="eb-1-green-card">EB-1 Green Card</option>
                    <option value="eb-2-niw">EB-2 NIW</option>
                    <option value="eb-3-green-card">EB-3 Green Card</option>
                    <option value="family-based-immigration">Family-Based Immigration</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:bg-white focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Tell us about your immigration needs..."
                  ></textarea>
                </div>

                <button 
                  onClick={handleSubmit}
                  className="w-full py-5 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-black text-lg rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>

          {/* Contact Info - 5 columns */}
          <div className="lg:col-span-5 space-y-6">
            {/* Office Info */}
            <div className="bg-gradient-to-br from-gray-700 to-black rounded-3xl shadow-2xl p-8 text-white">
              <h3 className="text-2xl font-black mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold mb-1">Office Address</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      555 Republic Dr Floor 2, Suite 214<br />
                       Plano, TX 75074,<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold mb-1">Phone</p>
                    <p className="text-gray-300 text-sm">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold mb-1">Email</p>
                    <p className="text-gray-300 text-sm">info@americanlawyers.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold mb-1">Office Hours</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
              <h4 className="text-xl font-black text-gray-900 mb-6">Why Choose Us</h4>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">Expert Legal Team</p>
                    <p className="text-sm text-gray-600">Experienced attorneys with proven track records</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">Personalized Service</p>
                    <p className="text-sm text-gray-600">Tailored solutions for your unique situation</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">Quick Response Time</p>
                    <p className="text-sm text-gray-600">We respond to inquiries within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">Free Consultation</p>
                    <p className="text-sm text-gray-600">Initial consultation at no cost</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl shadow-2xl p-8 text-black">
              <h4 className="text-xl font-black mb-3">Need Urgent Help?</h4>
              <p className="text-sm mb-6 opacity-90">
                For urgent immigration matters, call our emergency hotline
              </p>
              <a 
                href="tel:+15551234567"
                className="block w-full text-center py-4 bg-black hover:bg-gray-900 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Call Emergency Line
              </a>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <div className="relative bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 opacity-5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500 opacity-5 rounded-full blur-3xl"></div>
            
            {/* Header */}
            <div className="relative p-8 md:p-10 border-b border-gray-200 bg-gradient-to-r from-white to-gray-50">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">Visit Our Office</h3>
                  <p className="text-gray-600 font-medium">We're conveniently located in the heart of New York City</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 mt-6 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Office Address</p>
                  <p className="text-gray-700">555 Republic Dr Floor 2, Suite 214, Plano, TX 75074, United States</p>
                </div>
              </div>
            </div>
            
            {/* Map Container with Fade Overlay */}
            <div className="relative h-[500px] md:h-[600px]">
              {/* Top Fade Overlay */}
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-gray-50 to-transparent z-10 pointer-events-none"></div>
              
              {/* Bottom Fade Overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
              
              {/* Side Fade Overlays */}
              <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-white/60 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-white/60 to-transparent z-10 pointer-events-none"></div>
              
              {/* Map */}
              <div className="absolute inset-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.9574486054494!2d-96.70522659999999!3d33.031251499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c197912f0458d%3A0xa73a636f38852ec7!2sAmerican%20Immigration%20Lawyers%20(Khan%20Law%2C%20PLLC)!5e0!3m2!1sen!2s!4v1767750049805!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(0%) contrast(1.05) brightness(0.98)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
              
              {/* Decorative Corner Elements */}
              <div className="absolute bottom-8 left-8 right-8 z-20 pointer-events-none">
                <div className="flex items-center justify-between bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">Easy to Find</p>
                      <p className="text-xs text-gray-600">Near major subway stations & landmarks</p>
                    </div>
                  </div>
                  <a 
                    href="https://maps.app.goo.gl/bGAWjBJtCaQLcQDW8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="pointer-events-auto px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold text-sm rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>  
    <Footer/>
    </>
  )
}