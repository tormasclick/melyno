import { DashboardLayout } from '../../layouts/DashboardLayout'

const menuItems = [
  { icon: 'fa-tachometer-alt', label: 'Dashboard', path: '/admin' },
  { icon: 'fa-box', label: 'Shipments', path: '/admin/shipments' },
  { icon: 'fa-users', label: 'Users', path: '/admin/users' },
  { icon: 'fa-handshake', label: 'Requests', path: '/admin/requests' },
  { icon: 'fa-tag', label: 'Pricing', path: '/admin/pricing' },
  { icon: 'fa-check-circle', label: 'Clearances', path: '/admin/clearances' },
  { icon: 'fa-map-marker-alt', label: 'Tracking', path: '/admin/tracking' },
]

export function AdminDashboard() {
  return (
    <DashboardLayout title="Dashboard" menuItems={menuItems} role="admin">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-blue-500"><p className="text-gray-500 text-sm">Total Shipments</p><p className="text-3xl font-bold">156</p></div>
        <div className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-green-500"><p className="text-gray-500 text-sm">Active Shipments</p><p className="text-3xl font-bold">23</p></div>
        <div className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-purple-500"><p className="text-gray-500 text-sm">Total Users</p><p className="text-3xl font-bold">1,245</p></div>
        <div className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-orange-500"><p className="text-gray-500 text-sm">Revenue</p><p className="text-3xl font-bold">KES 2.84M</p></div>
      </div>
    </DashboardLayout>
  )
}
