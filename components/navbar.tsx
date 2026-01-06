"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const visaCategories = [
  "H-1B Visa",
  "L-1 Visa",
  "O-1 Visa",
  "E-2 Visa",
  "EB-1 Green Card",
  "EB-2 NIW",
  "EB-3 Green Card",
  "Family-Based Immigration",
  "Adjustment of Status",
  "Consular Processing",
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isVisaCategoriesOpen, setIsVisaCategoriesOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const [isMobileVisaCategoriesOpen, setIsMobileVisaCategoriesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isSidebarOpen])

  return (
    <>
      <style jsx global>{`
        /* Navbar */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
          z-index: 1000;
          transition: all 0.3s ease;
          border-bottom: 1px solid transparent;
        }

        .navbar.scrolled {
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
          border-bottom: 1px solid rgba(226, 232, 240, 0.8);
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 85px;
        }

        .logo {
          font-size: 18px;
          font-weight: 700;
          color: #f5bc00;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 2px;
          letter-spacing: -0.5px;
          line-height: 1.2;
        }

        .logo span {
          color: #64748b;
          font-weight: 400;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 45px;
          list-style: none;
        }

        .nav-links li {
          position: relative;
        }

        .nav-links a {
          color: #475569;
          text-decoration: none;
          font-weight: 500;
          font-size: 15px;
          transition: color 0.3s ease;
          padding: 8px 0;
          display: block;
        }

        .nav-links a:hover {
          color: #f5bc00;
        }

        /* Services Dropdown */
        .services-dropdown {
          position: relative;
        }

        .services-link,
        .visa-categories-main-link {
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          color: #475569;
          text-decoration: none;
          font-weight: 500;
          font-size: 15px;
          padding: 8px 0;
        }

        .services-link:hover,
        .visa-categories-main-link:hover {
          color: #f5bc00;
        }

        .services-link svg,
        .visa-categories-main-link svg {
          transition: transform 0.3s ease;
        }

        .services-dropdown:hover .services-link svg {
          transform: rotate(180deg);
        }

        .services-dropdown:hover .services-link {
          color: #f5bc00;
        }

        /* Visa Categories Dropdown */
        .visa-categories-dropdown {
          position: relative;
        }

        .visa-categories-dropdown:hover .visa-categories-main-link svg {
          transform: rotate(180deg);
        }

        .visa-categories-dropdown:hover .visa-categories-main-link {
          color: #f5bc00;
        }

        .services-menu,
        .visa-categories-main-menu {
          position: absolute;
          top: 100%;
          left: -20px;
          background: white;
          min-width: 280px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.12);
          border-radius: 12px;
          padding: 8px;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          margin-top: 20px;
          border: 1px solid #f1f5f9;
        }

        .services-dropdown:hover .services-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .visa-categories-dropdown:hover .visa-categories-main-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .services-menu a,
        .visa-categories-main-menu a {
          padding: 12px 16px;
          display: block;
          color: #475569;
          font-size: 14px;
          font-weight: 500;
          border-radius: 8px;
          transition: all 0.2s ease;
          text-decoration: none;
          cursor: pointer;
          width: 100%;
          text-align: left;
        }

        .services-menu a:hover,
        .visa-categories-main-menu a:hover {
          background: #f8fafc;
          color: #f5bc00;
          padding-left: 20px;
        }

         .cta-button {
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          color: white;
          padding: 16px 32px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 15px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 25px rgba(12, 179, 234, 0.35);
        }

        /* Mobile Menu Toggle */
        .menu-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 8px;
          background: transparent;
          border: none;
        }

        .menu-toggle span {
          width: 26px;
          height: 3px;
          background: #334155;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .menu-toggle.active span:nth-child(1) {
          transform: rotate(45deg) translate(7px, 7px);
        }

        .menu-toggle.active span:nth-child(2) {
          opacity: 0;
        }

        .menu-toggle.active span:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -7px);
        }

        /* Overlay */
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 999;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .overlay.active {
          opacity: 1;
          visibility: visible;
        }

        /* Mobile Sidebar */
        .mobile-sidebar {
          position: fixed;
          top: 0;
          left: -100%;
          width: 320px;
          height: 100vh;
          background: white;
          box-shadow: 4px 0 30px rgba(0, 0, 0, 0.15);
          z-index: 1001;
          transition: left 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow-y: auto;
        }

        .mobile-sidebar.active {
          left: 0;
        }

        .sidebar-header {
          padding: 30px 25px;
          border-bottom: 1px solid #e2e8f0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .sidebar-close {
          width: 32px;
          height: 32px;
          border-radius: 6px;
          background: #f1f5f9;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .sidebar-close:hover {
          background: #e2e8f0;
        }

        .sidebar-links {
          list-style: none;
          padding: 10px 0;
        }

        .sidebar-links > li {
          border-bottom: 1px solid #f1f5f9;
        }

        .sidebar-links a,
        .sidebar-services-toggle,
        .sidebar-visa-categories-toggle {
          display: block;
          padding: 18px 25px;
          color: #334155;
          text-decoration: none;
          font-weight: 500;
          font-size: 15px;
          transition: all 0.2s ease;
          background: transparent;
          border: none;
          width: 100%;
          text-align: left;
          cursor: pointer;
        }

        .sidebar-links a:hover,
        .sidebar-services-toggle:hover,
        .sidebar-visa-categories-toggle:hover {
          background: #f8fafc;
          color: #f5bc00;
          padding-left: 30px;
        }

        .sidebar-services-toggle,
        .sidebar-visa-categories-toggle {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .sidebar-services-toggle svg,
        .sidebar-visa-categories-toggle svg {
          transition: transform 0.3s ease;
        }

        .sidebar-services-toggle.open svg,
        .sidebar-visa-categories-toggle.open svg {
          transform: rotate(180deg);
        }

        .sidebar-services-menu,
        .sidebar-visa-categories-menu {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
          background: #f8fafc;
        }

        .sidebar-services-menu.open,
        .sidebar-visa-categories-menu.open {
          max-height: 600px;
        }

        .sidebar-services-menu a,
        .sidebar-visa-categories-menu a {
          padding: 14px 25px 14px 45px;
          font-size: 14px;
          color: #64748b;
          display: block;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .sidebar-services-menu a:hover,
        .sidebar-visa-categories-menu a:hover {
          color: #f5bc00;
          padding-left: 50px;
        }

        .sidebar-cta {
          padding: 25px;
        }

        .sidebar-cta button {
          width: 100%;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .menu-toggle {
            display: flex;
          }

          .nav-container {
            padding: 0 20px;
            height: 70px;
          }
        }
      `}</style>

      {/* Overlay */}
      <div className={`overlay ${isSidebarOpen ? "active" : ""}`} onClick={() => setIsSidebarOpen(false)} />

      {/* Navbar */}
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <Link href="/" className="logo">
            American <span>LawyerS</span> <span style={{ color: "#f5bc00" }}>iMIGRATION</span>
          </Link>

          <ul className="nav-links">
            <li className="services-dropdown">
              <div className="services-link">
                Services
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M6 9L1 4h10z" />
                </svg>
              </div>
              <div className="services-menu">
                <Link href="/services/visa-evaluation">Visa Evaluation</Link>
                <Link href="/services/immigration-consultations">Immigration Consultations</Link>
              </div>
            </li>

            <li className="visa-categories-dropdown">
              <div className="visa-categories-main-link">
                Visa Categories
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M6 9L1 4h10z" />
                </svg>
              </div>
              <div className="visa-categories-main-menu">
                {visaCategories.map((visa, index) => (
                  <Link key={index} href={`/services/${visa.toLowerCase().replace(/\s+/g, "-")}`}>
                    {visa}
                  </Link>
                ))}
              </div>
            </li>

            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <button className="cta-button">Request a Consultation</button>
            </li>
          </ul>

          <button
            className={`menu-toggle ${isSidebarOpen ? "active" : ""}`}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`mobile-sidebar ${isSidebarOpen ? "active" : ""}`}>
        <div className="sidebar-header">
          <div className="logo">
            American <span>LawyerS</span> <span style={{ color: "#f5bc00" }}>iMIGRATION</span>
          </div>
          <button className="sidebar-close" onClick={() => setIsSidebarOpen(false)}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
            </svg>
          </button>
        </div>

        <ul className="sidebar-links">
          <li>
            <button
              className={`sidebar-services-toggle ${isMobileServicesOpen ? "open" : ""}`}
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
            >
              Services
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M6 9L1 4h10z" />
              </svg>
            </button>
            <div className={`sidebar-services-menu ${isMobileServicesOpen ? "open" : ""}`}>
              <Link href="/services/visa-evaluation" onClick={() => setIsSidebarOpen(false)}>
                Visa Evaluation
              </Link>
              <Link href="/services/immigration-consultations" onClick={() => setIsSidebarOpen(false)}>
                Immigration Consultations
              </Link>
            </div>
          </li>

          <li>
            <button
              className={`sidebar-visa-categories-toggle ${isMobileVisaCategoriesOpen ? "open" : ""}`}
              onClick={() => setIsMobileVisaCategoriesOpen(!isMobileVisaCategoriesOpen)}
            >
              Visa Categories
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M6 9L1 4h10z" />
              </svg>
            </button>
            <div className={`sidebar-visa-categories-menu ${isMobileVisaCategoriesOpen ? "open" : ""}`}>
              {visaCategories.map((visa, index) => (
                <Link
                  key={index}
                  href={`/services/${visa.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  {visa}
                </Link>
              ))}
            </div>
          </li>

          <li>
            <Link href="/about" onClick={() => setIsSidebarOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => setIsSidebarOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>

        <div className="sidebar-cta">
          <button className="cta-button" onClick={() => setIsSidebarOpen(false)}>
            Request a Consultation
          </button>
        </div>
      </div>
    </>
  )
}
