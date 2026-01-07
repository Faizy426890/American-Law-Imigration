import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerGrid}>
          <div className={styles.footerColumn}>
            <h3>About Us</h3>
            <ul className={styles.footerLinks}>
              <li><a href="/our-story">Our Story</a></li>
              <li><a href="/attorneys">Our Attorneys</a></li>
              <li><a href="/testimonials">Testimonials</a></li>
              <li><a href="/careers">Careers</a></li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3>Services</h3>
            <ul className={styles.footerLinks}>
              <li><a href="/visas">Work Visas</a></li>
              <li><a href="/green-cards">Green Cards</a></li>
              <li><a href="/citizenship">Citizenship</a></li>
              <li><a href="/business-immigration">Business Immigration</a></li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3>Resources</h3>
            <ul className={styles.footerLinks}>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/guides">Immigration Guides</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/case-studies">Case Studies</a></li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3>Contact</h3>
            <ul className={styles.footerLinks}>
              <li><a href="/consultation">Schedule Consultation</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/locations">Office Locations</a></li>
              <li><a href="tel:+1234567890">+1 (234) 567-890</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>
            © 2026 Immigration Law Firm. All rights reserved. |
            <a href="/privacy-policy"> Privacy Policy</a> |
            <a href="/terms"> Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
