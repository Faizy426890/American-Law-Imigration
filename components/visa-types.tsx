"use client"

import { useState } from "react"

export default function ImmigrationServicesPage() {
  const [expandedCard, setExpandedCard] = useState(null)

  const visaTypes = [
    {
      title: "Investment-Based Immigration",
      description: "For individuals seeking U.S. permanent residency through investment.",
      image: "https://static.joonsite.com/storage/3428/media/2504011118267619.png",
      services: ["EB-5 Immigrant Investor Visa", "E-2 Treaty Investor Visa", "E-1 Treaty Trader Visa"],
    },
    {
      title: "Work Visas",
      description: "For professionals, skilled workers, and temporary employees.",
      image: "https://www.twelvers.in/uploads/services/visa-consultant121.jpg",
      services: [
        "H-1B – Specialty Occupation Workers",
        "H-2A / H-2B – Agricultural & Non-Agricultural Workers",
        "O-1 – Individuals with Extraordinary Ability",
        "P Visas – Athletes, Artists, and Entertainers",
        "TN – Canadian & Mexican Professionals",
      ],
    },
    {
      title: "Labor Certification (PERM)",
      description: "For U.S. employers sponsoring foreign workers for permanent residency.",
      image: "https://dm-consultant.in/wp-content/uploads/2023/11/Image-18.jpg",
      services: [
        "PERM Labor Certification Process",
        "Prevailing Wage Determination",
        "Recruitment & Department of Labor Compliance",
        "Employer-Sponsored Green Cards (EB-2 / EB-3)",
      ],
    },
    {
      title: "Family-Based Immigration",
      description: "For U.S. citizens and lawful permanent residents petitioning family members.",
      image: "https://media.istockphoto.com/id/452267187/photo/female-travel-agent-with-customers.jpg?s=612x612&w=0&k=20&c=_8pi3YmTsKFic1shn9ZzEcAKBoFIvIyUaCrbP8JlN4M=",
      services: [
        "Immediate Relative Visas",
        "Spouse & Fiancé (K-1) Visas",
        "Parent & Child Sponsorship",
        "Sibling Petitions",
        "Adjustment of Status & Consular Processing",
      ],
    },
    {
      title: "Business Immigration",
      description: "For companies, entrepreneurs, and multinational executives.",
      image: "https://www.the-travel-franchise.com/wp-content/uploads/2023/11/couple-with-travel-agent-at-the-office-2022-04-07-12-58-22-utc_11zon.jpg",
      services: [
        "L-1A / L-1B – Intracompany Transfers",
        "E-2 Business Visas",
        "EB-1C Multinational Manager Green Cards",
        "Start-Up & Entrepreneur Visas",
        "Corporate Compliance & Visa Strategy",
      ],
    },
    {
      title: "Citizenship & Naturalization",
      description: "For lawful permanent residents seeking U.S. citizenship.",
      image: "https://media.istockphoto.com/id/1396984358/photo/at-travel-agency.jpg?s=612x612&w=0&k=20&c=p1Z-dwQiCYI3iNmwaAbyKe03cw98ydXaxBrxXd8ThUU=",
      services: [
        "N-400 Naturalization Applications",
        "Citizenship Interview Preparation",
        "English & Civics Test Guidance",
        "Dual Citizenship Issues",
        "Certificate of Citizenship",
      ],
    },
    {
      title: "Green Card Services",
      description: "For individuals seeking permanent residency in the United States.",
      image: "https://img.freepik.com/free-photo/medium-shot-woman-working-as-travel-agent_23-2150455603.jpg?semt=ais_hybrid&w=740&q=80",
      services: [
        "Employment-Based Green Cards",
        "Family-Based Green Cards",
        "Adjustment of Status (I-485)",
        "Consular Processing",
        "Green Card Renewals & Replacements",
        "Removal of Conditions (I-751)",
      ],
    },
  ]

  const toggleExpand = (index : any) => {
    setExpandedCard(expandedCard === index ? null : index)
  }

  return (
    <>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        }

        .page-wrapper {
          min-height: 100vh;
          background: #ffffff;
        }

        /* Hero Section */
        .hero-section {
          background: #000000;
          padding: 100px 40px 80px;
          text-align: center;
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
          background: radial-gradient(circle at 30% 50%, rgba(245, 188, 0, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .hero-content {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .hero-badge {
          display: inline-block;
          background: rgba(245, 188, 0, 0.1);
          color: #f5bc00;
          padding: 8px 20px;
          border-radius: 30px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.5px;
          margin-bottom: 24px;
          border: 1px solid rgba(245, 188, 0, 0.3);
        }

        .hero-title {
          font-size: 56px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 20px;
          letter-spacing: -1px;
        }

        .hero-description {
          font-size: 19px;
          color: #e5e5e5;
          max-width: 700px;
          margin: 0 auto 40px;
          line-height: 1.6;
        }

        .hero-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .hero-button-primary {
          background: #f5bc00;
          color: #000000;
          padding: 16px 36px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 16px;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .hero-button-primary:hover {
          background: #d4a500;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(245, 188, 0, 0.3);
        }

        .hero-button-secondary {
          background: transparent;
          color: #ffffff;
          padding: 16px 36px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 16px;
          border: 1.5px solid rgba(255, 255, 255, 0.3);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .hero-button-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: #f5bc00;
          color: #f5bc00;
        }

        /* Stats Section */
        .stats-section {
          background: #ffffff;
          padding: 60px 40px;
          border-bottom: 1px solid #e5e5e5;
        }

        .stats-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 44px;
          font-weight: 700;
          color: #f5bc00;
          margin-bottom: 8px;
          line-height: 1;
        }

        .stat-label {
          font-size: 15px;
          color: #666666;
          font-weight: 500;
        }

        /* Services Section */
        .visa-types-section {
          background: #ffffff;
          padding: 100px 40px;
          position: relative;
          overflow: hidden;
        }

        .visa-types-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 400px;
          background: linear-gradient(180deg, #fafafa 0%, #ffffff 100%);
          pointer-events: none;
        }

        .visa-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .section-header {
          text-align: center;
          margin-bottom: 70px;
        }

        .section-subtitle {
          color: #f5bc00;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 12px;
        }

        .section-title {
          font-size: 44px;
          font-weight: 700;
          color: #000000;
          line-height: 1.2;
          margin-bottom: 16px;
          letter-spacing: -0.5px;
        }

        .section-description {
          font-size: 17px;
          color: #666666;
          max-width: 650px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .visa-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 28px;
        }

        .visa-card {
          background: #ffffff;
          border: 1px solid #e5e5e5;
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.04);
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .visa-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #f5bc00 0%, #d4a500 100%);
          z-index: 2;
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }

        .visa-card:hover::before {
          transform: scaleX(1);
        }

        .visa-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12), 0 8px 16px rgba(0, 0, 0, 0.08);
          border-color: rgba(245, 188, 0, 0.3);
        }

        .visa-image-container {
          position: relative;
          width: 100%;
          height: 240px;
          overflow: hidden;
          background: linear-gradient(135deg, #f5f5f5 0%, #fafafa 100%);
        }

        .visa-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          filter: brightness(0.95) contrast(1.05);
        }

        .visa-card:hover .visa-image {
          transform: scale(1.1);
          filter: brightness(1) contrast(1.1);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .visa-card:hover .image-overlay {
          opacity: 1;
        }

        .visa-content {
          flex: 1;
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
        }

        .visa-header-content {
          flex: 1;
          margin-bottom: 16px;
        }

        .visa-title {
          font-size: 20px;
          font-weight: 600;
          color: #000000;
          margin-bottom: 10px;
          line-height: 1.3;
        }

        .visa-description {
          font-size: 14px;
          color: #666666;
          line-height: 1.5;
        }

        .services-list {
          list-style: none;
          margin: 20px 0 0 0;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .service-item {
          padding: 11px 0;
          border-bottom: 1px solid #f5f5f5;
          font-size: 14px;
          color: #666666;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: color 0.2s ease;
        }

        .service-item:last-child {
          border-bottom: none;
        }

        .service-item::before {
          content: '✓';
          color: #f5bc00;
          font-weight: 700;
          font-size: 14px;
          flex-shrink: 0;
        }

        .service-item:hover {
          color: #000000;
        }

        .expand-button {
          display: none;
        }

        .arrow {
          display: none;
        }

        .visa-card.expanded .arrow {
          display: none;
        }

        /* CTA Section */
        .cta-banner {
          margin-top: 80px;
          background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
          border-radius: 24px;
          padding: 60px 50px;
          text-align: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .cta-banner::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 50%, rgba(245, 188, 0, 0.15) 0%, transparent 60%);
          pointer-events: none;
        }

        .cta-banner::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(245, 188, 0, 0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        .cta-content {
          position: relative;
          z-index: 1;
        }

        .cta-title {
          font-size: 32px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 14px;
          letter-spacing: -0.5px;
        }

        .cta-text {
          font-size: 16px;
          color: #e5e5e5;
          margin-bottom: 32px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        .cta-button {
          background: #f5bc00;
          color: #000000;
          padding: 14px 40px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 15px;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          display: inline-block;
        }

        .cta-button:hover {
          background: #d4a500;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(245, 188, 0, 0.3);
        }

        /* Footer */
        .footer {
          background: #000000;
          color: #e5e5e5;
          padding: 60px 40px 30px;
        }

        .footer-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 50px;
          margin-bottom: 50px;
        }

        .footer-column h3 {
          color: #f5bc00;
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-links a {
          color: #e5e5e5;
          text-decoration: none;
          font-size: 15px;
          transition: color 0.2s ease;
        }

        .footer-links a:hover {
          color: #f5bc00;
        }

        .footer-bottom {
          border-top: 1px solid #333333;
          padding-top: 30px;
          text-align: center;
          font-size: 14px;
          color: #999999;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero-title {
            font-size: 48px;
          }

          .visa-grid {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 24px;
          }

          .section-title {
            font-size: 40px;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 80px 20px 60px;
          }

          .hero-title {
            font-size: 36px;
          }

          .hero-description {
            font-size: 17px;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: stretch;
          }

          .hero-button-primary,
          .hero-button-secondary {
            width: 100%;
          }

          .stats-container {
            gap: 30px;
          }

          .stat-number {
            font-size: 36px;
          }

          .visa-types-section {
            padding: 80px 20px;
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

          .visa-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .visa-content {
            padding: 24px 20px;
          }

          .visa-image-container {
            height: 200px;
          }

          .cta-banner {
            padding: 40px 24px;
            margin-top: 60px;
          }

          .cta-title {
            font-size: 28px;
          }

          .cta-text {
            font-size: 15px;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>

      <div className="page-wrapper">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-badge">Trusted Immigration Attorneys</div>
            <h1 className="hero-title">Your Journey to the U.S. Starts Here</h1>
            <p className="hero-description">
              Expert legal guidance for visas, green cards, citizenship, and all immigration matters. We handle the
              complexity so you can focus on your future.
            </p>
            <div className="hero-buttons">
              <button className="hero-button-primary">Get Started Today</button>
              <button className="hero-button-secondary">Learn More</button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years of Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5,000+</div>
              <div className="stat-label">Cases Successfully Handled</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Success Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Countries Represented</div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="visa-types-section">
          <div className="visa-container">
            <div className="section-header">
              <div className="section-subtitle">Our Services</div>
              <h2 className="section-title">Immigration Services We Offer</h2>
              <p className="section-description">
                Comprehensive legal solutions for all your U.S. immigration needs, from investment visas to citizenship.
              </p>
            </div>

            <div className="visa-grid">
              {visaTypes.map((visa, index) => (
                <div key={index} className={`visa-card ${expandedCard === index ? "expanded" : ""}`}>
                  <div className="visa-image-container">
                    <img src={visa.image || "/placeholder.svg"} alt={visa.title} className="visa-image" />
                    <div className="image-overlay" />
                  </div>

                  <div className="visa-content">
                    <div className="visa-header-content">
                      <h3 className="visa-title">{visa.title}</h3>
                      <p className="visa-description">{visa.description}</p>
                    </div>

                    {visa.services.length > 0 && (
                      <ul className="services-list">
                        {visa.services.map((service, idx) => (
                          <li key={idx} className="service-item">
                            {service}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="cta-banner">
              <div className="cta-content">
                <h2 className="cta-title">Ready to Start Your Immigration Journey?</h2>
                <p className="cta-text">
                  Our expert team is ready to guide you through every step of the process. Schedule a consultation today
                  and let us help you navigate your path to success.
                </p>
                <button className="cta-button">Schedule Consultation</button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-grid">
              <div className="footer-column">
                <h3>About Us</h3>
                <ul className="footer-links">
                  <li><a href="#our-story">Our Story</a></li>
                  <li><a href="#attorneys">Our Attorneys</a></li>
                  <li><a href="#testimonials">Testimonials</a></li>
                  <li><a href="#careers">Careers</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h3>Services</h3>
                <ul className="footer-links">
                  <li><a href="#visas">Work Visas</a></li>
                  <li><a href="#green-cards">Green Cards</a></li>
                  <li><a href="#citizenship">Citizenship</a></li>
                  <li><a href="#business">Business Immigration</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h3>Resources</h3>
                <ul className="footer-links">
                  <li><a href="#blog">Blog</a></li>
                  <li><a href="#guides">Immigration Guides</a></li>
                  <li><a href="#faq">FAQ</a></li>
                  <li><a href="#case-studies">Case Studies</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h3>Contact</h3>
                <ul className="footer-links">
                  <li><a href="#consultation">Schedule Consultation</a></li>
                  <li><a href="#contact">Contact Us</a></li>
                  <li><a href="#locations">Office Locations</a></li>
                  <li><a href="tel:+1234567890">+1 (234) 567-890</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2026 Immigration Law Firm. All rights reserved. | Privacy Policy | Terms of Service</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}