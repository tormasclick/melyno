import { DashboardLayout } from '../../layouts/DashboardLayout'

const menuItems = [
  { icon: 'fa-tachometer-alt', label: 'Dashboard', path: '/transporter' },
  { icon: 'fa-briefcase', label: 'Available Jobs', path: '/transporter/available' },
  { icon: 'fa-truck', label: 'My Shipments', path: '/transporter/shipments' },
  { icon: 'fa-map-marker-alt', label: 'Update Location', path: '/transporter/update-location' },
  { icon: 'fa-check-circle', label: 'Clearance', path: '/transporter/clearance' },
  { icon: 'fa-chart-line', label: 'Earnings', path: '/transporter/earnings' },
  { icon: 'fa-car', label: 'Vehicles', path: '/transporter/vehicles' },
  { icon: 'fa-user', label: 'Profile', path: '/transporter/profile' },
]

export function TransporterProfile() {
  return (
    <DashboardLayout title="My Profile" menuItems={menuItems} role="transporter">
      <div className="bg-white rounded-xl shadow-sm p-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">👤 My Profile</h2>
        <div className="space-y-4">
          <div><label className="block text-sm font-medium mb-1">Full Name</label><input type="text" className="w-full p-3 border rounded-lg bg-gray-50" defaultValue="John Otieno" disabled /></div>
          <div><label className="block text-sm font-medium mb-1">Email</label><input type="email" className="w-full p-3 border rounded-lg bg-gray-50" defaultValue="john@otieno.com" disabled /></div>
          <div><label className="block text-sm font-medium mb-1">Phone</label><input type="tel" className="w-full p-3 border rounded-lg" defaultValue="+254 723 456 789" /></div>
          <div><label className="block text-sm font-medium mb-1">License Number</label><input type="text" className="w-full p-3 border rounded-lg" defaultValue="TR2024001" /></div>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold">Save Changes</button>
        </div>
      </div>
    </DashboardLayout>
  )
}
