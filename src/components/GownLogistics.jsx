import { useState } from 'react'

const initialGowns = [
  {
    id: 1,
    participant: 'Aline Mukamana',
    gownNumber: 'GWN-001',
    size: 'Medium',
    pickupDate: '24 Nov 2026',
    status: 'Assigned',
  },
  {
    id: 2,
    participant: 'Eric Niyonzima',
    gownNumber: 'GWN-002',
    size: 'Large',
    pickupDate: '24 Nov 2026',
    status: 'Collected',
  },
  {
    id: 3,
    participant: 'Diane Uwase',
    gownNumber: 'GWN-003',
    size: 'Small',
    pickupDate: '25 Nov 2026',
    status: 'Returned',
  },
  {
    id: 4,
    participant: 'Jean Claude',
    gownNumber: 'GWN-004',
    size: 'Medium',
    pickupDate: '25 Nov 2026',
    status: 'Assigned',
  },
]

export default function GownLogistics() {
  const [gowns, setGowns] = useState(initialGowns)

  const updateStatus = (id, newStatus) => {
    setGowns((currentGowns) =>
      currentGowns.map((gown) =>
        gown.id === id ? { ...gown, status: newStatus } : gown
      )
    )
  }

  const collected = gowns.filter((gown) => gown.status === 'Collected').length
  const returned = gowns.filter((gown) => gown.status === 'Returned').length
  const assigned = gowns.filter((gown) => gown.status === 'Assigned').length

  return (
    <section className="staff-gown-section" id="gown-logistics">
      <div className="staff-section-heading">
        <div>
          <p className="staff-eyebrow">GRADUATION RESOURCES</p>
          <h2>Gown Logistics</h2>
          <span>Manage gown assignments, collections and returns.</span>
        </div>
      </div>

      <div className="staff-gown-summary">
        <article>
          <span>Total Assignments</span>
          <strong>{gowns.length}</strong>
        </article>

        <article>
          <span>Assigned</span>
          <strong>{assigned}</strong>
        </article>

        <article>
          <span>Collected</span>
          <strong>{collected}</strong>
        </article>

        <article>
          <span>Returned</span>
          <strong>{returned}</strong>
        </article>
      </div>

      <div className="staff-gown-table-wrapper">
        <table className="staff-gown-table">
          <thead>
            <tr>
              <th>Participant</th>
              <th>Gown Number</th>
              <th>Size</th>
              <th>Pickup Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {gowns.map((gown) => (
              <tr key={gown.id}>
                <td>{gown.participant}</td>
                <td>{gown.gownNumber}</td>
                <td>{gown.size}</td>
                <td>{gown.pickupDate}</td>
                <td>
                  <span
                    className={`staff-gown-status ${gown.status.toLowerCase()}`}
                  >
                    {gown.status}
                  </span>
                </td>
                <td>
                  {gown.status === 'Assigned' && (
                    <button
                      className="staff-gown-action"
                      onClick={() => updateStatus(gown.id, 'Collected')}
                    >
                      Mark Collected
                    </button>
                  )}

                  {gown.status === 'Collected' && (
                    <button
                      className="staff-gown-action returned"
                      onClick={() => updateStatus(gown.id, 'Returned')}
                    >
                      Mark Returned
                    </button>
                  )}

                  {gown.status === 'Returned' && (
                    <span className="staff-gown-complete">Completed</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}