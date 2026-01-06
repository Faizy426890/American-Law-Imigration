"use client"

import { useState, useEffect } from 'react'

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCard, setActiveCard] = useState(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const testimonials = [
    {
      name: "Tabish Zahid",
      text: "Outstanding service from Rao Zafar. Professional, responsive, and genuinely cared about my case. The team walked me through every step and fought tirelessly to achieve the best outcome.",
      rating: 5
    },
    {
      name: "Muhammad Maroof",
      text: "Mr. Rao Zafar Iqbal's expertise, professionalism, and dedication are truly impressive. His legal knowledge and strategic approach were instrumental in achieving a successful outcome.",
      rating: 5
    },
    {
      name: "Adnan Meer",
      text: "Very professional, honest, and reliable. They guided me through each step and were always available to answer questions. Your success truly matters to them.",
      rating: 5
    },
    {
      name: "Gop Vil",
      text: "Fabulous and personable experience. The legal team took time to listen and suggested multiple options for each situation. A true 5-star client care experience.",
      rating: 5
    },
    {
      name: "Asif Ramzan",
      text: "Best immigration attorney in the USA, located in Dallas, TX. Highly recommended for all U.S. visa needs. Available for in-person, online, and phone consultations.",
      rating: 5
    },
    {
      name: "Syed Baber",
      text: "Thoroughly impressed by the services provided. They are well-informed and deliver exceptional results. I highly recommend this firm without any reservations.",
      rating: 5
    }
  ]

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
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
        }

        .testimonials-section {
          background: linear-gradient(135deg, #ffffff 0%, #fffef8 100%);
          padding: 100px 40px;
          position: relative;
          overflow: hidden;
        }

        .testimonials-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: radial-gradient(circle at 2px 2px, rgba(237, 206, 104, 0.08) 1px, transparent 0);
          background-size: 50px 50px;
          z-index: 0;
        }

        .floating-accent {
          position: absolute;
          width: 200px;
          height: 200px;
          background: linear-gradient(135deg, #f5bc00, #ffd966);
          border-radius: 50%;
          opacity: 0.06;
          animation: float 8s ease-in-out infinite;
        }

        .accent-1 {
          top: 10%;
          left: 5%;
          animation-delay: 0s;
        }

        .accent-2 {
          bottom: 15%;
          right: 8%;
          animation-delay: 3s;
        }

        .testimonials-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .section-header {
          text-align: center;
          margin-bottom: 70px;
          opacity: ${isVisible ? 1 : 0};
          animation: ${isVisible ? 'fadeInUp 0.8s ease-out' : 'none'};
        }

        .section-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #ffffff;
          color: #050505;
          padding: 10px 24px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 20px;
          border: 2px solid #f5bc00;
          box-shadow: 0 4px 15px rgba(237, 206, 104, 0.2);
        }

        .badge-star {
          color: #f5bc00;
          font-size: 16px;
        }

        .section-title {
          font-size: 48px;
          font-weight: 800;
          color: #050505;
          line-height: 1.2;
          margin-bottom: 16px;
          letter-spacing: -1px;
        }

        .gradient-text {
          background: linear-gradient(135deg, #f5bc00 0%, #ffd966 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-description {
          font-size: 18px;
          color: #050505;
          opacity: 0.7;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 30px;
          margin-top: 20px;
        }

        .testimonial-card {
          background: #ffffff;
          border: 2px solid transparent;
          border-radius: 20px;
          padding: 32px;
          position: relative;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 20px rgba(5, 5, 5, 0.06);
          opacity: ${isVisible ? 1 : 0};
          animation: ${isVisible ? 'fadeInUp 0.8s ease-out both' : 'none'};
        }

        .testimonial-card:nth-child(1) { animation-delay: 0.1s; }
        .testimonial-card:nth-child(2) { animation-delay: 0.2s; }
        .testimonial-card:nth-child(3) { animation-delay: 0.3s; }
        .testimonial-card:nth-child(4) { animation-delay: 0.4s; }
        .testimonial-card:nth-child(5) { animation-delay: 0.5s; }
        .testimonial-card:nth-child(6) { animation-delay: 0.6s; }
        .testimonial-card:nth-child(7) { animation-delay: 0.7s; }
        .testimonial-card:nth-child(8) { animation-delay: 0.8s; }
        .testimonial-card:nth-child(9) { animation-delay: 0.9s; }
        .testimonial-card:nth-child(10) { animation-delay: 1s; }
        .testimonial-card:nth-child(11) { animation-delay: 1.1s; }
        .testimonial-card:nth-child(12) { animation-delay: 1.2s; }

        .testimonial-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #f5bc00, #ffd966);
          border-radius: 20px;
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: -1;
        }

        .testimonial-card:hover {
          transform: translateY(-8px);
          border-color: #f5bc00;
          box-shadow: 0 12px 40px rgba(237, 206, 104, 0.25);
        }

        .testimonial-card:hover::before {
          opacity: 0.05;
        }

        .quote-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #f5bc00, #ffd966);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          color: #ffffff;
          margin-bottom: 20px;
          box-shadow: 0 4px 15px rgba(237, 206, 104, 0.3);
        }

        .rating {
          display: flex;
          gap: 4px;
          margin-bottom: 16px;
        }

        .star {
          color: #f5bc00;
          font-size: 18px;
        }

        .testimonial-text {
          font-size: 15px;
          line-height: 1.8;
          color: #050505;
          opacity: 0.85;
          margin-bottom: 24px;
          font-style: italic;
        }

        .client-info {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 20px;
          border-top: 2px solid rgba(245, 188, 0, 0.1);
        }

        .client-name {
          font-weight: 700;
          font-size: 16px;
          color: #050505;
        }

        .verified-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(245, 188, 0, 0.1);
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          color: #050505;
        }

        .check-icon {
          color: #f5bc00;
          font-size: 14px;
        }

        .cta-section {
          text-align: center;
          margin-top: 70px;
          padding: 50px 30px;
          background: linear-gradient(135deg, #f5bc00, #ffd966);
          border-radius: 24px;
          box-shadow: 0 10px 40px rgba(237, 206, 104, 0.3);
        }

        .cta-title {
          font-size: 32px;
          font-weight: 800;
          color: #050505;
          margin-bottom: 16px;
        }

        .cta-text {
          font-size: 16px;
          color: #050505;
          opacity: 0.8;
          margin-bottom: 30px;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-button {
          background: #050505;
          color: #ffffff;
          padding: 18px 40px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 16px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 20px rgba(5, 5, 5, 0.2);
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(5, 5, 5, 0.3);
          background: #1a1a1a;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .testimonials-grid {
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 24px;
          }

          .section-title {
            font-size: 40px;
          }
        }

        @media (max-width: 768px) {
          .testimonials-section {
            padding: 60px 20px;
          }

          .section-header {
            margin-bottom: 50px;
          }

          .section-title {
            font-size: 32px;
          }

          .section-description {
            font-size: 16px;
          }

          .testimonials-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .testimonial-card {
            padding: 24px;
          }

          .cta-section {
            margin-top: 50px;
            padding: 40px 24px;
          }

          .cta-title {
            font-size: 24px;
          }
        }
      `}</style>

      <section className="testimonials-section">
        <div className="floating-accent accent-1"></div>
        <div className="floating-accent accent-2"></div>

        <div className="testimonials-container">
          <div className="section-header">
            <div className="section-badge">
              <span className="badge-star">★</span>
              Client Success Stories
            </div>
            <h2 className="section-title">
              Trusted by <span className="gradient-text">Thousands</span> of Clients
            </h2>
            <p className="section-description">
              Read what our clients have to say about their experience working with our dedicated legal team.
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="testimonial-card"
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="quote-icon">"</div>
                
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>

                <p className="testimonial-text">
                  "{testimonial.text}"
                </p>

                <div className="client-info">
                  <div className="client-name">{testimonial.name}</div>
                  <div className="verified-badge">
                    <span className="check-icon">✓</span>
                    Verified Client
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cta-section">
            <h3 className="cta-title">Ready to Start Your Journey?</h3>
            <p className="cta-text">
              Join thousands of satisfied clients who have successfully navigated their immigration process with our expert guidance.
            </p>
            <button className="cta-button">Schedule Your Free Consultation</button>
          </div>
        </div>
      </section>
    </>
  )
}