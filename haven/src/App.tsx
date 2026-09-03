import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { SignupPage } from './pages/SignupPage'
import { DashboardPage } from './pages/DashboardPage'
import './App.css'

import { ThemeProvider } from './context/ThemeContext'
import { DashboardProvider } from './context/DashboardContext'

function App() {
  return (
    <ThemeProvider>
      <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={
          <DashboardProvider>
            <DashboardPage />
          </DashboardProvider>
        } />
      </Routes>
    </Router>
    </ThemeProvider>
  )
}

export default App
