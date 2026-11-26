import { useState } from 'react'

const initialAssets = [
  {
    id: 1,
    assetId: 'AST-001',
    name: 'HP EliteBook 840 G5 + Charger',
    category: 'HP Laptop',
    condition: 'Excellent',
    status: 'Available',
  },
  {
    id: 2,
    assetId: 'AST-002',
    name: 'HP EliteBook 840 G5 + Charger',
    category: 'HP Laptop',
    condition: 'Good',
    status: 'Checked Out',
  },
  {
    id: 3,
    assetId: 'AST-003',
    name: 'HP ProBook 450 G6 + Charger',
    category: 'HP Laptop',
    condition: 'Good',
    status: 'Available',
  },
  {
    id: 4,
    assetId: 'AST-004',
    name: 'HP EliteBook 840 G6 + Charger',
    category: 'HP Laptop',
    condition: 'Fair',
    status: 'Maintenance',
  },
  {
    id: 5,
    assetId: 'AST-005',
    name: 'HP ProBook 440 G7 + Charger',
    category: 'HP Laptop',
    condition: 'Excellent',
    status: 'Available',
  },
  {
    id: 6,
    assetId: 'AST-006',
    name: 'HP EliteBook 840 G5 + Charger',
    category: 'HP Laptop',
    condition: 'Good',
    status: 'Checked Out',
  },
]
export default function AssetRepository() {
  const [assets, setAssets] = useState(initialAssets)
  const [search, setSearch] = useState('')

  const updateStatus = (id, newStatus) => {
    setAssets((currentAssets) =>
      currentAssets.map((asset) =>
        asset.id === id ? { ...asset, status: newStatus } : asset
      )
    )
  }

  const filteredAssets = assets.filter((asset) =>
    `${asset.assetId} ${asset.name} ${asset.category}`
      .toLowerCase()
      .includes(search.toLowerCase())
  )

  const available = assets.filter(
    (asset) => asset.status === 'Available'
  ).length

  const checkedOut = assets.filter(
    (asset) => asset.status === 'Checked Out'
  ).length

  const maintenance = assets.filter(
    (asset) => asset.status === 'Maintenance'
  ).length

  return (
    <section className="staff-asset-section" id="asset-repository">
      <div className="staff-section-heading">
        <div>
          <p className="staff-eyebrow">EQUIPMENT RECORDS</p>
          <h2>Asset Repository</h2>
          <span>
            View and manage registered equipment across the organization.
          </span>
        </div>
      </div>

      <div className="staff-asset-summary">
        <article>
          <span>Total Assets</span>
          <strong>{assets.length}</strong>
        </article>

        <article>
          <span>Available</span>
          <strong>{available}</strong>
        </article>

        <article>
          <span>Checked Out</span>
          <strong>{checkedOut}</strong>
        </article>

        <article>
          <span>Maintenance</span>
          <strong>{maintenance}</strong>
        </article>
      </div>

      <div className="staff-asset-container">
        <div className="staff-asset-toolbar">
          <div>
            <h3>Registered Equipment</h3>
            <p>Manage equipment records and availability.</p>
          </div>

          <div className="staff-asset-search">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="10.8" cy="10.8" r="6.8" />
              <path d="m16 16 5 5" />
            </svg>

            <input
              type="search"
              placeholder="Search equipment..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>
        </div>

        <div className="staff-asset-table-wrapper">
          <table className="staff-asset-table">
            <thead>
              <tr>
                <th>Asset ID</th>
                <th>Equipment</th>
                <th>Category</th>
                <th>Condition</th>
                <th>Availability</th>
                <th>Update Status</th>
              </tr>
            </thead>

            <tbody>
              {filteredAssets.map((asset) => (
                <tr key={asset.id}>
                  <td className="staff-asset-id">{asset.assetId}</td>
                  <td>{asset.name}</td>
                  <td>{asset.category}</td>
                  <td>
                    <span
                      className={`staff-asset-condition ${asset.condition.toLowerCase()}`}
                    >
                      {asset.condition}
                    </span>
                  </td>
                  <td>
                    <span
                      className={`staff-asset-status ${asset.status
                        .toLowerCase()
                        .replace(' ', '-')}`}
                    >
                      {asset.status}
                    </span>
                  </td>
                  <td>
                    <select
                      className="staff-asset-select"
                      value={asset.status}
                      onChange={(event) =>
                        updateStatus(asset.id, event.target.value)
                      }
                      aria-label={`Update status for ${asset.name}`}
                    >
                      <option value="Available">Available</option>
                      <option value="Checked Out">Checked Out</option>
                      <option value="Maintenance">Maintenance</option>
                    </select>
                  </td>
                </tr>
              ))}

              {filteredAssets.length === 0 && (
                <tr>
                  <td colSpan="6" className="staff-asset-empty">
                    No equipment records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}