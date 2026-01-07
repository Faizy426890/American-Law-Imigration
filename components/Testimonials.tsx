"use client"

import { useState, useEffect } from 'react'
import styles from './testimonials-section.module.css'

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCard, setActiveCard] = useState<number | null>(null)
  
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
    <section className={styles.testimonialsSection}>
      <div className={`${styles.floatingAccent} ${styles.accent1}`}></div>
      <div className={`${styles.floatingAccent} ${styles.accent2}`}></div>

      <div className={styles.testimonialsContainer}>
        <div 
          className={styles.sectionHeader}
          style={{ opacity: isVisible ? 1 : 0, animation: isVisible ? 'fadeInUp 0.8s ease-out' : 'none' }}
        >
          <div className={styles.sectionBadge}>
            <span className={styles.badgeStar}>★</span>
            Client Success Stories
          </div>
          <h2 className={styles.sectionTitle}>
            Trusted by <span className={styles.gradientText}>Thousands</span> of Clients
          </h2>
          <p className={styles.sectionDescription}>
            Read what our clients have to say about their experience working with our dedicated legal team.
          </p>
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={styles.testimonialCard}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className={styles.quoteIcon}>"</div>
              
              <div className={styles.rating}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className={styles.star}>★</span>
                ))}
              </div>

              <p className={styles.testimonialText}>
                "{testimonial.text}"
              </p>

              <div className={styles.clientInfo}>
                <div className={styles.clientName}>{testimonial.name}</div>
                <div className={styles.verifiedBadge}>
                  <span className={styles.checkIcon}>✓</span>
                  Verified Client
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaSection}>
          <h3 className={styles.ctaTitle}>Ready to Start Your Journey?</h3>
          <p className={styles.ctaText}>
            Join thousands of satisfied clients who have successfully navigated their immigration process with our expert guidance.
          </p>
          <button className={styles.ctaButton}>Schedule Your Free Consultation</button>
        </div>
      </div>
    </section>
  )
}