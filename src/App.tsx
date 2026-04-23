import { Routes, Route, Navigate } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { AboutUsPage } from './pages/AboutUsPage'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import { FAQPage } from './pages/FAQPage'
import { TrackingPage } from './pages/TrackingPage'

// Customer Pages
import { CustomerDashboard } from './pages/customer/Dashboard'
import { NewShipment } from './pages/customer/NewShipment'
import { MyShipments } from './pages/customer/MyShipments'
import { TrackShipments } from './pages/customer/TrackShipments'
import { Pricing } from './pages/customer/Pricing'
import { Profile } from './pages/customer/Profile'

// Transporter Pages
import { TransporterDashboard } from './pages/transporter/Dashboard'
import { AvailableJobs } from './pages/transporter/AvailableJobs'
import { TransporterShipments } from './pages/transporter/Shipments'
import { UpdateLocation } from './pages/transporter/UpdateLocation'
import { TransporterClearance } from './pages/transporter/Clearance'
import { TransporterEarnings } from './pages/transporter/Earnings'
import { TransporterVehicles } from './pages/transporter/Vehicles'
import { TransporterProfile } from './pages/transporter/Profile'

// Admin Pages
import { AdminDashboard } from './pages/admin/Dashboard'
import { AdminShipments } from './pages/admin/Shipments'
import { AdminUsers } from './pages/admin/Users'
import { AdminRequests } from './pages/admin/Requests'
import { AdminPricing } from './pages/admin/Pricing'
import { AdminClearances } from './pages/admin/Clearances'
import { AdminTracking } from './pages/admin/Tracking'

function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
  const userStr = localStorage.getItem('user')
  const user = userStr ? JSON.parse(userStr) : { role: '' }

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/tracking" element={<TrackingPage />} />
      
      {/* Customer Routes */}
      <Route path="/dashboard" element={isLoggedIn && user.role === 'customer' ? <CustomerDashboard /> : <Navigate to="/login" />} />
      <Route path="/dashboard/new-shipment" element={isLoggedIn && user.role === 'customer' ? <NewShipment /> : <Navigate to="/login" />} />
      <Route path="/dashboard/my-shipments" element={isLoggedIn && user.role === 'customer' ? <MyShipments /> : <Navigate to="/login" />} />
      <Route path="/dashboard/track" element={isLoggedIn && user.role === 'customer' ? <TrackShipments /> : <Navigate to="/login" />} />
      <Route path="/dashboard/pricing" element={isLoggedIn && user.role === 'customer' ? <Pricing /> : <Navigate to="/login" />} />
      <Route path="/dashboard/profile" element={isLoggedIn && user.role === 'customer' ? <Profile /> : <Navigate to="/login" />} />
      
      {/* Transporter Routes */}
      <Route path="/transporter" element={isLoggedIn && user.role === 'transporter' ? <TransporterDashboard /> : <Navigate to="/login" />} />
      <Route path="/transporter/available" element={isLoggedIn && user.role === 'transporter' ? <AvailableJobs /> : <Navigate to="/login" />} />
      <Route path="/transporter/shipments" element={isLoggedIn && user.role === 'transporter' ? <TransporterShipments /> : <Navigate to="/login" />} />
      <Route path="/transporter/update-location" element={isLoggedIn && user.role === 'transporter' ? <UpdateLocation /> : <Navigate to="/login" />} />
      <Route path="/transporter/clearance" element={isLoggedIn && user.role === 'transporter' ? <TransporterClearance /> : <Navigate to="/login" />} />
      <Route path="/transporter/earnings" element={isLoggedIn && user.role === 'transporter' ? <TransporterEarnings /> : <Navigate to="/login" />} />
      <Route path="/transporter/vehicles" element={isLoggedIn && user.role === 'transporter' ? <TransporterVehicles /> : <Navigate to="/login" />} />
      <Route path="/transporter/profile" element={isLoggedIn && user.role === 'transporter' ? <TransporterProfile /> : <Navigate to="/login" />} />
      
      {/* Admin Routes */}
      <Route path="/admin" element={isLoggedIn && user.role === 'admin' ? <AdminDashboard /> : <Navigate to="/login" />} />
      <Route path="/admin/shipments" element={isLoggedIn && user.role === 'admin' ? <AdminShipments /> : <Navigate to="/login" />} />
      <Route path="/admin/users" element={isLoggedIn && user.role === 'admin' ? <AdminUsers /> : <Navigate to="/login" />} />
      <Route path="/admin/requests" element={isLoggedIn && user.role === 'admin' ? <AdminRequests /> : <Navigate to="/login" />} />
      <Route path="/admin/pricing" element={isLoggedIn && user.role === 'admin' ? <AdminPricing /> : <Navigate to="/login" />} />
      <Route path="/admin/clearances" element={isLoggedIn && user.role === 'admin' ? <AdminClearances /> : <Navigate to="/login" />} />
      <Route path="/admin/tracking" element={isLoggedIn && user.role === 'admin' ? <AdminTracking /> : <Navigate to="/login" />} />
      
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App
