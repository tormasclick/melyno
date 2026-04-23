import { DashboardLayout } from '../layouts/DashboardLayout'

const menuItems = [
  { icon: 'fa-tachometer-alt', label: 'Dashboard', path: '/transporter' },
  { icon: 'fa-briefcase', label: 'Available Jobs', path: '/transporter/available' },
  { icon: 'fa-truck', label: 'My Shipments', path: '/transporter/my-shipments' },
  { icon: 'fa-map-marker-alt', label: 'Update Location', path: '/transporter/update-location' },
]

export function TransporterDashboard() {
  return (
    <DashboardLayout title="Transporter Dashboard" menuItems={menuItems} role="transporter">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-2xl font-bold mb-4">Welcome, John Otieno</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-blue-50 rounded-xl p-4"><p className="text-sm text-blue-600">Available Jobs</p><p className="text-2xl font-bold">5</p></div>
          <div className="bg-green-50 rounded-xl p-4"><p className="text-sm text-green-600">Active Shipments</p><p className="text-2xl font-bold">3</p></div>
          <div className="bg-purple-50 rounded-xl p-4"><p className="text-sm text-purple-600">Completed</p><p className="text-2xl font-bold">47</p></div>
          <div className="bg-orange-50 rounded-xl p-4"><p className="text-sm text-orange-600">Earnings</p><p className="text-2xl font-bold">KES 342,000</p></div>
        </div>
      </div>
    </DashboardLayout>
  )
}
