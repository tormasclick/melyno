import { DashboardLayout } from '../layouts/DashboardLayout'
import { useState } from 'react'

const menuItems = [
  { icon: 'fa-tachometer-alt', label: 'Dashboard', path: '/admin' },
  { icon: 'fa-box', label: 'All Shipments', path: '/admin/shipments' },
  { icon: 'fa-users', label: 'Users', path: '/admin/users' },
  { icon: 'fa-handshake', label: 'Join Requests', path: '/admin/requests' },
  { icon: 'fa-tag', label: 'Pricing Rules', path: '/admin/pricing' },
  { icon: 'fa-check-circle', label: 'Clearances', path: '/admin/clearances' },
  { icon: 'fa-map-marker-alt', label: 'Live Tracking', path: '/admin/tracking' },
  { icon: 'fa-chart-line', label: 'Reports', path: '/admin/reports' },
]

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [editingPrice, setEditingPrice] = useState<string | null>(null)

  const pricingRules = [
    { id: 'p1', route: 'Nairobi → Kampala', baseRate: 60, borderFee: 5000, customsFee: 3000, weightCharge: 2 },
    { id: 'p2', route: 'Nairobi → Dar es Salaam', baseRate: 55, borderFee: 4500, customsFee: 3500, weightCharge: 2 },
    { id: 'p3', route: 'Mombasa → Nairobi', baseRate: 40, borderFee: 0, customsFee: 0, weightCharge: 1.5 },
  ]

  const shipments = [
    { id: 'MLY-2841', customer: 'Jane Mwangi', from: 'Nairobi', to: 'Kampala', status: 'In Transit', price: 'KES 42,000', transporter: 'John Otieno' },
    { id: 'MLY-2839', customer: 'Peter Kamau', from: 'Mombasa', to: 'Nairobi', status: 'Delivered', price: 'KES 85,000', transporter: 'James Otieno' },
  ]

  const joinRequests = [
    { id: 'r1', name: 'Otieno Logistics', contact: 'John Otieno', email: 'john@otieno.com', type: 'Transporter', status: 'Pending' },
    { id: 'r2', name: 'Wambui Enterprises', contact: 'Mary Wambui', email: 'mary@wambui.com', type: 'Customer', status: 'Pending' },
  ]

  const stats = { totalShipments: 156, activeShipments: 23, totalUsers: 1245, totalTransporters: 45, revenue: 2845000, pendingRequests: 2 }

  const handleUpdatePricing = (id: string, field: string, value: number) => {
    alert(`✅ Updated ${field} to KES ${value.toLocaleString()}`)
    setEditingPrice(null)
  }

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
              <div className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-blue-500"><p className="text-gray-500 text-sm">Total Shipments</p><p className="text-3xl font-bold">{stats.totalShipments}</p></div>
              <div className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-green-500"><p className="text-gray-500 text-sm">Active Shipments</p><p className="text-3xl font-bold">{stats.activeShipments}</p></div>
              <div className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-purple-500"><p className="text-gray-500 text-sm">Total Users</p><p className="text-3xl font-bold">{stats.totalUsers}</p></div>
              <div className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-orange-500"><p className="text-gray-500 text-sm">Transporters</p><p className="text-3xl font-bold">{stats.totalTransporters}</p></div>
              <div className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-red-500"><p className="text-gray-500 text-sm">Revenue</p><p className="text-3xl font-bold">KES {stats.revenue.toLocaleString()}</p></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-6 border-b"><h2 className="text-xl font-semibold">Pending Requests</h2></div>
                <div className="divide-y">
                  {joinRequests.map(r => (
                    <div key={r.id} className="p-4 flex justify-between items-center">
                      <div><p className="font-medium">{r.name}</p><p className="text-sm text-gray-500">{r.contact} • {r.email}</p><p className="text-xs text-gray-400">{r.type}</p></div>
                      <div className="flex gap-2"><button className="bg-green-600 text-white px-3 py-1 rounded text-sm">Approve</button><button className="bg-red-600 text-white px-3 py-1 rounded text-sm">Reject</button></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-6 border-b"><h2 className="text-xl font-semibold">Recent Shipments</h2></div>
                <div className="divide-y">
                  {shipments.map(s => (
                    <div key={s.id} className="p-4 flex justify-between items-center">
                      <div><p className="font-mono text-sm">{s.id}</p><p className="text-sm">{s.customer}</p><p className="text-xs text-gray-500">{s.from} → {s.to}</p></div>
                      <div className="text-right"><span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">{s.status}</span><p className="font-bold text-sm mt-1">{s.price}</p></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      
      case 'shipments':
        return (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b"><h2 className="text-xl font-semibold">All Shipments</h2></div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr><th className="px-6 py-3">ID</th><th className="px-6 py-3">Customer</th><th className="px-6 py-3">Route</th><th className="px-6 py-3">Transporter</th><th className="px-6 py-3">Status</th><th className="px-6 py-3">Price</th><th className="px-6 py-3">Action</th></tr>
                </thead>
                <tbody className="divide-y">
                  {shipments.map(s => (
                    <tr key={s.id}>
                      <td className="px-6 py-4 font-mono text-sm">{s.id}</td>
                      <td className="px-6 py-4">{s.customer}</td>
                      <td className="px-6 py-4">{s.from} → {s.to}</td>
                      <td className="px-6 py-4">{s.transporter}</td>
                      <td className="px-6 py-4">
                        <select className="px-2 py-1 border rounded text-sm">
                          <option>Pending</option><option>Assigned</option><option>In Transit</option><option>Delivered</option>
                        </select>
                      </td>
                      <td className="px-6 py-4">{s.price}</td>
                      <td className="px-6 py-4"><button className="text-blue-600 text-sm">Update</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )
      
      case 'pricing':
        return (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b flex justify-between">
              <h2 className="text-xl font-semibold">Pricing Rules (Click to edit)</h2>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm"><i className="fas fa-plus mr-2" />Add Rule</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr><th className="px-6 py-3">Route</th><th className="px-6 py-3">Base Rate/km</th><th className="px-6 py-3">Border Fee</th><th className="px-6 py-3">Customs Fee</th><th className="px-6 py-3">Weight Charge/kg</th><th className="px-6 py-3">Action</th></tr>
                </thead>
                <tbody className="divide-y">
                  {pricingRules.map(rule => (
                    <tr key={rule.id}>
                      <td className="px-6 py-4">{rule.route}</td>
                      <td className="px-6 py-4">{editingPrice === `${rule.id}-rate` ? <input type="number" defaultValue={rule.baseRate} className="w-20 p-1 border rounded" onBlur={e => handleUpdatePricing(rule.id, 'Base Rate', Number(e.target.value))} autoFocus /> : <span onClick={() => setEditingPrice(`${rule.id}-rate`)} className="cursor-pointer text-blue-600">KES {rule.baseRate}</span>}</td>
                      <td className="px-6 py-4">{editingPrice === `${rule.id}-border` ? <input type="number" defaultValue={rule.borderFee} className="w-24 p-1 border rounded" onBlur={e => handleUpdatePricing(rule.id, 'Border Fee', Number(e.target.value))} /> : <span onClick={() => setEditingPrice(`${rule.id}-border`)} className="cursor-pointer text-blue-600">KES {rule.borderFee.toLocaleString()}</span>}</td>
                      <td className="px-6 py-4">{editingPrice === `${rule.id}-customs` ? <input type="number" defaultValue={rule.customsFee} className="w-24 p-1 border rounded" onBlur={e => handleUpdatePricing(rule.id, 'Customs Fee', Number(e.target.value))} /> : <span onClick={() => setEditingPrice(`${rule.id}-customs`)} className="cursor-pointer text-blue-600">KES {rule.customsFee.toLocaleString()}</span>}</td>
                      <td className="px-6 py-4">{editingPrice === `${rule.id}-weight` ? <input type="number" defaultValue={rule.weightCharge} className="w-20 p-1 border rounded" step="0.5" onBlur={e => handleUpdatePricing(rule.id, 'Weight Charge', Number(e.target.value))} /> : <span onClick={() => setEditingPrice(`${rule.id}-weight`)} className="cursor-pointer text-blue-600">KES {rule.weightCharge}</span>}</td>
                      <td className="px-6 py-4"><button className="text-red-600"><i className="fas fa-trash" /></button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-6 bg-blue-50"><h3 className="font-semibold mb-2">Pricing Formula</h3><p className="text-sm">Total = (Distance × Base Rate) + (Weight × Weight Charge) + Border Fee + Customs Fee</p><p className="text-xs text-gray-500 mt-2">Example: Nairobi → Kampala (700km), 2000kg = KES 54,000</p></div>
          </div>
        )
      
      case 'requests':
        return (
          <div className="space-y-4">
            {joinRequests.map(r => (
              <div key={r.id} className="bg-white rounded-xl shadow-sm p-5">
                <div className="flex justify-between items-start">
                  <div><h3 className="font-bold text-lg">{r.name}</h3><p className="text-gray-600">{r.contact} • {r.email}</p><p className="text-sm text-gray-500 mt-1">Type: {r.type}</p><div className="mt-2 flex gap-1"><span className="text-xs bg-gray-100 px-2 py-1 rounded">📄 License</span><span className="text-xs bg-gray-100 px-2 py-1 rounded">📄 Insurance</span></div></div>
                  <div className="flex gap-2"><button className="bg-green-600 text-white px-4 py-2 rounded">Approve</button><button className="bg-red-600 text-white px-4 py-2 rounded">Reject</button></div>
                </div>
              </div>
            ))}
          </div>
        )
      
      case 'clearances':
        return (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b"><h2 className="text-xl font-semibold">Pending Clearances</h2></div>
            <div className="divide-y">
              {shipments.filter(s => s.status === 'Delivered').map(s => (
                <div key={s.id} className="p-4 flex justify-between items-center">
                  <div><p className="font-mono text-sm">{s.id}</p><p className="text-sm">{s.customer}</p><p className="text-xs text-gray-500">{s.from} → {s.to}</p></div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm">Complete Clearance</button>
                </div>
              ))}
            </div>
          </div>
        )
      
      case 'tracking':
        return (
          <div className="space-y-4">
            {shipments.filter(s => s.status === 'In Transit').map(s => (
              <div key={s.id} className="bg-white rounded-xl shadow-sm p-5">
                <div className="flex justify-between">
                  <div><p className="font-mono text-sm">{s.id}</p><p className="font-semibold">{s.from} → {s.to}</p><p className="text-sm text-gray-500">{s.customer} • {s.transporter}</p><div className="mt-2"><div className="flex items-center gap-2"><i className="fas fa-circle text-green-500 text-xs" /><span className="text-sm">In Transit</span></div><p className="text-sm text-gray-500 mt-1">📍 Malaba Border</p></div></div>
                  <div className="text-right"><p className="font-bold">{s.price}</p><p className="text-xs text-gray-400">Last update: Today 14:30</p></div>
                </div>
              </div>
            ))}
          </div>
        )
      
      default: return null
    }
  }

  return (
    <DashboardLayout title="Admin Dashboard" menuItems={menuItems} role="admin">
      <div className="mb-6 border-b overflow-x-auto">
        <div className="flex gap-1 min-w-max">
          {menuItems.map(item => (
            <button key={item.path} onClick={() => setActiveTab(item.path.replace('/admin/', ''))} className={`px-5 py-3 font-medium ${activeTab === item.path.replace('/admin/', '') ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}>
              <i className={`fas ${item.icon} mr-2`} /> {item.label}
            </button>
          ))}
        </div>
      </div>
      {renderContent()}
    </DashboardLayout>
  )
}
