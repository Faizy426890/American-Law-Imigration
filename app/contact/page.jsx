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
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toast, setToast] = useState({ show: false, type: '', message: '' })

  const showToast = (type, message) => {
    setToast({ show: true, type, message })
    setTimeout(() => {
      setToast({ show: false, type: '', message: '' })
    }, 5000)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong")
      }

      showToast('success', 'Message sent successfully! We\'ll get back to you soon.')
      
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      })
    } catch (error) {
      console.error(error)
      showToast('error', 'Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
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
    <main className="min-h-screen bg-white">
      {/* Toast Notification */}
      <div className={`fixed top-8 right-8 z-50 transform transition-all duration-500 ease-out ${
        toast.show ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}>
        <div className={`min-w-80 rounded-2xl shadow-2xl border-2 p-5 flex items-start gap-4 ${
          toast.type === 'success' 
            ? 'bg-white border-green-500' 
            : 'bg-white border-red-500'
        }`}>
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
            toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'
          }`}>
            {toast.type === 'success' ? (
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </div>
          <div className="flex-1">
            <h4 className="font-black text-gray-900 mb-1">
              {toast.type === 'success' ? 'Success!' : 'Error'}
            </h4>
            <p className="text-sm text-gray-600">{toast.message}</p>
          </div>
          <button 
            onClick={() => setToast({ show: false, type: '', message: '' })}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-black pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6">
            <span className="px-5 py-2 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full">
              Get In Touch
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Let&apos;s Start Your <span className="text-yellow-400">Immigration Journey</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Our experienced immigration attorneys are ready to help you achieve your American dream
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Contact Form - 7 columns */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-10 md:p-12 relative">
              {/* Loading Overlay */}
              {isSubmitting && (
                <div className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-3xl z-10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="relative w-24 h-24 mx-auto mb-6">
                      <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
                      <div className="absolute inset-0 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
                      <div className="absolute inset-3 border-4 border-gray-200 rounded-full"></div>
                      <div className="absolute inset-3 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-2">Sending Your Message</h3>
                    <p className="text-gray-600">Please wait while we process your request...</p>
                    <div className="flex items-center justify-center gap-1 mt-4">
                      <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-1 bg-black rounded-full"></div>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900">Send Us a Message</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">First Name</label>
                    <input 
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-black focus:bg-white focus:outline-none transition-all duration-300"
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
                      required
                      className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-black focus:bg-white focus:outline-none transition-all duration-300"
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
                    required
                    className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-black focus:bg-white focus:outline-none transition-all duration-300"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-2">Phone Number</label>
                  <input 
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-black focus:bg-white focus:outline-none transition-all duration-300"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Service Interested In</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-black focus:bg-white focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
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
                    required
                    rows={6}
                    className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-black focus:bg-white focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Tell us about your immigration needs..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 bg-black hover:bg-gray-900 text-white font-black text-lg rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info - 5 columns */}
          <div className="lg:col-span-5 space-y-6">
            {/* Office Info */}
            <div className="bg-black rounded-3xl shadow-2xl p-8 text-white">
              <h3 className="text-2xl font-black mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold mb-1">Office Address</p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      555 Republic Dr Floor 2, Suite 214<br />
                       Plano, TX 75074,<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold mb-1">Phone</p>
                    <p className="text-gray-400 text-sm">+1 (469) 200-6508</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold mb-1">Email</p>
                    <p className="text-gray-400 text-sm">info@khanlegalgroup.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                <div>
  <p className="font-bold mb-1">Office Hours</p>
  <p className="text-gray-400 text-sm leading-relaxed">
    Open 24 Hours
  </p>
</div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8">
              <h4 className="text-xl font-black text-gray-900 mb-6">Why Choose Us</h4>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">Expert Legal Team</p>
                    <p className="text-sm text-gray-600">Experienced attorneys with proven track records</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">Personalized Service</p>
                    <p className="text-sm text-gray-600">Tailored solutions for your unique situation</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">Quick Response Time</p>
                    <p className="text-sm text-gray-600">We respond to inquiries within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
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
         
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
            {/* Header */}
            <div className="relative p-8 md:p-10 border-b border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">Visit Our Office</h3>
                  <p className="text-gray-600 font-medium">We're conveniently located in the heart of Texas</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
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
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"></div>
              
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
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    className="pointer-events-auto px-6 py-3 bg-black hover:bg-gray-900 text-white font-bold text-sm rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Get Directions
                  </a>                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="px-5 py-2 bg-black text-white text-xs font-bold uppercase tracking-widest rounded-full">
              Frequently Asked
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Common <span className="text-yellow-400">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to the most common questions about our immigration services
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              question: "How long does the consultation process take?",
              answer: "Initial consultations typically last 30-60 minutes. We'll review your case, discuss options, and provide a clear roadmap for your immigration journey."
            },
            {
              question: "What documents do I need for the first meeting?",
              answer: "Bring any immigration documents you have (passports, visas, I-20, I-797, etc.), employment records, and a list of questions. Don't worry if you're missing documents - we can help you obtain them."
            },
            {
              question: "How much do your services cost?",
              answer: "Fees vary based on case complexity and service type. We offer transparent pricing with no hidden fees. During your consultation, we'll provide a detailed breakdown of all costs."
            },
            {
              question: "Do you offer payment plans?",
              answer: "Yes, we offer flexible payment plans for most services. We believe financial constraints shouldn't prevent you from accessing quality legal representation."
            },
            {
              question: "How long do immigration processes typically take?",
              answer: "Processing times vary by visa type and government workload. H-1B visas can take 3-6 months, while green card processes may take 1-3 years. We'll provide realistic timelines based on current USCIS processing."
            }
          ].map((faq, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-2xl transition-all duration-300 hover:border-black">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400 transition-colors duration-300">
                    <span className="text-white font-bold text-lg group-hover:text-black">Q{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-gray-900 mb-3 group-hover:text-black transition-colors">
                      {faq.question}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
 

      {/* Footer */}
   <footer className="bg-white border-t border-gray-200 py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="mb-6 md:mb-0">
        <div className="text-2xl font-black text-gray-900 mb-2">
          American Immigration Lawyers
        </div>
        <p className="text-gray-600 text-sm">
          Your trusted partner in immigration law 
        </p>
      </div>
      
      <div className="flex items-center gap-6">
        <a 
          href="https://www.facebook.com/AmericanImmigrationLawyers" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-black transition-colors"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>
       
        <a 
          href="https://www.instagram.com/american.immigration.lawyers/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-black transition-colors"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
      </div>
    </div>
    
    <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600 text-sm">
      <p>© {new Date().getFullYear()} American Immigration Lawyers. All rights reserved.</p>
      <p className="mt-2">
        This website is for informational purposes only. Contacting us does not create an attorney-client relationship.
      </p>
    </div>
  </div>
</footer>
    </main>  
    <Footer/>
    </>
  )
}