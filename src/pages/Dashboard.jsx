
import { useState } from 'react'

function getToday() {
  const date = new Date()
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

export default function Dashboard() {
  const [assetType, setAssetType] = useState('Laptop')
  const [requestMessage, setRequestMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [pickupDate, setPickupDate] = useState('')

  const [requests, setRequests] = useState({
    Laptop: null,
    'Graduation Gown': null,
  })

  const laptopRequested = Boolean(requests.Laptop)
  const gownRequested = Boolean(requests['Graduation Gown'])

  function handleSubmit(event) {
    event.preventDefault()

    if (requests[assetType]) {
      setErrorMessage(`You already have a ${assetType} request.`)
      return
    }

    const form = event.currentTarget
    const formData = new FormData(form)

    if (assetType === 'Laptop') {
      const returnDate = formData.get('returnDate')

      if (returnDate <= pickupDate) {
        setErrorMessage('Return date must be after the pickup date.')
        return
      }
    }

    const request = {
      participantId: formData.get('participantId'),
      status: 'Pending Review',
      submittedDate: new Date().toLocaleDateString(),
    }

    if (assetType === 'Laptop') {
      request.pcType = formData.get('pcType')
      request.accessories = formData.get('accessories') || 'None specified'
      request.pickupDate = pickupDate
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
    setErrorMessage('')
    setIsModalOpen(false)
    setPickupDate('')
    setAssetType('Laptop')
    form.reset()
  }

  function openModal() {
    setIsModalOpen(true)
    setRequestMessage('')
    setErrorMessage('')

    if (laptopRequested && !gownRequested) {
      setAssetType('Graduation Gown')
    } else {
      setAssetType('Laptop')
    }
  }

  function closeModal() {
    setIsModalOpen(false)
    setErrorMessage('')
    setPickupDate('')
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
            onClick={openModal}
            disabled={laptopRequested && gownRequested}
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
              {laptopRequested && gownRequested
                ? 'You have already submitted both available request types.'
                : 'Click here to request learning equipment or graduation items.'}
            </p>

            <span className="booking-card-action">
              {laptopRequested && gownRequested
                ? 'All requests submitted'
                : 'Make a request'}
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

          <div className="allocation-history">
            <div className="history-section-heading">
              <p className="allocation-category">LEARNING EQUIPMENT</p>
              <span>{laptopRequested ? '1 request' : '0 requests'}</span>
            </div>

            {requests.Laptop ? (
              <div className="allocation-card">
                <div className="allocation-card-heading">
                  <div>
                    <p className="allocation-category">LAPTOP REQUEST</p>
                    <h4>{requests.Laptop.pcType}</h4>
                  </div>
                  <span className="allocation-status">
                    {requests.Laptop.status}
                  </span>
                </div>

                <div className="allocation-details">
                  <div>
                    <span>Participant ID</span>
                    <strong>{requests.Laptop.participantId}</strong>
                  </div>
                  <div>
                    <span>Accessories</span>
                    <strong>{requests.Laptop.accessories}</strong>
                  </div>
                  <div>
                    <span>Serial Number</span>
                    <strong>Pending assignment</strong>
                  </div>
                  <div>
                    <span>Pickup Date</span>
                    <strong>{requests.Laptop.pickupDate}</strong>
                  </div>
                  <div>
                    <span>Return Date</span>
                    <strong>{requests.Laptop.returnDate}</strong>
                  </div>
                  <div>
                    <span>Submitted</span>
                    <strong>{requests.Laptop.submittedDate}</strong>
                  </div>
                </div>

                <p className="allocation-note">
                  Your laptop request is awaiting staff review.
                </p>
              </div>
            ) : (
              <div className="allocation-card">
                <h4>No laptop request yet</h4>
                <p className="allocation-note">
                  Your laptop request will appear here after submission.
                </p>
              </div>
            )}
          </div>

          <div className="allocation-history">
            <div className="history-section-heading">
              <p className="allocation-category">GRADUATION ATTIRE</p>
              <span>{gownRequested ? '1 request' : '0 requests'}</span>
            </div>

            {requests['Graduation Gown'] ? (
              <div className="allocation-card">
                <div className="allocation-card-heading">
                  <div>
                    <p className="allocation-category">GOWN REQUEST</p>
                    <h4>Graduation Gown</h4>
                  </div>
                  <span className="allocation-status">
                    {requests['Graduation Gown'].status}
                  </span>
                </div>

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
                  <div>
                    <span>Submitted</span>
                    <strong>{requests['Graduation Gown'].submittedDate}</strong>
                  </div>
                </div>

                <p className="allocation-note">
                  Your graduation gown request is awaiting staff review.
                </p>
              </div>
            ) : (
              <div className="allocation-card">
                <h4>No gown request yet</h4>
                <p className="allocation-note">
                  Your graduation gown request will appear here after submission.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
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
                onClick={closeModal}
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
                onChange={(event) => {
                  setAssetType(event.target.value)
                  setErrorMessage('')
                  setPickupDate('')
                }}
              >
                <option value="Laptop" disabled={laptopRequested}>
                  Laptop {laptopRequested ? '(Already requested)' : ''}
                </option>
                <option
                  value="Graduation Gown"
                  disabled={gownRequested}
                >
                  Graduation Gown {gownRequested ? '(Already requested)' : ''}
                </option>
              </select>

              {requests[assetType] ? (
                <p className="booking-error" role="alert">
                  You have already submitted this request. Please select the
                  other request type.
                </p>
              ) : (
                <>
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
                            min={getToday()}
                            value={pickupDate}
                            onChange={(event) => {
                              setPickupDate(event.target.value)
                              setErrorMessage('')
                            }}
                            required
                          />
                        </div>

                        <div>
                          <label htmlFor="returnDate">
                            Expected return date
                          </label>
                          <input
                            id="returnDate"
                            name="returnDate"
                            type="date"
                            min={pickupDate || getToday()}
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
                        min={getToday()}
                        required
                      />
                    </>
                  )}
                </>
              )}

              {errorMessage && (
                <p className="booking-error" role="alert">
                  {errorMessage}
                </p>
              )}

              <div className="booking-modal-actions">
                <button
                  type="button"
                  className="secondary-button"
                  onClick={closeModal}
                >
                  Cancel
                </button>

                {!requests[assetType] && (
                  <button type="submit" className="primary-button">
                    Submit Request
                  </button>
                )}
              </div>
            </form>
          </section>
        </div>
      )}
    </main>
  )
}
