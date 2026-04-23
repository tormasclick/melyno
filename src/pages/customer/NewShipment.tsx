import { DashboardLayout } from '../../layouts/DashboardLayout'

const menuItems = [
  { icon: 'fa-tachometer-alt', label: 'Dashboard', path: '/dashboard' },
  { icon: 'fa-plus-circle', label: 'New Shipment', path: '/dashboard/new-shipment' },
  { icon: 'fa-box', label: 'My Shipments', path: '/dashboard/my-shipments' },
  { icon: 'fa-map-marker-alt', label: 'Track Shipments', path: '/dashboard/track' },
  { icon: 'fa-calculator', label: 'Pricing Calculator', path: '/dashboard/pricing' },
  { icon: 'fa-user', label: 'Profile', path: '/dashboard/profile' },
]

export function NewShipment() {
  return (
    <DashboardLayout title="New Shipment" menuItems={menuItems} role="customer">
      <div className="bg-white rounded-xl shadow-sm p-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Request New Shipment</h2>
        <div className="space-y-4">
          <div><label className="block text-sm font-medium mb-1">Pickup Location *</label><input type="text" placeholder="e.g., Nairobi" className="w-full p-3 border rounded-lg" /></div>
          <div><label className="block text-sm font-medium mb-1">Delivery Location *</label><input type="text" placeholder="e.g., Kampala" className="w-full p-3 border rounded-lg" /></div>
          <div><label className="block text-sm font-medium mb-1">Goods Description *</label><input type="text" placeholder="What are you shipping?" className="w-full p-3 border rounded-lg" /></div>
          <div><label className="block text-sm font-medium mb-1">Weight (kg) *</label><input type="number" placeholder="Weight" className="w-full p-3 border rounded-lg" /></div>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold">Submit Request</button>
        </div>
      </div>
    </DashboardLayout>
  )
}
