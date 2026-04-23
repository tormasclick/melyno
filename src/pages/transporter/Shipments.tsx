import { DashboardLayout } from '../../layouts/DashboardLayout'
import { useState } from 'react'

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

export function TransporterShipments() {
  const [selectedShipment, setSelectedShipment] = useState<string | null>(null)
  const shipments = [
    { id: 'MLY-2841', from: 'Nairobi', to: 'Kampala', goods: 'Electronics', status: 'In Transit', location: 'Malaba Border', price: 'KES 42,000', customer: 'Jane Mwangi' },
  ]

  return (
    <DashboardLayout title="My Shipments" menuItems={menuItems} role="transporter">
      <div className="space-y-4">
        {shipments.map(s => (
          <div key={s.id} className="bg-white rounded-xl shadow-sm p-5">
            <div className="flex justify-between">
              <div><p className="font-mono text-sm">{s.id}</p><p className="font-semibold">{s.from} → {s.to}</p><p className="text-gray-600">{s.customer} • {s.goods}</p><div className="mt-2"><span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">{s.status}</span><span className="ml-2 text-sm text-gray-500">📍 {s.location}</span></div></div>
              <div className="text-right"><p className="font-bold">{s.price}</p><button onClick={() => setSelectedShipment(selectedShipment === s.id ? null : s.id)} className="mt-2 text-blue-600 text-sm">Update Location</button></div>
            </div>
            {selectedShipment === s.id && (
              <div className="mt-4 pt-4 border-t">
                <div className="grid grid-cols-2 gap-3">
                  <select className="p-2 border rounded"><option>In Transit</option><option>At Border</option><option>Customs Clearance</option><option>Delivered</option></select>
                  <select className="p-2 border rounded"><option>Malaba Border</option><option>Nairobi</option><option>Kampala</option></select>
                </div>
                <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded">Update Tracking</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </DashboardLayout>
  )
}
