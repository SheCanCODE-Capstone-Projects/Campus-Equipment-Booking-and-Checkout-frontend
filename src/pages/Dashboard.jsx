
import { useState } from 'react'

export default function Dashboard() {
  const [assetType, setAssetType] = useState('Laptop')
  const [requestMessage, setRequestMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setRequestMessage('Your request has been submitted successfully.')
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
                <select id="pcType" required>
                  <option value="">Select PC type</option>
                  <option value="Laptop">Hp</option>
                  <option value="Desktop">Lenovo</option>
                </select>

                <label htmlFor="serialNumber">Serial Number</label>
                <input
                  id="serialNumber"
                  type="text"
                  placeholder="Enter serial number"
                  required
                />

                <label htmlFor="accessories">Required accessories</label>
                <input
                  id="accessories"
                  type="text"
                  placeholder="E.g. charger, extension cable"
                />

                <div className="form-date-grid">
                  <div>
                    <label htmlFor="pickupDate">Pickup date</label>
                    <input id="pickupDate" type="date" required />
                  </div>
                  <div>
                    <label htmlFor="returnDate">Expected return date</label>
                    <input id="returnDate" type="date" required />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="form-divider">
                  <span>Graduation Details</span>
                </div>

                <label htmlFor="gownSize">Gown size</label>
                <select id="gownSize" required>
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
                <input id="graduationDate" type="date" required />
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
                Keep track of your approved bookings and return dates.
              </p>
            </div>
          </div>

          <div className="allocation-card">
            <div className="allocation-card-heading">
              <h4>Laptop</h4>
              <span className="allocation-status">Not assigned</span>
            </div>
            <p>No laptop has been assigned to you yet.</p>
          </div>

          <div className="allocation-card" id="gowns">
            <div className="allocation-card-heading">
              <h4>Graduation Gown</h4>
              <span className="allocation-status">Not reserved</span>
            </div>
            <p>You do not have a graduation gown reservation yet.</p>
          </div>
        </section>
      </div>
    </main>
  )
}
