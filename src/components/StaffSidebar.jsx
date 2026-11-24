
import { useState } from 'react'

export default function StaffSidebar() {
  const [activeLink, setActiveLink] = useState('Inventory Overview')

  const navLinks = [
    {
      label: 'Inventory Overview',
      href: '#inventory-overview',
      icon: (
        <svg viewBox="0 0 24 24">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
      ),
    },
    {
      label: 'Equipment Approvals',
      href: '#equipment-approvals',
      icon: (
        <svg viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="13" rx="2" />
          <path d="M2 21h20M8 17l-1 4m9-4 1 4" />
          <path d="m9 10 2 2 4-4" />
        </svg>
      ),
    },
    {
      label: 'Gown Logistics',
      href: '#gown-logistics',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="m12 3 3 4 4 2-2 12H7L5 9l4-2 3-4Z" />
          <path d="m9 7 3 4 3-4M12 11v10" />
        </svg>
      ),
    },
    {
      label: 'Asset Repository',
      href: '#asset-repository',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M3 7h18v13H3z" />
          <path d="M3 7l2-4h14l2 4M8 12h8" />
        </svg>
      ),
    },
  ]

  return (
    <aside className="staff-sidebar">
      <a href="#inventory-overview" className="staff-sidebar-brand">
        <img
          src="https://www.igirerwanda.org/_next/image?url=%2Fimages%2Flogo-igire.png&w=256&q=90&dpl=dpl_296bSSneJRAk64gPTxdCWgdmko5G"
          alt="Igire Rwanda"
        />
        <div>
          <h2>IRO Portal</h2>
          <span>STAFF OPERATIONS</span>
        </div>
      </a>

      <div className="staff-sidebar-divider"></div>

      <p className="staff-sidebar-label">WORKSPACE</p>

      <nav className="staff-sidebar-nav">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`staff-nav-link ${
              activeLink === link.label ? 'active' : ''
            }`}
            onClick={() => setActiveLink(link.label)}
          >
            <span className="staff-nav-icon">{link.icon}</span>
            <span>{link.label}</span>
          </a>
        ))}
      </nav>

      <div className="staff-sidebar-bottom">
        <div className="staff-sidebar-divider"></div>

        <div className="staff-profile">
          <div className="staff-profile-avatar">S</div>
          <div className="staff-profile-info">
            <strong>Staff Member</strong>
            <span>Operations Team</span>
          </div>
          <span className="staff-profile-status"></span>
        </div>
      </div>
    </aside>
  )
}
