"use client"

import { useState, useEffect } from 'react'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: #ffffff;
        }

        .hero-section {
          margin-top: 85px;
          background: #ffffff;
          padding: 120px 40px 100px;
          position: relative;
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: radial-gradient(circle at 2px 2px, rgba(237, 206, 104, 0.1) 1px, transparent 0);
          background-size: 40px 40px;
          opacity: 0.5;
          z-index: 0;
        }

        .floating-shapes {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
          z-index: 0;
        }

        .shape {
          position: absolute;
          opacity: 0.08;
          animation: float 6s ease-in-out infinite;
        }

        .shape-1 {
          top: 10%;
          left: 10%;
          width: 100px;
          height: 100px;
          background: #f5bc00;
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          animation-delay: 0s;
        }

        .shape-2 {
          top: 60%;
          right: 15%;
          width: 150px;
          height: 150px;
          background: #050505;
          border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
          animation-delay: 2s;
        }

        .shape-3 {
          bottom: 20%;
          left: 20%;
          width: 80px;
          height: 80px;
          background: #f5bc00;
          border-radius: 40% 60% 60% 40% / 60% 30% 70% 40%;
          animation-delay: 4s;
        }

        .hero-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .hero-content {
          opacity: ${isVisible ? 1 : 0};
          animation: ${isVisible ? 'fadeInUp 1s ease-out' : 'none'};
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          color: #050505;
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 24px;
          border: 2px solid #f5bc00;
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          background: #f5bc00;
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .hero-content h1 {
          font-size: 56px;
          font-weight: 800;
          color: #050505;
          line-height: 1.1;
          margin-bottom: 24px;
          letter-spacing: -1.5px;
        }

        .gradient-text {
          background: linear-gradient(135deg, #f5bc00 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }

        .hero-description {
          font-size: 18px;
          line-height: 1.7;
          color: #050505;
          opacity: 0.7;
          margin-bottom: 32px;
          font-weight: 400;
        }

        .hero-quote {
          background: #ffffff;
          border: 2px solid #f5bc00;
          padding: 24px 28px;
          border-radius: 16px;
          border-left: 4px solid #f5bc00;
          margin: 32px 0;
          box-shadow: 0 4px 12px rgba(237, 206, 104, 0.15);
          transition: all 0.3s ease;
        }

        .hero-quote:hover {
          box-shadow: 0 8px 20px rgba(237, 206, 104, 0.25);
          transform: translateY(-2px);
        }

        .hero-quote p {
          color: #050505;
          font-size: 15px;
          line-height: 1.7;
          margin-bottom: 12px;
          font-style: italic;
        }

        .hero-quote cite {
          color: #050505;
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .stars {
          color: #f5bc00;
          font-size: 14px;
        }

        .hero-cta {
          margin-top: 40px;
          display: flex;
          gap: 16px;
          align-items: center;
        }

        .cta-button {
          background: #f5bc00;
          color: #050505;
          padding: 16px 32px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 15px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(237, 206, 104, 0.3);
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(237, 206, 104, 0.4);
        }

        .cta-button:active {
          transform: translateY(0);
        }

        .secondary-button {
          background: #ffffff;
          color: #050505;
          padding: 16px 32px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 15px;
          border: 2px solid #050505;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .secondary-button:hover {
          background: #050505;
          color: #ffffff;
        }

        .hero-image {
          position: relative;
          opacity: ${isVisible ? 1 : 0};
          animation: ${isVisible ? 'fadeIn 1.2s ease-out 0.3s both' : 'none'};
        }

        .image-wrapper {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(5, 5, 5, 0.15);
          background: #ffffff;
          border: 3px solid #303030ff;
          transition: all 0.4s ease;
          height: 600px;
        }

        .image-wrapper:hover {
          transform: scale(1.02);
          box-shadow: 0 25px 80px rgba(5, 5, 5, 0.2);
        }

        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .video-badge {
          position: absolute;
          top: 24px;
          left: 24px;
          background: #ffffff;
          backdrop-filter: blur(10px);
          padding: 12px 20px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 13px;
          color: #050505;
          box-shadow: 0 8px 24px rgba(5, 5, 5, 0.15);
          border: 2px solid #f5bc00;
          display: flex;
          align-items: center;
          gap: 8px;
          z-index: 10;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 48px;
        }

        .stat-card {
          text-align: center;
          padding: 20px;
          background: #f5bc00;
          border-radius: 16px;
          border: 2px solid #f5bc00;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(237, 206, 104, 0.25);
          background: #f5bc00;
        }

        .stat-number {
          font-size: 32px;
          font-weight: 800;
          color: #050505;
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 13px;
          color: #050505;
          opacity: 0.7;
          font-weight: 500;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 60px;
            display: flex;
            flex-direction: column-reverse;
          }

          .hero-content h1 {
            font-size: 48px;
          }

          .stats-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .image-wrapper {
            height: 400px;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            margin-top: 70px;
            padding: 80px 20px 60px;
          }

          .hero-content h1 {
            font-size: 36px;
            letter-spacing: -1px;
          }

          .hero-description {
            font-size: 16px;
          }

          .hero-quote {
            padding: 20px;
          }

          .hero-cta {
            flex-direction: column;
            width: 100%;
          }

          .cta-button,
          .secondary-button {
            width: 100%;
            justify-content: center;
            display: flex;
          }

          .stats-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .image-wrapper {
            height: 350px;
          }
        }
      `}</style>

      <section className="hero-section">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>

        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <div className="badge-dot"></div>
              Trusted Immigration Experts
            </div>

            <h1>
              Navigate U.S. Immigration with{' '}
              <span className="gradient-text">Experienced </span> Legal Support
            </h1>

            <p className="hero-description">
              From initial consultation to approval, we provide dedicated advocacy 
              to protect your rights and secure your future in the United States.
            </p>

            <div className="hero-quote">
              <p>
                "From initial consultation to approval, dedicated advocacy to protect 
                your rights and your future."
              </p>
              <cite>
                Viktor Vico
                <span className="stars">★★★★★</span>
              </cite>
            </div>

            <div className="hero-cta">
              <button className="cta-button">Request a Consultation</button>
              <button className="secondary-button">Learn More</button>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">98%</div>
                <div className="stat-label">Success Rate</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">15+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">5000+</div>
                <div className="stat-label">Cases Handled</div>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-wrapper">
             
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              >
                <source src="https://res.cloudinary.com/diml90c1y/video/upload/WEB_HERO_zvel4f.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}