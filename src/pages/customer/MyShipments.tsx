import { DashboardLayout } from '../../layouts/DashboardLayout'

const menuItems = [
  { icon: 'fa-tachometer-alt', label: 'Dashboard', path: '/dashboard' },
  { icon: 'fa-plus-circle', label: 'New Shipment', path: '/dashboard/new-shipment' },
  { icon: 'fa-box', label: 'My Shipments', path: '/dashboard/my-shipments' },
  { icon: 'fa-map-marker-alt', label: 'Track Shipments', path: '/dashboard/track' },
  { icon: 'fa-calculator', label: 'Pricing Calculator', path: '/dashboard/pricing' },
  { icon: 'fa-user', label: 'Profile', path: '/dashboard/profile' },
]

export function MyShipments() {
  const shipments = [
    { id: 'MLY-2841', from: 'Nairobi', to: 'Kampala', goods: 'Electronics', weight: '500kg', status: 'In Transit', price: 'KES 42,000' },
    { id: 'MLY-2839', from: 'Mombasa', to: 'Nairobi', goods: 'Container', weight: '2000kg', status: 'Delivered', price: 'KES 85,000' },
    { id: 'MLY-2837', from: 'Nairobi', to: 'Dar es Salaam', goods: 'Machinery', weight: '1500kg', status: 'Pending', price: 'KES 120,000' },
  ]

  return (
    <DashboardLayout title="My Shipments" menuItems={menuItems} role="customer">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50"><tr><th className="px-6 py-3">ID</th><th className="px-6 py-3">Route</th><th className="px-6 py-3">Goods</th><th className="px-6 py-3">Status</th><th className="px-6 py-3">Price</th></tr></thead>
            <tbody className="divide-y">
              {shipments.map(s => (<tr key={s.id}><td className="px-6 py-4 font-mono text-sm">{s.id}</td><td className="px-6 py-4">{s.from} → {s.to}</td><td className="px-6 py-4">{s.goods} ({s.weight})</td><td className="px-6 py-4"><span className={`px-2 py-1 rounded-full text-xs ${s.status === 'In Transit' ? 'bg-yellow-100 text-yellow-800' : s.status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>{s.status}</span></td><td className="px-6 py-4">{s.price}</td></tr>))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  )
}
