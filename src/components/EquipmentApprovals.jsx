
import { useState } from 'react'

export default function EquipmentApprovals() {
  const [requests, setRequests] = useState([
    {
      id: 1,
      name: 'Aline Mukamana',
      initials: 'AM',
      department: 'Software Development',
      equipment: 'HP EliteBook 840',
      date: 'Nov 24, 2026',
      purpose: 'Project development and coursework',
      status: 'Pending',
    },
    {
      id: 2,
      name: 'Eric Niyonzima',
      initials: 'EN',
      department: 'Web Development',
      equipment: 'Dell Latitude 5420',
      date: 'Nov 23, 2026',
      purpose: 'Frontend development training',
      status: 'Pending',
    },
    {
      id: 3,
      name: 'Diane Uwase',
      initials: 'DU',
      department: 'Digital Skills',
      equipment: 'HP ProBook 450',
      date: 'Nov 22, 2026',
      purpose: 'Digital skills practical sessions',
      status: 'Pending',
    },
  ])

  function updateRequest(id, newStatus) {
    setRequests((currentRequests) =>
      currentRequests.map((request) =>
        request.id === id
          ? { ...request, status: newStatus }
          : request
      )
    )
  }

  return (
    <section
      className="staff-approvals-section"
      id="equipment-approvals"
    >
      <div className="staff-section-heading">
        <div>
          <p className="staff-eyebrow">REQUEST MANAGEMENT</p>
          <h2>Equipment Approvals</h2>
          <span>
            Review participant requests and make allocation decisions.
          </span>
        </div>

        <span className="staff-overview-date">
          {requests.filter((request) => request.status === 'Pending').length}
          {' '}PENDING HERE
        </span>
      </div>

      <div className="staff-requests-list">
        {requests.map((request) => (
          <article className="staff-request-card" key={request.id}>
            <div className="staff-request-person">
              <div className="staff-request-avatar">
                {request.initials}
              </div>

              <div>
                <h3>{request.name}</h3>
                <span>{request.department}</span>
              </div>
            </div>

            <div className="staff-request-details">
              <span>REQUESTED EQUIPMENT</span>
              <strong>{request.equipment}</strong>
            </div>

            <div className="staff-request-details">
              <span>REQUEST DATE</span>
              <strong>{request.date}</strong>
            </div>

            <div className="staff-request-purpose">
              <span>PURPOSE</span>
              <p>{request.purpose}</p>
            </div>

            <div className="staff-request-actions">
              {request.status === 'Pending' ? (
                <>
                  <button
                    className="staff-approve-button"
                    onClick={() => updateRequest(request.id, 'Approved')}
                  >
                    Approve
                  </button>

                  <button
                    className="staff-reject-button"
                    onClick={() => updateRequest(request.id, 'Rejected')}
                  >
                    Reject
                  </button>
                </>
              ) : (
                <span
                  className={`staff-request-status ${request.status.toLowerCase()}`}
                >
                  {request.status}
                </span>
              )}
            </div>
          </article>
        ))}

        {requests.length === 0 && (
          <div className="staff-requests-empty">
            <h3>No requests available</h3>
            <p>New participant requests will appear here.</p>
          </div>
        )}
      </div>

      <p className="staff-requests-note">
        Showing {requests.length} demonstration requests.
      </p>
    </section>
  )
}
