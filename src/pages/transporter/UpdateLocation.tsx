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

export function UpdateLocation() {
  return (
    <DashboardLayout title="Update Location" menuItems={menuItems} role="transporter">
      <div className="bg-white rounded-xl shadow-sm p-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">📍 Update Shipment Location</h2>
        <div className="space-y-4">
          <select className="w-full p-3 border rounded-lg"><option>Select Shipment</option><option>MLY-2841 - Nairobi → Kampala</option></select>
          <select className="w-full p-3 border rounded-lg"><option>Select Status</option><option>Picked Up</option><option>In Transit</option><option>At Border</option><option>Customs Clearance</option><option>Delivered</option></select>
          <select className="w-full p-3 border rounded-lg"><option>Select Location</option><option>Nairobi</option><option>Nakuru</option><option>Eldoret</option><option>Malaba Border</option><option>Kampala</option></select>
          <textarea placeholder="Additional Notes (e.g., border delay)" className="w-full p-3 border rounded-lg" rows={3}></textarea>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold">Update Tracking</button>
        </div>
      </div>
    </DashboardLayout>
  )
}
