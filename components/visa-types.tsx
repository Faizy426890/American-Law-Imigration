"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import styles from './immigration-services.module.css'

export default function ImmigrationServicesPage() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)
  const router = useRouter()

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
      image: "https://img.freepik.com/free-photo/medium-shot-woman-working-as-travel-agent_23-2150455603.jpg",
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

  const toggleExpand = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index)
  }

  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>Trusted Immigration Attorneys</div>
          <h1 className={styles.heroTitle}>Your Journey to the U.S. Starts Here</h1>
          <p className={styles.heroDescription}>
            Expert legal guidance for visas, green cards, citizenship, and all immigration matters.
          </p>
          <div className={styles.heroButtons}>
            <button
              className={styles.heroButtonPrimary}
              onClick={() => router.push('/contact')}
            >
              Get Started Today
            </button>
            <button
              className={styles.heroButtonSecondary}
              onClick={() => router.push('/about')}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.visaTypesSection}>
        <div className={styles.visaContainer}>
          <div className={styles.visaGrid}>
            {visaTypes.map((visa, index) => (
              <div
                key={index}
                className={`${styles.visaCard} ${expandedCard === index ? styles.expanded : ""}`}
                onClick={() => toggleExpand(index)}
              >
                <div className={styles.visaImageContainer}>
                  <img src={visa.image} alt={visa.title} className={styles.visaImage} />
                  <div className={styles.imageOverlay} />
                </div>

                <div className={styles.visaContent}>
                  <h3 className={styles.visaTitle}>{visa.title}</h3>
                  <p className={styles.visaDescription}>{visa.description}</p>

                  <ul className={styles.servicesList}>
                    {visa.services.map((service, idx) => (
                      <li key={idx} className={styles.serviceItem}>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.ctaBanner}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Ready to Start Your Immigration Journey?</h2>
              <p className={styles.ctaText}>
                Schedule a consultation today and let us guide you every step of the way.
              </p>
              <button
                className={styles.ctaButton}
                onClick={() => router.push('/contact')}
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
