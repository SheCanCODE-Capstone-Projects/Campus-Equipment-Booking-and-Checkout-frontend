
import { useState } from 'react'

export default function Dashboard() {
  const [assetType, setAssetType] = useState('Laptop')
  const [requestMessage, setRequestMessage] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [requests, setRequests] = useState({
    Laptop: null,
    'Graduation Gown': null,
  })

  function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const request = {
      participantId: formData.get('participantId'),
    }

    if (assetType === 'Laptop') {
      request.pcType = formData.get('pcType')
      request.serialNumber = formData.get('serialNumber')
      request.accessories = formData.get('accessories') || 'None specified'
      request.pickupDate = formData.get('pickupDate')
      request.returnDate = formData.get('returnDate')
    } else {
      request.gownSize = formData.get('gownSize')
      request.hat = formData.get('hat') ? 'Requested' : 'Not requested'
      request.stole = formData.get('stole') ? 'Requested' : 'Not requested'
      request.graduationDate = formData.get('graduationDate')
    }

    setRequests((previous) => ({
      ...previous,
      [assetType]: request,
    }))

    setRequestMessage(`${assetType} request submitted successfully.`)
    setIsModalOpen(false)
    event.currentTarget.reset()
    setAssetType('Laptop')
  }

  return (
    <main className="participant-dashboard" id="equipment">
      <section className="dashboard-intro">
        <div>
          <p className="dashboard-eyebrow">PARTICIPANT PORTAL</p>
          <h2>Manage Your Bookings</h2>
          <p>
            Request learning equipment and manage your graduation
            arrangements in one place.
          </p>
        </div>
      </section>

      <div className="dashboard-grid">
        <section className="booking-section">
          <button
            type="button"
            className="booking-card dashboard-card"
            onClick={() => setIsModalOpen(true)}
          >
            <div className="booking-card-icon">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 5v14M5 12h14"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <p className="dashboard-eyebrow">GET STARTED</p>
            <h3 className="section-heading">Booking Request</h3>
            <p className="section-description">
              Click here to request learning equipment or graduation items.
            </p>

            <span className="booking-card-action">
              Make a request
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5 12h14m-6-6 6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>

          {requestMessage && (
            <p className="request-success" role="status">
              {requestMessage}
            </p>
          )}
        </section>

        <section className="allocations-section dashboard-card">
          <div className="dashboard-section-heading">
            <div>
              <p className="dashboard-eyebrow">YOUR ITEMS</p>
              <h3 className="section-heading">My Current Allocations</h3>
              <p className="section-description">
                Track your equipment and graduation items.
              </p>
            </div>
          </div>

          <div className="allocation-card">
            <div className="allocation-card-heading">
              <div>
                <p className="allocation-category">LEARNING EQUIPMENT</p>
                <h4>Laptop</h4>
              </div>
              <span className="allocation-status">
                {requests.Laptop ? 'Pending Review' : 'Not assigned'}
              </span>
            </div>

            {requests.Laptop ? (
              <>
                <div className="allocation-details">
                  <div>
                    <span>Participant ID</span>
                    <strong>{requests.Laptop.participantId}</strong>
                  </div>
                  <div>
                    <span>PC Type</span>
                    <strong>{requests.Laptop.pcType}</strong>
                  </div>
                  <div>
                    <span>Serial Number</span>
                    <strong>{requests.Laptop.serialNumber}</strong>
                  </div>
                  <div>
                    <span>Accessories</span>
                    <strong>{requests.Laptop.accessories}</strong>
                  </div>
                  <div>
                    <span>Pickup Date</span>
                    <strong>{requests.Laptop.pickupDate}</strong>
                  </div>
                  <div>
                    <span>Return Date</span>
                    <strong>{requests.Laptop.returnDate}</strong>
                  </div>
                </div>

                <p className="allocation-note">
                  Your laptop request is awaiting staff review.
                </p>
              </>
            ) : (
              <p className="allocation-note">
                Your laptop allocation details will appear here once you
                submit a request.
              </p>
            )}
          </div>

          <div className="allocation-card" id="gowns">
            <div className="allocation-card-heading">
              <div>
                <p className="allocation-category">GRADUATION ATTIRE</p>
                <h4>Graduation Gown</h4>
              </div>
              <span className="allocation-status">
                {requests['Graduation Gown'] ? 'Pending Review' : 'Not reserved'}
              </span>
            </div>

            {requests['Graduation Gown'] ? (
              <>
                <div className="allocation-details">
                  <div>
                    <span>Participant ID</span>
                    <strong>{requests['Graduation Gown'].participantId}</strong>
                  </div>
                  <div>
                    <span>Gown Size</span>
                    <strong>{requests['Graduation Gown'].gownSize}</strong>
                  </div>
                  <div>
                    <span>Graduation Hat</span>
                    <strong>{requests['Graduation Gown'].hat}</strong>
                  </div>
                  <div>
                    <span>Graduation Stole</span>
                    <strong>{requests['Graduation Gown'].stole}</strong>
                  </div>
                  <div>
                    <span>Graduation Date</span>
                    <strong>{requests['Graduation Gown'].graduationDate}</strong>
                  </div>
                </div>

                <p className="allocation-note">
                  Your graduation gown request is awaiting staff review.
                </p>
              </>
            ) : (
              <p className="allocation-note">
                Your graduation attire details will appear here once you
                submit a reservation.
              </p>
            )}
          </div>
        </section>
      </div>

      {isModalOpen && (
        <div
          className="modal-overlay"
          onClick={() => setIsModalOpen(false)}
        >
          <section
            className="booking-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="booking-modal-header">
              <div>
                <p className="dashboard-eyebrow">GET STARTED</p>
                <h2 id="booking-modal-title">Booking Request</h2>
                <p>Complete the form below to submit your request.</p>
              </div>

              <button
                type="button"
                className="modal-close-button"
                aria-label="Close booking form"
                onClick={() => setIsModalOpen(false)}
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="m6 6 12 12M18 6 6 18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <form className="booking-form" onSubmit={handleSubmit}>
              <label htmlFor="assetType">Select request type</label>
              <select
                id="assetType"
                value={assetType}
                onChange={(event) => setAssetType(event.target.value)}
              >
                <option value="Laptop">Laptop</option>
                <option value="Graduation Gown">Graduation Gown</option>
              </select>

              <label htmlFor="participantId">Participant ID</label>
              <input
                id="participantId"
                name="participantId"
                type="text"
                placeholder="Enter your participant ID"
                required
              />

              {assetType === 'Laptop' ? (
                <>
                  <div className="form-divider">
                    <span>Equipment Details</span>
                  </div>

                  <label htmlFor="pcType">Type of PC</label>
                  <select id="pcType" name="pcType" required>
                    <option value="">Select PC type</option>
                    <option value="Laptop">Laptop</option>
                    <option value="Desktop">Desktop</option>
                  </select>

                  <label htmlFor="serialNumber">Serial Number</label>
                  <input
                    id="serialNumber"
                    name="serialNumber"
                    type="text"
                    placeholder="Enter serial number"
                    required
                  />

                  <label htmlFor="accessories">Required accessories</label>
                  <input
                    id="accessories"
                    name="accessories"
                    type="text"
                    placeholder="E.g. charger, extension cable"
                  />

                  <div className="form-date-grid">
                    <div>
                      <label htmlFor="pickupDate">Pickup date</label>
                      <input
                        id="pickupDate"
                        name="pickupDate"
                        type="date"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="returnDate">Expected return date</label>
                      <input
                        id="returnDate"
                        name="returnDate"
                        type="date"
                        required
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="form-divider">
                    <span>Graduation Details</span>
                  </div>

                  <label htmlFor="gownSize">Gown size</label>
                  <select id="gownSize" name="gownSize" required>
                    <option value="">Select your size</option>
                    <option value="S">Small</option>
                    <option value="M">Medium</option>
                    <option value="L">Large</option>
                    <option value="XL">Extra Large</option>
                    <option value="XXL">XX Large</option>
                  </select>

                  <div className="gown-items">
                    <p>Graduation items required</p>

                    <label className="form-checkbox">
                      <input type="checkbox" name="hat" />
                      <span>Graduation Hat</span>
                    </label>

                    <label className="form-checkbox">
                      <input type="checkbox" name="stole" />
                      <span>Graduation Stole</span>
                    </label>
                  </div>

                  <label htmlFor="graduationDate">Graduation date</label>
                  <input
                    id="graduationDate"
                    name="graduationDate"
                    type="date"
                    required
                  />
                </>
              )}

              <div className="booking-modal-actions">
                <button
                  type="button"
                  className="secondary-button"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>

                <button type="submit" className="primary-button">
                  Submit Request
                </button>
              </div>
            </form>
          </section>
        </div>
      )}
    </main>
  )
}
