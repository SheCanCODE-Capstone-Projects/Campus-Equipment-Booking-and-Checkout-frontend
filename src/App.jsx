// import Navbar from './components/Navbar'
// import HeroSection from './components/HeroSection'
// import Dashboard from './pages/Dashboard'
// import Footer from './components/Footer'
//  import './App.css'

// export default function App() {
//   return (
//     <>
//       <Navbar />
//       <HeroSection />
//       <Dashboard />
//       <Footer />
//     </>
//   )
// }


// import StaffDashboard from './pages/Admin/StaffDashboard'
// import './App.css'

// export default function App() {
//   return <StaffDashboard />
// }


// import LandingPage from './components/landing/LandingPage'

// export default function App() {
//   return <LandingPage />
// }




import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
