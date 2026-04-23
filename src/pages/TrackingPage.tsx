import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Link } from 'react-router-dom'

export function TrackingPage() {
  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-primary text-center mb-8">Track Your Shipment</h1>
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Enter Tracking ID</label>
            <div className="flex gap-4">
              <input type="text" placeholder="e.g., MLY-2841" className="flex-1 p-3 border rounded-lg" />
              <button className="bg-blue-600 text-white px-6 rounded-lg">Track</button>
            </div>
          </div>
          <div className="text-center text-gray-500">
            <p>Demo: Use tracking ID <strong>MLY-2841</strong></p>
            <Link to="/login" className="text-blue-600 hover:underline mt-4 inline-block">Login to see full tracking details →</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
