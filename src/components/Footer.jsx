
export default function Footer() {
  const quickLinks = [
    'Our Programs',
    'About Us',
    'Blog',
    'Careers',
    'Hire Our Graduates',
    'Our Graduates',
  ]

  return (
    <footer className="site-footer">
      <div className="footer-top-border"></div>

      <div className="footer-content">
        <div className="footer-column footer-about">
          <div className="footer-brand">
            <img
              src="https://www.igirerwanda.org/_next/image?url=%2Fimages%2Flogo-igire.png&w=256&q=90&dpl=dpl_296bSSneJRAk64gPTxdCWgdmko5G"
              alt="Igire Rwanda logo"
              className="footer-logo"
            />
            <h2>IRO Portal</h2>
          </div>

          <p>
            Igire Rwanda Organization (IRO) empowers youth especially young
            Rwandan women with digital skills through the SheCanCODE bootcamp
            and AWE entrepreneurship programs.
          </p>
        </div>

        <div className="footer-column">
          <h3>QUICK LINKS</h3>

          <nav className="footer-links">
            {quickLinks.map((link) => (
              <a key={link} href="#home">
                {link}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer-column">
          <h3>CONTACT US</h3>

          <div className="footer-contact-item">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            <span>Kacyiru, KG 549 St, 36 Kigali, Rwanda</span>
          </div>

          <div className="footer-contact-item">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m4 7 8 6 8-6" />
            </svg>
            <a href="mailto:info@igirerwanda.org">
              info@igirerwanda.org
            </a>
          </div>

          <div className="footer-contact-item">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-5-2-2 3a14 14 0 0 1-7-7l3-2-3-6Z" />
            </svg>
            <a href="tel:+250788473533">+250 788 473 533</a>
          </div>

          <div className="footer-contact-item">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0-18" />
            </svg>
            <a
              href="https://www.igirerwanda.org"
              target="_blank"
              rel="noreferrer"
            >
              www.igirerwanda.org
            </a>
          </div>
        </div>

        <div className="footer-column footer-social">
          <h3>FOLLOW US</h3>

          <p>Connect with the SheCanCODE & IRO alumni ecosystem.</p>

          <div className="footer-social-icons" aria-label="Social media">
            <span title="Social media">@</span>

            <span title="Website">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0-18" />
              </svg>
            </span>

            <span title="LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M8 10v5m0-8v.1M12 15v-5m0 2a2 2 0 0 1 4 0v3" />
              </svg>
            </span>

            <span title="YouTube">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="3" />
                <path d="m10 9 5 3-5 3V9Z" />
              </svg>
            </span>

            <span title="Community">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="m8 8 8 8m0-8-8 8m4-13v18" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Igire Rwanda Organization (IRO). All rights reserved.</p>

        <div>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
