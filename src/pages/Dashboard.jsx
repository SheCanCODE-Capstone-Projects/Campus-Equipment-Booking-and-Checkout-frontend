
import { useState } from 'react'

export default function Dashboard() {
  const [assetType, setAssetType] = useState('Laptop')
  const [requestMessage, setRequestMessage] = useState('')

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
  }

  function displayValue(value) {
    return value || 'Not provided'
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
        <section className="booking-section dashboard-card">
          <div className="dashboard-section-heading">
            <div>
              <p className="dashboard-eyebrow">GET STARTED</p>
              <h3 className="section-heading">Booking Request</h3>
              <p className="section-description">
                Provide the details of the item you need.
              </p>
            </div>
          </div>

          <form className="booking-form" onSubmit={handleSubmit}>
            <label htmlFor="assetType">Select request type</label>
            <select
              id="assetType"
              value={assetType}
              onChange={(event) => {
                setAssetType(event.target.value)
                setRequestMessage('')
              }}
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

            <button type="submit" className="primary-button">
              Submit Request
            </button>

            {requestMessage && (
              <p role="status">{requestMessage}</p>
            )}
          </form>
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
                    <strong>{displayValue(requests.Laptop.participantId)}</strong>
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
                    <strong>
                      {displayValue(requests['Graduation Gown'].participantId)}
                    </strong>
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
    </main>
  )
}
