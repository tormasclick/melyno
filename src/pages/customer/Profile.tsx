import { DashboardLayout } from '../../layouts/DashboardLayout'

const menuItems = [
  { icon: 'fa-tachometer-alt', label: 'Dashboard', path: '/dashboard' },
  { icon: 'fa-plus-circle', label: 'New Shipment', path: '/dashboard/new-shipment' },
  { icon: 'fa-box', label: 'My Shipments', path: '/dashboard/my-shipments' },
  { icon: 'fa-map-marker-alt', label: 'Track Shipments', path: '/dashboard/track' },
  { icon: 'fa-calculator', label: 'Pricing Calculator', path: '/dashboard/pricing' },
  { icon: 'fa-user', label: 'Profile', path: '/dashboard/profile' },
]

export function Profile() {
  return (
    <DashboardLayout title="My Profile" menuItems={menuItems} role="customer">
      <div className="bg-white rounded-xl shadow-sm p-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">👤 My Profile</h2>
        <div className="space-y-4">
          <div><label className="block text-sm font-medium mb-1">Full Name</label><input type="text" className="w-full p-3 border rounded-lg bg-gray-50" defaultValue="Jane Mwangi" disabled /></div>
          <div><label className="block text-sm font-medium mb-1">Email</label><input type="email" className="w-full p-3 border rounded-lg bg-gray-50" defaultValue="jane@example.com" disabled /></div>
          <div><label className="block text-sm font-medium mb-1">Phone</label><input type="tel" className="w-full p-3 border rounded-lg" defaultValue="+254 712 345 678" /></div>
          <div><label className="block text-sm font-medium mb-1">Company</label><input type="text" className="w-full p-3 border rounded-lg" defaultValue="Mwangi Enterprises" /></div>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold">Save Changes</button>
        </div>
      </div>
    </DashboardLayout>
  )
}
