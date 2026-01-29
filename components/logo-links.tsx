import Image from 'next/image';
import Link from 'next/link';

export default function LogoLinks() {
  return (
    <div className="max-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Professional Legal Services
          </h1>
          <p className="text-lg text-gray-600">
            Connect with verified legal profiles
          </p>
        </div>

        {/* Logos Container */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* AILA Logo Card */}
          <Link 
            href="https://www.aila.org/member-directory/view/91428"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 flex flex-col items-center justify-center h-64 border-2 border-transparent hover:border-blue-400 transform hover:-translate-y-2">
              <div className="relative w-full h-32 mb-4">
                <Image
                  src="https://res.cloudinary.com/diml90c1y/image/upload/v1769642803/Logo-3_wzdfw6.avif"
                  alt="AILA Member Directory"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="text-center">
                <p className="text-gray-700 font-semibold mb-2">AILA Member Directory</p>
                <span className="text-blue-600 text-sm flex items-center justify-center gap-2 group-hover:gap-3 transition-all">
                  View Profile
                  <svg 
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>

          {/* Justia Logo Card */}
          <Link 
            href="https://lawyers.justia.com/lawyer/aman-u-khan-1662886"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 flex flex-col items-center justify-center h-64 border-2 border-transparent hover:border-blue-400 transform hover:-translate-y-2">
              <div className="relative w-full h-32 mb-4">
                <Image
                  src="https://res.cloudinary.com/diml90c1y/image/upload/v1769642794/Logo-2_dl8wal.avif"
                  alt="Justia Lawyer Profile"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="text-center">
                <p className="text-gray-700 font-semibold mb-2">Justia Lawyer Profile</p>
                <span className="text-blue-600 text-sm flex items-center justify-center gap-2 group-hover:gap-3 transition-all">
                  View Profile
                  <svg 
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>

          {/* Avvo Iframe Card */}
          <Link 
            href="https://www.avvo.com/attorneys/75074-tx-aman-khan-5006623.html"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 flex flex-col items-center justify-center h-64 border-2 border-transparent hover:border-blue-400 transform hover:-translate-y-2 overflow-hidden">
              <div className="w-42 h-32 mb-4 flex items-center justify-center">
                <iframe 
                  className="w-full h-full border-0 pointer-events-none"
                  title="Avvo Profile Preview"
                  src="https://www-khanlegalgroup-com.filesusr.com/html/102054_5aa97dd834861dbab9be7603d5338649.html"
                  loading="lazy"
                />
              </div>
              <div className="text-center">
                <p className="text-gray-700 font-semibold mb-2">Avvo Lawyer Profile</p>
                <span className="text-blue-600 text-sm flex items-center justify-center gap-2 group-hover:gap-3 transition-all">
                  View Profile
                  <svg 
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 text-gray-500 text-sm">
          <p>Click on any logo to visit the respective profile page</p>
        </div>
      </div>
    </div>
  );
}