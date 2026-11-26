
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function LandingNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Equipment', href: '#equipment' },
    { label: 'Graduation Gowns', href: '#gowns' },
    { label: 'How It Works', href: '#how-it-works' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`landing-navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#home" className="landing-navbar-brand">
        <img
          src="https://www.igirerwanda.org/_next/image?url=%2Fimages%2Flogo-igire.png&w=256&q=90&dpl=dpl_296bSSneJRAk64gPTxdCWgdmko5G"
          alt="Igire Rwanda"
        />
      </a>

      <button
        className={`landing-menu-toggle ${menuOpen ? 'active' : ''}`}
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`landing-nav-links${menuOpen ? 'active' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <Link
        to="/login"
        className="landing-nav-action"
        onClick={() => setMenuOpen(false)}
      >
        Access Portal
        <span>↗</span>
      </Link>
    </header>
  )
}
