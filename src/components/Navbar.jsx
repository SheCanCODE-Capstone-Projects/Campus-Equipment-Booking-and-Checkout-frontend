
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Equipment', href: '#equipment' },
    { label: 'Graduation Gowns', href: '#gowns' },
  ]

  return (
    <header className="navbar">
      <a href="#home" className="navbar-brand">
        <img
          src="https://www.igirerwanda.org/_next/image?url=%2Fimages%2Flogo-igire.png&w=256&q=90&dpl=dpl_296bSSneJRAk64gPTxdCWgdmko5G"
          alt="Igire Rwanda"
          className="navbar-logo"
        />
      </a>

      <button
        className="navbar-menu-toggle"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`navbar-links ${menuOpen ? 'active' : ''}`}>
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

      <div className="navbar-actions">
        <a href="#student-hub" className="student-hub">
          <span></span>
          STUDENT HUB
        </a>

        <button
          className="profile-avatar"
          type="button"
          aria-label="Participant profile"
        >
          P
        </button>
      </div>
    </header>
  )
}
