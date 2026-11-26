
import { Routes, Route, Outlet } from 'react-router-dom'
import LandingPage from '../components/landing/LandingPage'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Dashboard from '../pages/Dashboard'
import StaffDashboard from '../pages/Admin/StaffDashboard'

function AppLayout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  )
}

function ParticipantLayout() {
  return (
    <>
      <Navbar />
      <Dashboard />
    </>
  )
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route element={<AppLayout />}>
        <Route
          path="/login"
          element={<div>Login page is being developed by the team.</div>}
        />

        <Route
          path="/participant/dashboard"
          element={<ParticipantLayout />}
        />

        <Route
          path="/staff/dashboard"
          element={<StaffDashboard />}
        />
      </Route>
    </Routes>
  )
}
