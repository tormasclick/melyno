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

export function TransporterDashboard() {
  return (
    <DashboardLayout title="Dashboard" menuItems={menuItems} role="transporter">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-blue-500"><p className="text-gray-500 text-sm">Available Jobs</p><p className="text-3xl font-bold">5</p></div>
        <div className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-green-500"><p className="text-gray-500 text-sm">Active Shipments</p><p className="text-3xl font-bold">3</p></div>
        <div className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-purple-500"><p className="text-gray-500 text-sm">Completed</p><p className="text-3xl font-bold">47</p></div>
        <div className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-orange-500"><p className="text-gray-500 text-sm">Earnings</p><p className="text-3xl font-bold">KES 342,000</p></div>
      </div>
    </DashboardLayout>
  )
}
