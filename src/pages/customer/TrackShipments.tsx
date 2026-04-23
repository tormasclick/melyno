import { DashboardLayout } from '../../layouts/DashboardLayout'

const menuItems = [
  { icon: 'fa-tachometer-alt', label: 'Dashboard', path: '/dashboard' },
  { icon: 'fa-plus-circle', label: 'New Shipment', path: '/dashboard/new-shipment' },
  { icon: 'fa-box', label: 'My Shipments', path: '/dashboard/my-shipments' },
  { icon: 'fa-map-marker-alt', label: 'Track Shipments', path: '/dashboard/track' },
  { icon: 'fa-calculator', label: 'Pricing Calculator', path: '/dashboard/pricing' },
  { icon: 'fa-user', label: 'Profile', path: '/dashboard/profile' },
]

export function TrackShipments() {
  const activeShipments = [
    { id: 'MLY-2841', from: 'Nairobi', to: 'Kampala', status: 'In Transit', location: 'Malaba Border', eta: '2 hours', price: 'KES 42,000' },
  ]

  return (
    <DashboardLayout title="Track Shipments" menuItems={menuItems} role="customer">
      <div className="space-y-4">
        {activeShipments.map(s => (
          <div key={s.id} className="bg-white rounded-xl shadow-sm p-5">
            <div className="flex justify-between items-start">
              <div><p className="font-mono text-sm text-gray-500">{s.id}</p><p className="font-semibold">{s.from} → {s.to}</p></div>
              <div className="text-right"><p className="font-bold text-primary">{s.price}</p><p className="text-sm text-green-600">ETA: {s.eta}</p></div>
            </div>
            <div className="mt-4 pt-4 border-t">
              <div className="flex items-center gap-2"><i className="fas fa-map-marker-alt text-blue-500" /><span className="text-sm">Current Location: {s.location}</span></div>
              <div className="mt-3 bg-gray-100 rounded-lg p-3"><div className="w-full bg-gray-300 rounded-full h-2"><div className="bg-blue-600 h-2 rounded-full w-2/3"></div></div><div className="flex justify-between mt-2 text-xs text-gray-500"><span>Nairobi</span><span>Malaba Border</span><span>Kampala</span></div></div>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  )
}
