import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerGrid}>
          
          <div className={styles.footerBrand}>
            <div className={styles.logoContainer}>
              <h2 className={styles.logo}>Immigration Law</h2>
              <span className={styles.logoSubtitle}> Legal Counsel</span>
            </div>
            <p className={styles.brandDescription}>
              Providing immigration legal services with compassion and dedication.
            </p>
            <div className={styles.socialLinks}>
              <a 
                href="https://www.facebook.com/AmericanImmigrationLawyers" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Facebook"
              >
                <svg className={styles.socialIcon} viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
            <a
  href="https://www.instagram.com/american.immigration.lawyers/"
  target="_blank"
  rel="noopener noreferrer"
  className={styles.socialLink}
  aria-label="Instagram"
>
 <svg
  className={styles.socialIcon}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" />
  <circle cx="12" cy="12" r="3.5" fill="none" />
  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
</svg>

</a>

            </div>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Services</h3>
            <ul className={styles.footerLinks}>
              <li><a href="/service/work-visas" className={styles.footerLink}>Work Visas</a></li>
              <li><a href="/service/green-card" className={styles.footerLink}>Green Cards</a></li>
              <li><a href="/service/citizenship" className={styles.footerLink}>Citizenship</a></li>
              <li><a href="/service/business-immigration" className={styles.footerLink}>Business Immigration</a></li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Contact</h3>
            <ul className={styles.footerLinks}>
              <li><a href="/contact" className={styles.footerLink}>Schedule Consultation</a></li>
              <li><a href="/contact" className={styles.footerLink}>Contact Us</a></li>
              <li><a href="/locations" className={styles.footerLink}>Office Locations</a></li>
              <li className={styles.contactItem}>
                <svg className={styles.contactIcon} viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
                </svg>
                <a href="tel:+14692006508" className={styles.footerLink}>
                  +1 (469) 200-6508
                </a>
              </li>
              <li className={styles.contactItem}>
                <svg className={styles.contactIcon} viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:info@khanlegalgroup.com" className={styles.footerLink}>info@khanlegalgroup.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © 2026 Immigration Law Firm. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            <a href="/privacy-policy" className={styles.legalLink}>Privacy Policy</a>
            <span className={styles.divider}>|</span>
            <a href="/terms" className={styles.legalLink}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}