import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Dashboard from './pages/Dashboard'
import Footer from './components/Footer'
import StaffDashboard from './pages/Admin/StaffDashboard'
import './App.css'

export default function App() {
  const [currentPage, setCurrentPage] = useState('participant')

  return (
    <>
      <div className="preview-navigation">
        <span>PAGE PREVIEW</span>

        <button
          className={currentPage === 'participant' ? 'active' : ''}
          onClick={() => setCurrentPage('participant')}
        >
          Participant
        </button>

        <button
          className={currentPage === 'staff' ? 'active' : ''}
          onClick={() => setCurrentPage('staff')}
        >
          Staff
        </button>
      </div>

      {currentPage === 'participant' ? (
        <>
          <Navbar />
          <HeroSection />
          <Dashboard />
          <Footer />
        </>
      ) : (
        <StaffDashboard />
      )}
    </>
  )
}