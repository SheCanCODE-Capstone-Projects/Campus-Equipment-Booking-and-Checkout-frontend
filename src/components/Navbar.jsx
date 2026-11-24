
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Equipment', href: '#equipment' },
    { label: 'Graduation Gowns', href: '#gowns' },
    { label: 'Student Hub', href: '#student-hub' },
  ]

  return (
    <header className="navbar">
      <a href="#home" className="navbar-brand">
        <img
          src="https://www.igirerwanda.org/_next/image?url=%2Fimages%2Flogo-igire.png&w=256&q=90&dpl=dpl_296bSSneJRAk64gPTxdCWgdmko5G"
          alt="Igire Rwanda logo"
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
        <button className="switch-role-button" type="button">
          Switch Role
        </button>

        <div className="navbar-profile">
          <div className="profile-avatar">P</div>
          <div className="profile-details">
            <span className="profile-name">Participant</span>
            <span className="profile-role">Student Account</span>
          </div>
        </div>
      </div>
    </header>
  )
}
