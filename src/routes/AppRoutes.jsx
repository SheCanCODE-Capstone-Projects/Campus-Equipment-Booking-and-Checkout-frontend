
import { Routes, Route, Outlet } from 'react-router-dom'
import LandingPage from '../components/landing/LandingPage'
import Footer from '../components/Footer'
import Login from '../pages/Login'
import Register from '../pages/Register'
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

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<AppLayout />}>
        <Route
          path="/participant/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/staff/dashboard"
          element={<StaffDashboard />}
        />
      </Route>
    </Routes>
  )
}
