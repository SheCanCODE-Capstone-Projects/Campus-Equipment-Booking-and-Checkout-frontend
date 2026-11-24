
export default function EquipmentAvailability() {
  const totalLaptops = 48

  const equipmentStatuses = [
    {
      label: 'Available',
      count: 22,
      description: 'Ready for allocation',
      style: 'available',
    },
    {
      label: 'Reserved',
      count: 8,
      description: 'Approved bookings',
      style: 'reserved',
    },
    {
      label: 'Checked Out',
      count: 14,
      description: 'With participants',
      style: 'checked-out',
    },
    {
      label: 'Cleaning Hold',
      count: 4,
      description: 'Temporarily unavailable',
      style: 'cleaning',
    },
  ]

  return (
    <section className="staff-availability-section">
      <div className="staff-section-heading">
        <div>
          <p className="staff-eyebrow">EQUIPMENT STATUS</p>
          <h2>Equipment Availability</h2>
          <span>
            Track how your laptop inventory is currently distributed.
          </span>
        </div>

        <span className="staff-overview-date">
          {totalLaptops} TOTAL UNITS
        </span>
      </div>

      <div className="staff-availability-grid">
        {equipmentStatuses.map((status) => (
          <article
            className={`staff-availability-card ${status.style}`}
            key={status.label}
          >
            <div className="staff-availability-card-top">
              <span>{status.label}</span>
              <strong>{status.count}</strong>
            </div>

            <p>{status.description}</p>

            <div className="staff-availability-bar">
              <span
                className="staff-availability-fill"
                style={{
                  width: `${(status.count / totalLaptops) * 100}%`,
                }}
              ></span>
            </div>

            <small>
              {Math.round((status.count / totalLaptops) * 100)}% of
              inventory
            </small>
          </article>
        ))}
      </div>
    </section>
  )
}
