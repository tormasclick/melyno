import { DashboardLayout } from '../layouts/DashboardLayout'
import { useState } from 'react'

const menuItems = [
  { icon: 'fa-tachometer-alt', label: 'Dashboard', path: '/dashboard' },
  { icon: 'fa-plus-circle', label: 'New Shipment', path: '/dashboard/new-shipment' },
  { icon: 'fa-box', label: 'My Shipments', path: '/dashboard/my-shipments' },
  { icon: 'fa-map-marker-alt', label: 'Track Shipments', path: '/dashboard/track' },
  { icon: 'fa-calculator', label: 'Pricing Calculator', path: '/dashboard/pricing' },
  { icon: 'fa-user', label: 'Profile', path: '/dashboard/profile' },
]

export function CustomerDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const shipments = [
    { id: 'MLY-2841', from: 'Nairobi', to: 'Kampala', goods: 'Electronics', weight: '500kg', status: 'In Transit', price: 'KES 42,000', location: 'Malaba Border', eta: '2 hours' },
    { id: 'MLY-2839', from: 'Mombasa', to: 'Nairobi', goods: 'Container', weight: '2000kg', status: 'Delivered', price: 'KES 85,000', location: 'Nairobi', eta: 'Delivered' },
  ]

  const stats = {
    active: shipments.filter(s => s.status === 'In Transit').length,
    delivered: shipments.filter(s => s.status === 'Delivered').length,
    totalSpent: 127000
  }

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-blue-500">
                <p className="text-gray-500 text-sm">Active Shipments</p>
                <p className="text-3xl font-bold">{stats.active}</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-green-500">
                <p className="text-gray-500 text-sm">Delivered</p>
                <p className="text-3xl font-bold">{stats.delivered}</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-purple-500">
                <p className="text-gray-500 text-sm">Total Spent</p>
                <p className="text-3xl font-bold">KES {stats.totalSpent.toLocaleString()}</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6 border-b flex justify-between items-center">
                <h2 className="text-xl font-semibold">Recent Shipments</h2>
                <button onClick={() => setActiveTab('new-shipment')} className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">+ New Shipment</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr><th className="px-6 py-3 text-left">ID</th><th className="px-6 py-3 text-left">Route</th><th className="px-6 py-3 text-left">Goods</th><th className="px-6 py-3 text-left">Status</th><th className="px-6 py-3 text-left">Price</th></tr>
                  </thead>
                  <tbody className="divide-y">
                    {shipments.map(s => (
                      <tr key={s.id}>
                        <td className="px-6 py-4 font-mono text-sm">{s.id}</td>
                        <td className="px-6 py-4">{s.from} → {s.to}</td>
                        <td className="px-6 py-4">{s.goods} ({s.weight})</td>
                        <td className="px-6 py-4"><span className={`px-2 py-1 rounded-full text-xs ${s.status === 'In Transit' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>{s.status}</span></td>
                        <td className="px-6 py-4 font-semibold">{s.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )
      default:
        return <div className="bg-white rounded-xl p-6"><p className="text-center text-gray-500">Content for {activeTab} coming soon</p></div>
    }
  }

  return (
    <DashboardLayout title="Customer Dashboard" menuItems={menuItems} role="customer">
      <div className="mb-6 border-b">
        <div className="flex gap-1">
          {menuItems.map(item => (
            <button key={item.path} onClick={() => setActiveTab(item.path.replace('/dashboard/', ''))} className={`px-5 py-3 font-medium ${activeTab === item.path.replace('/dashboard/', '') ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}>
              <i className={`fas ${item.icon} mr-2`} /> {item.label}
            </button>
          ))}
        </div>
      </div>
      {renderContent()}
    </DashboardLayout>
  )
}
