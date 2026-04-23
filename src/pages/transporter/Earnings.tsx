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

export function TransporterEarnings() {
  const earnings = { total: 342000, thisMonth: 125000, pending: 42000 }

  return (
    <DashboardLayout title="Earnings" menuItems={menuItems} role="transporter">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white"><p className="text-sm opacity-90">Total Earnings</p><p className="text-3xl font-bold">KES {earnings.total.toLocaleString()}</p></div>
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white"><p className="text-sm opacity-90">This Month</p><p className="text-3xl font-bold">KES {earnings.thisMonth.toLocaleString()}</p></div>
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white"><p className="text-sm opacity-90">Pending Payout</p><p className="text-3xl font-bold">KES {earnings.pending.toLocaleString()}</p></div>
        </div>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden"><div className="p-6 border-b"><h2 className="text-xl font-semibold">Payment History</h2></div><div className="divide-y"><div className="p-4 flex justify-between items-center"><div><p className="font-mono text-sm">MLY-2841</p><p className="text-sm text-gray-500">Nairobi → Kampala</p></div><div className="text-right"><p className="font-bold">KES 42,000</p><p className="text-xs text-green-600">Paid</p></div></div></div></div>
      </div>
    </DashboardLayout>
  )
}
