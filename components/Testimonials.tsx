"use client"

import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [visibleCount, setVisibleCount] = useState(3)
  const sliderRef = useRef<HTMLDivElement>(null)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    
    const updateLayout = () => {
      const width = window.innerWidth
      setIsMobile(width < 768)
      
      if (width < 768) {
        setVisibleCount(1)
      } else if (width < 1024) {
        setVisibleCount(2)
      } else {
        setVisibleCount(3)
      }
    }
    
    updateLayout()
    window.addEventListener('resize', updateLayout)
    return () => window.removeEventListener('resize', updateLayout)
  }, [])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    }
    if (isRightSwipe) {
      prevSlide()
    }

    setTouchStart(0)
    setTouchEnd(0)
  }

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

  const maxIndex = Math.max(0, testimonials.length - visibleCount)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
    setIsAutoPlaying(false)
  }

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, maxIndex])

  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section style={styles.testimonialsSection}>
      <div style={{...styles.floatingAccent, ...styles.accent1}}></div>
      <div style={{...styles.floatingAccent, ...styles.accent2}}></div>

      <div style={styles.testimonialsContainer}>
        <div
          style={{
            ...styles.sectionHeader,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s ease-out'
          }}
        >
          <div style={styles.sectionBadge}>
            <span style={styles.badgeStar}>★</span>
            Client Success Stories
          </div>
          <h2 style={styles.sectionTitle}>
           See what our clients say
          </h2>
          <p style={styles.sectionDescription}>
            Read what our clients have to say about their experience working with our dedicated legal team.
          </p>
        </div>

        <div style={styles.sliderWrapper}>
          {!isMobile && (
            <button
              onClick={prevSlide}
              style={styles.navButton}
              aria-label="Previous testimonials"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          <div 
            style={{
              ...styles.sliderContainer,
              ...(isMobile ? { padding: '0 20px' } : {})
            }}
            ref={sliderRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              style={{
                ...styles.sliderTrack,
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
                transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  style={{
                    ...styles.testimonialCard,
                    width: `${100 / visibleCount}%`,
                    ...(isMobile ? styles.testimonialCardMobile : {})
                  }}
                >
                  <div style={styles.quoteIcon}>"</div>

                  <div style={styles.rating}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} style={styles.star}>★</span>
                    ))}
                  </div>

                  <p style={styles.testimonialText}>
                    "{testimonial.text}"
                  </p>

                  <div style={styles.clientInfo}>
                    <div style={styles.clientName}>{testimonial.name}</div>
                    <div style={styles.verifiedBadge}>
                      <span style={styles.checkIcon}>✓</span>
                      Verified Client
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {!isMobile && (
            <button
              onClick={nextSlide}
              style={styles.navButton}
              aria-label="Next testimonials"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>

        <div style={styles.dotsContainer}>
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              style={{
                ...styles.dot,
                ...(currentIndex === index ? styles.dotActive : {})
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

    
      </div>
    </section>
  )
}

const styles: Record<string, React.CSSProperties> = {
  testimonialsSection: {
    background: 'linear-gradient(135deg, #ffffff 0%, #fffef8 100%)',
    padding: '100px 40px',
    position: 'relative',
    overflow: 'hidden',
  },
  floatingAccent: {
    position: 'absolute',
    width: '200px',
    height: '200px',
    background: 'linear-gradient(135deg, #f5bc00, #ffd966)',
    borderRadius: '50%',
    opacity: 0.06,
  },
  accent1: {
    top: '10%',
    left: '5%',
  },
  accent2: {
    bottom: '15%',
    right: '8%',
  },
  testimonialsContainer: {
    maxWidth: '1400px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1,
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '70px',
  },
  sectionBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    background: '#ffffff',
    color: '#050505',
    padding: '10px 24px',
    borderRadius: '50px',
    fontSize: '14px',
    fontWeight: 700,
    marginBottom: '20px',
    border: '2px solid #f5bc00',
    boxShadow: '0 4px 15px rgba(237, 206, 104, 0.2)',
  },
  badgeStar: {
    color: '#000000',
    fontSize: '16px',
  },
  sectionTitle: {
    fontSize: '48px',
    fontWeight: 800,
    color: '#050505',
    lineHeight: 1.2,
    marginBottom: '16px',
    letterSpacing: '-1px',
  },
  gradientText: {
    background: 'linear-gradient(135deg, #f5bc00 0%, #ffd966 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  sectionDescription: {
    fontSize: '18px',
    color: '#050505',
    opacity: 0.7,
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: 1.7,
  },
  sliderWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    marginTop: '20px',
  },
  navButton: {
    background: '#ffffff',
    border: '2px solid #f5bc00',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    color: '#050505',
    flexShrink: 0,
    boxShadow: '0 4px 15px rgba(237, 206, 104, 0.2)',
    zIndex: 10,
  },
  sliderContainer: {
    overflow: 'hidden',
    flex: 1,
    width: '100%',
  },
  sliderTrack: {
    display: 'flex',
  },
  testimonialCard: {
    background: '#ffffff',
    border: '2px solid #f0f0f0',
    borderRadius: '20px',
    padding: '32px',
    boxSizing: 'border-box',
    flexShrink: 0,
    paddingLeft: '15px',
    paddingRight: '15px',
    boxShadow: '0 4px 20px rgba(5, 5, 5, 0.06)',
  },
  testimonialCardMobile: {
    padding: '40px 20px',
    margin: '0 0',
    minHeight: '400px',
    width: '100%',
  },
  quoteIcon: {
    width: '50px',
    height: '50px',
    background: 'linear-gradient(135deg, #000000, #000000)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    color: '#ffffff',
    marginBottom: '20px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
  },
  rating: {
    display: 'flex',
    gap: '4px',
    marginBottom: '16px',
  },
  star: {
    color: '#f5bc00',
    fontSize: '18px',
  },
  testimonialText: {
    fontSize: '15px',
    lineHeight: 1.8,
    color: '#050505',
    opacity: 0.85,
    marginBottom: '24px',
    fontStyle: 'italic',
  },
  clientInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '20px',
    borderTop: '2px solid rgba(245, 188, 0, 0.1)',
  },
  clientName: {
    fontWeight: 700,
    fontSize: '16px',
    color: '#050505',
  },
  verifiedBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    background: 'rgba(245, 188, 0, 0.1)',
    padding: '6px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: 600,
    color: '#050505',
  },
  checkIcon: {
    color: '#f5bc00',
    fontSize: '14px',
  },
  dotsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '40px',
  },
  dot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    border: '2px solid #f5bc00',
    background: 'transparent',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    padding: 0,
  },
  dotActive: {
    background: '#f5bc00',
    width: '32px',
    borderRadius: '6px',
  },
  ctaSection: {
    textAlign: 'center',
    marginTop: '70px',
    padding: '50px 30px',
    background: 'linear-gradient(135deg, #f5bc00, #ffd966)',
    borderRadius: '24px',
    boxShadow: '0 10px 40px rgba(237, 206, 104, 0.3)',
  },
  ctaTitle: {
    fontSize: '32px',
    fontWeight: 800,
    color: '#050505',
    marginBottom: '16px',
  },
  ctaText: {
    fontSize: '16px',
    color: '#050505',
    opacity: 0.8,
    marginBottom: '30px',
    maxWidth: '500px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  ctaButton: {
    background: '#050505',
    color: '#ffffff',
    padding: '18px 40px',
    borderRadius: '12px',
    fontWeight: 700,
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 8px 20px rgba(5, 5, 5, 0.2)',
  },
}