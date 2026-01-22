"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
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
  const [isVisaCategoriesOpen, setIsVisaCategoriesOpen] = useState(false)
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
            <Image 
              src="https://res.cloudinary.com/diml90c1y/image/upload/v1767834106/My_Post_euv4n2.jpg"
              alt="American Lawyers Immigration"
              width={180}
              height={50}
              className={styles.logoImage}
              priority
            />
          </Link>

          <ul className={styles.navLinks}>
            <li className={styles.visaCategoriesDropdown}>
              <div 
                className={styles.visaCategoriesMainLink}
                onMouseEnter={() => setIsVisaCategoriesOpen(true)}
                onMouseLeave={() => setIsVisaCategoriesOpen(false)}
              >
                Services
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M6 9L1 4h10z" />
                </svg>
              </div>
              <div 
                className={`${styles.visaCategoriesMainMenu} ${isVisaCategoriesOpen ? styles.open : ""}`}
                onMouseEnter={() => setIsVisaCategoriesOpen(true)}
                onMouseLeave={() => setIsVisaCategoriesOpen(false)}
              >
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
              <Link href="/contact">
                <button className={styles.ctaButton}>Request a Consultation</button> 
              </Link>
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
            <Image 
              src="https://res.cloudinary.com/diml90c1y/image/upload/v1767834106/My_Post_euv4n2.jpg"
              alt="American Lawyers Immigration"
              width={150}
              height={50}
              className={styles.logoImage}
            />
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