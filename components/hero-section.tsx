"use client"

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import styles from './hero-section.module.css'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const router = useRouter()

  useEffect(() => {
    setIsVisible(true)

    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Autoplay prevented:', error)
      })
    }
  }, [])

  useEffect(() => {
    const handleInteraction = () => {
      if (videoRef.current && videoRef.current.paused) {
        videoRef.current.play().catch(error => {
          console.log('Play on interaction failed:', error)
        })
      }
    }

    document.addEventListener('touchstart', handleInteraction, { once: true })
    document.addEventListener('click', handleInteraction, { once: true })

    return () => {
      document.removeEventListener('touchstart', handleInteraction)
      document.removeEventListener('click', handleInteraction)
    }
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
          style={{
            opacity: isVisible ? 1 : 0,
            animation: isVisible ? 'fadeInUp 1s ease-out forwards' : 'none'
          }}
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

         
          <div className={styles.heroCta}>
            <button
              className={styles.ctaButton}
              onClick={() => router.push('/contact')}
            >
              Request a Consultation
            </button>

            <button
              className={styles.secondaryButton}
              onClick={() => router.push('/about')}
            >
              Learn More
            </button>
          </div>

       
        </div>

        <div
          className={styles.heroImage}
          style={{
            opacity: isVisible ? 1 : 0,
            animation: isVisible ? 'fadeIn 1.2s ease-out 0.3s forwards' : 'none'
          }}
        >
          <div className={styles.imageWrapper}>
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            >
              <source
                src="https://res.cloudinary.com/diml90c1y/video/upload/v1768411507/Website_Video_670_x_608_px_l7c0n4.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}
