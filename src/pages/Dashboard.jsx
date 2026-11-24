
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
                  <option value="Laptop">Laptop</option>
                  <option value="Desktop">Desktop</option>
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
              <span className="allocation-status">Not assigned</span>
            </div>

            <div className="allocation-details">
              <div>
                <span>PC Type</span>
                <strong>Not assigned</strong>
              </div>
              <div>
                <span>Serial Number</span>
                <strong>Not assigned</strong>
              </div>
              <div>
                <span>Accessories</span>
                <strong>Not assigned</strong>
              </div>
              <div>
                <span>Pickup Date</span>
                <strong>Pending approval</strong>
              </div>
              <div>
                <span>Return Date</span>
                <strong>Pending approval</strong>
              </div>
            </div>

            <p className="allocation-note">
              Your laptop allocation details will appear here once your
              request has been approved.
            </p>
          </div>

          <div className="allocation-card" id="gowns">
            <div className="allocation-card-heading">
              <div>
                <p className="allocation-category">GRADUATION ATTIRE</p>
                <h4>Graduation Gown</h4>
              </div>
              <span className="allocation-status">Not reserved</span>
            </div>

            <div className="allocation-details">
              <div>
                <span>Gown Size</span>
                <strong>Not selected</strong>
              </div>
              <div>
                <span>Graduation Hat</span>
                <strong>Not reserved</strong>
              </div>
              <div>
                <span>Graduation Stole</span>
                <strong>Not reserved</strong>
              </div>
              <div>
                <span>Graduation Date</span>
                <strong>Not scheduled</strong>
              </div>
            </div>

            <p className="allocation-note">
              Your graduation attire details will appear here once your
              reservation has been approved.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
