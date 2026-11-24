
import StaffSidebar from '../../components/StaffSidebar'
import InventoryOverview from '../../components/InventoryOverview'
import EquipmentAvailability from '../../components/EquipmentAvailability'
import EquipmentApprovals from '../../components/EquipmentApprovals'
import '../../styles/staff.css'
import GownLogistics from '../../components/GownLogistics'
export default function StaffDashboard() {
  return (
    <div className="staff-layout">
      <StaffSidebar />

      <main className="staff-main">
        <header className="staff-topbar">
          <div>
            <p className="staff-eyebrow">IGIRE RWANDA ORGANIZATION</p>
            <h1>Operations Console</h1>
          </div>

          <div className="staff-topbar-profile">
            <span className="staff-online-indicator"></span>
            <span>Staff Workspace</span>
          </div>
        </header>

        <section className="staff-welcome">
          <div>
            <p>STAFF MANAGEMENT PORTAL</p>
            <h2>Welcome to your workspace</h2>
            <span>
              Manage equipment, review participant requests, and coordinate
              graduation resources from one place.
            </span>
          </div>

          <div className="staff-welcome-decoration">
            <svg viewBox="0 0 100 100" aria-hidden="true">
              <rect x="18" y="22" width="64" height="44" rx="5" />
              <path d="M10 76h80M37 66l-3 10m29-10 3 10" />
              <circle cx="50" cy="44" r="9" />
              <path d="m46 44 3 3 6-7" />
            </svg>
          </div>
        </section>

        <InventoryOverview />

        <EquipmentAvailability />
         <GownLogistics />
        <EquipmentApprovals />
      </main>
    </div>
  )
}
