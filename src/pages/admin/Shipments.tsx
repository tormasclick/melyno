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

export function AdminShipments() {
  const shipments = [
    { id: 'MLY-2841', customer: 'Jane Mwangi', from: 'Nairobi', to: 'Kampala', status: 'In Transit', price: 'KES 42,000' },
    { id: 'MLY-2839', customer: 'Peter Kamau', from: 'Mombasa', to: 'Nairobi', status: 'Delivered', price: 'KES 85,000' },
  ]

  return (
    <DashboardLayout title="Shipments" menuItems={menuItems} role="admin">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50"><tr><th className="px-6 py-3">ID</th><th className="px-6 py-3">Customer</th><th className="px-6 py-3">Route</th><th className="px-6 py-3">Status</th><th className="px-6 py-3">Price</th><th className="px-6 py-3">Action</th></tr></thead>
            <tbody className="divide-y">{shipments.map(s => (<tr key={s.id}><td className="px-6 py-4 font-mono text-sm">{s.id}</td><td className="px-6 py-4">{s.customer}</td><td className="px-6 py-4">{s.from} → {s.to}</td><td className="px-6 py-4"><select className="px-2 py-1 border rounded text-sm"><option>Pending</option><option>In Transit</option><option>Delivered</option></select></td><td className="px-6 py-4">{s.price}</td><td className="px-6 py-4"><button className="text-blue-600 text-sm">Update</button></td></tr>))}</tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  )
}
