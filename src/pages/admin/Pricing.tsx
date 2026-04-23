import { DashboardLayout } from '../../layouts/DashboardLayout'
import { useState } from 'react'

const menuItems = [
  { icon: 'fa-tachometer-alt', label: 'Dashboard', path: '/admin' },
  { icon: 'fa-box', label: 'Shipments', path: '/admin/shipments' },
  { icon: 'fa-users', label: 'Users', path: '/admin/users' },
  { icon: 'fa-handshake', label: 'Requests', path: '/admin/requests' },
  { icon: 'fa-tag', label: 'Pricing', path: '/admin/pricing' },
  { icon: 'fa-check-circle', label: 'Clearances', path: '/admin/clearances' },
  { icon: 'fa-map-marker-alt', label: 'Tracking', path: '/admin/tracking' },
]

export function AdminPricing() {
  const [editingField, setEditingField] = useState<string | null>(null)
  const [pricingRules, setPricingRules] = useState([
    { id: 'p1', route: 'Nairobi → Kampala', baseRate: 60, borderFee: 5000, customsFee: 3000, weightCharge: 2 },
    { id: 'p2', route: 'Nairobi → Dar es Salaam', baseRate: 55, borderFee: 4500, customsFee: 3500, weightCharge: 2 },
  ])

  const handleUpdate = (id: string, field: string, value: number) => {
    setPricingRules(rules => rules.map(rule => rule.id === id ? { ...rule, [field]: value } : rule))
    setEditingField(null)
    alert(`✅ ${field} updated to ${value}`)
  }

  return (
    <DashboardLayout title="Pricing Rules" menuItems={menuItems} role="admin">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 border-b flex justify-between"><h2 className="text-xl font-semibold">Pricing Rules (Click values to edit)</h2><button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm">+ Add Rule</button></div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50"><tr><th className="px-6 py-3">Route</th><th className="px-6 py-3">Base Rate/km</th><th className="px-6 py-3">Border Fee</th><th className="px-6 py-3">Customs Fee</th><th className="px-6 py-3">Weight Charge/kg</th></tr></thead>
            <tbody className="divide-y">{pricingRules.map(rule => (<tr key={rule.id}><td className="px-6 py-4">{rule.route}</td>
            <td className="px-6 py-4">{editingField === `${rule.id}-rate` ? <input type="number" defaultValue={rule.baseRate} className="w-20 p-1 border rounded" onBlur={e => handleUpdate(rule.id, 'baseRate', Number(e.target.value))} autoFocus /> : <span onClick={() => setEditingField(`${rule.id}-rate`)} className="cursor-pointer text-blue-600">KES {rule.baseRate}</span>}</td>
            <td className="px-6 py-4">{editingField === `${rule.id}-border` ? <input type="number" defaultValue={rule.borderFee} className="w-24 p-1 border rounded" onBlur={e => handleUpdate(rule.id, 'borderFee', Number(e.target.value))} /> : <span onClick={() => setEditingField(`${rule.id}-border`)} className="cursor-pointer text-blue-600">KES {rule.borderFee}</span>}</td>
            <td className="px-6 py-4">{editingField === `${rule.id}-customs` ? <input type="number" defaultValue={rule.customsFee} className="w-24 p-1 border rounded" onBlur={e => handleUpdate(rule.id, 'customsFee', Number(e.target.value))} /> : <span onClick={() => setEditingField(`${rule.id}-customs`)} className="cursor-pointer text-blue-600">KES {rule.customsFee}</span>}</td>
            <td className="px-6 py-4">{editingField === `${rule.id}-weight` ? <input type="number" defaultValue={rule.weightCharge} className="w-20 p-1 border rounded" step="0.5" onBlur={e => handleUpdate(rule.id, 'weightCharge', Number(e.target.value))} /> : <span onClick={() => setEditingField(`${rule.id}-weight`)} className="cursor-pointer text-blue-600">KES {rule.weightCharge}</span>}</td></tr>))}</tbody>
          </table>
        </div>
        <div className="p-6 bg-blue-50"><h3 className="font-semibold mb-2">Pricing Formula</h3><p className="text-sm">Total = (Distance × Base Rate) + (Weight × Weight Charge) + Border Fee + Customs Fee</p></div>
      </div>
    </DashboardLayout>
  )
}
