const overviewCards = [
  {
    title: 'Total Laptops',
    value: '48',
    description: 'Registered equipment',
    style: 'green',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="5" width="16" height="11" rx="1.5" />
        <path d="M2.5 19h19M8 16l-.8 3m8.8-3 .8 3" />
      </svg>
    ),
  },
  {
    title: 'Pending Requests',
    value: '08',
    description: 'Awaiting review',
    style: 'gold',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    title: 'Graduation Gowns',
    value: '120',
    description: 'Total gown inventory',
    style: 'green',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m9 4 3 2 3-2 4 3-3 5 2 8H6l2-8-3-5 4-3Z" />
        <path d="m9 4 3 8 3-8M8 12h8" />
      </svg>
    ),
  },
  {
    title: 'Overdue Returns',
    value: '05',
    description: 'Require attention',
    style: 'gold',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3 22 20H2L12 3Z" />
        <path d="M12 9v5m0 3h.01" />
      </svg>
    ),
  },
]

export default function InventoryOverview() {
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
              <div className="staff-stat-icon">
                {card.icon}
              </div>

              <div className="staff-stat-indicator"></div>
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