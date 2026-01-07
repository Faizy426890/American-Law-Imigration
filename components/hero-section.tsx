"use client"

import { useState, useEffect } from 'react'
import styles from './hero-section.module.css'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className={styles.heroSection}>
      <div className={styles.floatingShapes}>
        <div className={`${styles.shape} ${styles.shape1}`}></div>
        <div className={`${styles.shape} ${styles.shape2}`}></div>
        <div className={`${styles.shape} ${styles.shape3}`}></div>
      </div>

      <div className={styles.heroContainer}>
        <div 
          className={styles.heroContent} 
          style={{ opacity: isVisible ? 1 : 0, animation: isVisible ? 'fadeInUp 1s ease-out' : 'none' }}
        >
          <div className={styles.heroBadge}>
            <div className={styles.badgeDot}></div>
            Trusted Immigration Experts
          </div>

          <h1>
            Navigate U.S. Immigration with{' '}
            <span className={styles.gradientText}>Experienced </span> Legal Support
          </h1>

          <p className={styles.heroDescription}>
            From initial consultation to approval, we provide dedicated advocacy 
            to protect your rights and secure your future in the United States.
          </p>

          <div className={styles.heroQuote}>
            <p>
              "From initial consultation to approval, dedicated advocacy to protect 
              your rights and your future."
            </p>
            <cite>
              Viktor Vico
              <span className={styles.stars}>★★★★★</span>
            </cite>
          </div>

          <div className={styles.heroCta}>
            <button className={styles.ctaButton}>Request a Consultation</button>
            <button className={styles.secondaryButton}>Learn More</button>
          </div>

          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>98%</div>
              <div className={styles.statLabel}>Success Rate</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>15+</div>
              <div className={styles.statLabel}>Years Experience</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>5000+</div>
              <div className={styles.statLabel}>Cases Handled</div>
            </div>
          </div>
        </div>

        <div 
          className={styles.heroImage} 
          style={{ opacity: isVisible ? 1 : 0, animation: isVisible ? 'fadeIn 1.2s ease-out 0.3s both' : 'none' }}
        >
          <div className={styles.imageWrapper}>
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            >
              <source src="https://res.cloudinary.com/diml90c1y/video/upload/v1767732989/Website_Video_1_vs7jjx.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}