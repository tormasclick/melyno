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

export function TransporterVehicles() {
  return (
    <DashboardLayout title="My Vehicles" menuItems={menuItems} role="transporter">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="space-y-3">
          <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"><div><p className="font-mono font-bold">KCA 234X</p><p className="text-sm text-gray-600">Semi Trailer • 20,000 kg</p></div><span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Available</span></div>
          <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"><div><p className="font-mono font-bold">KCD 567Y</p><p className="text-sm text-gray-600">Box Truck • 5,000 kg</p></div><span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">In Transit</span></div>
        </div>
        <button className="mt-4 w-full border-2 border-dashed border-gray-300 py-3 rounded-lg text-gray-500 hover:border-blue-500 hover:text-blue-500"><i className="fas fa-plus mr-2" /> Add New Vehicle</button>
      </div>
    </DashboardLayout>
  )
}
