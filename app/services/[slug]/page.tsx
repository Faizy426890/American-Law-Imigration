import Image from "next/image"
import Link from "next/link"
import { servicesData, type ServiceKey } from "@/lib/services-data"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar" 
import Footer from "@/components/footer"
interface ServicePageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata(props: ServicePageProps) {
  const params = await props.params
  const service = servicesData[params.slug as ServiceKey]

  if (!service) {
    return {
      title: "Service Not Found",
    }
  }

  return {
    title: `${service.title} | American Lawyers Immigration`,
    description: service.description,
  }
}

export default async function ServicePage(props: ServicePageProps) {
  const params = await props.params
  const service = servicesData[params.slug as ServiceKey]

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
          <Link href="/services">
            <Button>Back to Services</Button>
          </Link>
        </div>
      </div>
    )
  }

  return ( 
    <> 
          <Navbar />
    
    
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-black pt-24 pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={service.image || "/placeholder.svg"}
            alt={service.title}
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-medium text-yellow-400 mb-3 uppercase tracking-wide">
              {service.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-700 leading-relaxed">
                {service.overview}
              </p>
            </div>

            {/* Key Features */}
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <svg 
                      className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Section */}
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Process</h2>
              <div className="space-y-6">
                {service.process.map((item, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-400 text-black font-semibold">
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-grow pt-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                      {index < service.process.length - 1 && (
                        <div className="w-px h-6 bg-gray-200 ml-5 mt-4"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Service Details Card */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Service Details</h3>
                
                <div className="space-y-5 mb-6">
                  {/* <div className="pb-5 border-b border-gray-200">
                    <p className="text-sm text-gray-600 font-medium mb-1">Processing Timeline</p>
                    <p className="text-lg font-semibold text-gray-900">{service.AAAZZ
                      }</p>
                  </div> */}
                </div>

                <Link href="/contact">
                  <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-4 rounded-lg transition-colors duration-200">
                    Schedule Consultation
                  </button>
                </Link>
              </div>

              {/* Contact Card */}
              <div className="bg-black text-white rounded-lg p-6">
                <h4 className="font-semibold text-lg mb-2">Need Assistance?</h4>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  Our experienced immigration attorneys are here to help you navigate the process
                </p>
                <Link href="/contact">
                  <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2.5 px-4 rounded-lg transition-colors duration-200">
                    Contact Us
                  </button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700">Licensed</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                    <span className="text-sm text-gray-700">Experienced Team</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700">Proven Track Record</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-black rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our immigration Lawyers to discuss your case and explore your options
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                Request Consultation
              </button>
            </Link>
            <Link href="/services">
              <button className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold py-3 px-8 rounded-lg transition-all duration-200">
                View All Services
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>  
    <Footer/>
    </>
  )
}