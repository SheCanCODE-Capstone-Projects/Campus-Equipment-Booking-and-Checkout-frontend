
export default function InventoryOverview() {
  const overviewCards = [
    {
      title: 'Total Laptops',
      value: '48',
      description: 'Registered equipment',
      icon: (
        <svg viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="13" rx="2" />
          <path d="M2 21h20M8 17l-1 4m9-4 1 4" />
        </svg>
      ),
      style: 'green',
    },
    {
      title: 'Pending Requests',
      value: '08',
      description: 'Awaiting review',
      icon: (
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      ),
      style: 'gold',
    },
    {
      title: 'Graduation Gowns',
      value: '120',
      description: 'Total gown inventory',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="m12 3 3 4 4 2-2 12H7L5 9l4-2 3-4Z" />
          <path d="m9 7 3 4 3-4M12 11v10" />
        </svg>
      ),
      style: 'green',
    },
    {
      title: 'Overdue Returns',
      value: '05',
      description: 'Require attention',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 3 2.5 20h19L12 3Z" />
          <path d="M12 9v5m0 3h.01" />
        </svg>
      ),
      style: 'gold',
    },
  ]

  return (
    <section className="staff-overview-section" id="inventory-overview">
      <div className="staff-section-heading">
        <div>
          <p className="staff-eyebrow">AT A GLANCE</p>
          <h2>Inventory Overview</h2>
          <span>Monitor your equipment and resource activity.</span>
        </div>

        <span className="staff-overview-date">SYSTEM OVERVIEW</span>
      </div>

      <div className="staff-overview-grid">
        {overviewCards.map((card) => (
          <article
            className={`staff-stat-card ${card.style}`}
            key={card.title}
          >
            <div className="staff-stat-top">
              <span className="staff-stat-icon">{card.icon}</span>
              <span className="staff-stat-indicator"></span>
            </div>

            <h3>{card.title}</h3>
            <strong>{card.value}</strong>
            <p>{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
