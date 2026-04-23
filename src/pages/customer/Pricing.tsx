import { DashboardLayout } from '../../layouts/DashboardLayout'

const menuItems = [
  { icon: 'fa-tachometer-alt', label: 'Dashboard', path: '/dashboard' },
  { icon: 'fa-plus-circle', label: 'New Shipment', path: '/dashboard/new-shipment' },
  { icon: 'fa-box', label: 'My Shipments', path: '/dashboard/my-shipments' },
  { icon: 'fa-map-marker-alt', label: 'Track Shipments', path: '/dashboard/track' },
  { icon: 'fa-calculator', label: 'Pricing Calculator', path: '/dashboard/pricing' },
  { icon: 'fa-user', label: 'Profile', path: '/dashboard/profile' },
]

export function Pricing() {
  return (
    <DashboardLayout title="Pricing Calculator" menuItems={menuItems} role="customer">
      <div className="bg-white rounded-xl shadow-sm p-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">💰 Pricing Calculator</h2>
        <div className="space-y-4">
          <select className="w-full p-3 border rounded-lg"><option>From: Nairobi</option><option>From: Mombasa</option></select>
          <select className="w-full p-3 border rounded-lg"><option>To: Kampala</option><option>To: Dar es Salaam</option><option>To: Kigali</option></select>
          <input type="number" placeholder="Weight (kg)" className="w-full p-3 border rounded-lg" />
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold">Calculate <i className="fas fa-calculator ml-2" /></button>
          <div className="mt-4 p-4 bg-green-50 rounded-lg"><p className="text-lg font-bold text-center">Estimated Price: <span className="text-green-600">KES 42,000</span></p></div>
        </div>
      </div>
    </DashboardLayout>
  )
}
