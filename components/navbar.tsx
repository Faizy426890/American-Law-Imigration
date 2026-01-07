"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import styles from "./navbar.module.css"

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
      {/* Overlay */}
      <div 
        className={`${styles.overlay} ${isSidebarOpen ? styles.active : ""}`} 
        onClick={() => setIsSidebarOpen(false)} 
      />

      {/* Navbar */}
      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
        <div className={styles.navContainer}>
          <Link href="/" className={styles.logo}>
            American <span>LawyerS</span> <span style={{ color: "#f5bc00" }}>iMIGRATION</span>
          </Link>

          <ul className={styles.navLinks}>
            <li className={styles.servicesDropdown}>
              <div className={styles.servicesLink}>
                Services
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M6 9L1 4h10z" />
                </svg>
              </div>
              <div className={styles.servicesMenu}>
                <Link href="/services/visa-evaluation">Visa Evaluation</Link>
                <Link href="/services/immigration-consultations">Immigration Consultations</Link>
              </div>
            </li>

            <li className={styles.visaCategoriesDropdown}>
              <div className={styles.visaCategoriesMainLink}>
                Visa Categories
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M6 9L1 4h10z" />
                </svg>
              </div>
              <div className={styles.visaCategoriesMainMenu}>
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
              <button className={styles.ctaButton}>Request a Consultation</button>
            </li>
          </ul>

          <button
            className={`${styles.menuToggle} ${isSidebarOpen ? styles.active : ""}`}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`${styles.mobileSidebar} ${isSidebarOpen ? styles.active : ""}`}>
        <div className={styles.sidebarHeader}>
          <div className={styles.logo}>
            American <span>LawyerS</span> <span style={{ color: "#f5bc00" }}>iMIGRATION</span>
          </div>
          <button className={styles.sidebarClose} onClick={() => setIsSidebarOpen(false)}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
            </svg>
          </button>
        </div>

        <ul className={styles.sidebarLinks}>
          <li>
            <button
              className={`${styles.sidebarServicesToggle} ${isMobileServicesOpen ? styles.open : ""}`}
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
            >
              Services
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M6 9L1 4h10z" />
              </svg>
            </button>
            <div className={`${styles.sidebarServicesMenu} ${isMobileServicesOpen ? styles.open : ""}`}>
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
              className={`${styles.sidebarVisaCategoriesToggle} ${isMobileVisaCategoriesOpen ? styles.open : ""}`}
              onClick={() => setIsMobileVisaCategoriesOpen(!isMobileVisaCategoriesOpen)}
            >
              Visa Categories
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M6 9L1 4h10z" />
              </svg>
            </button>
            <div className={`${styles.sidebarVisaCategoriesMenu} ${isMobileVisaCategoriesOpen ? styles.open : ""}`}>
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

        <div className={styles.sidebarCta}>
          <button className={styles.ctaButton} onClick={() => setIsSidebarOpen(false)}>
            Request a Consultation
          </button>
        </div>
      </div>
    </>
  )
}