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

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

