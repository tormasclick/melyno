import { createFileRoute, useSearch } from "@tanstack/react-router";
import { AppLayout } from "@/components/AppLayout";
import { useState, useEffect } from "react";
import { 
  getShipments, getJoinRequests, getPricingRules, getStats,
  updateShipmentStatus, approveRequest, rejectRequest, addClearance,
  updatePricingRule, addPricingRule, subscribe, Shipment, JoinRequest, PricingRule
} from "@/store/dataStore";

export const Route = createFileRoute("/super-admin")({
  component: SuperAdminDashboard,
});

function SuperAdminDashboard() {
  const search = useSearch({ from: "/super-admin" }) as { tab?: string };
  const [activeTab, setActiveTab] = useState(search?.tab || 'dashboard');
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [requests, setRequests] = useState<JoinRequest[]>([]);
  const [pricingRules, setPricingRules] = useState<PricingRule[]>([]);
  const [stats, setStats] = useState({ total: 0, active: 0, pending: 0, inTransit: 0, delivered: 0, cleared: 0, revenue: 0, pendingRequests: 0 });
  const [showClearanceModal, setShowClearanceModal] = useState<string | null>(null);
  const [showAddPricing, setShowAddPricing] = useState(false);
  const [editingField, setEditingField] = useState<string | null>(null);
  const [newRule, setNewRule] = useState({ origin: '', destination: '', baseRate: 0, borderFee: 0, customsFee: 0, weightCharge: 0 });

  useEffect(() => {
    setShipments(getShipments());
    setRequests(getJoinRequests());
    setPricingRules(getPricingRules());
    setStats(getStats());
    const unsubscribe = subscribe(() => {
      setShipments(getShipments());
      setRequests(getJoinRequests());
      setPricingRules(getPricingRules());
      setStats(getStats());
    });
    return unsubscribe;
  }, []);

  const handleStatusUpdate = (id: string, status: Shipment['status'], location: string) => {
    updateShipmentStatus(id, status, location);
    alert(`✅ Shipment updated to ${status.replace(/_/g, ' ')} at ${location}`);
  };

  const handleClearance = (shipmentId: string) => {
    addClearance(shipmentId, 'proof_image.jpg');
    setShowClearanceModal(null);
    alert('✅ Goods cleared! Customer has been notified.');
  };

  const handleApprove = (id: string) => {
    approveRequest(id);
    alert('✅ Request approved! Email sent to user.');
  };

  const handleReject = (id: string) => {
    rejectRequest(id);
    alert('❌ Request rejected.');
  };

  const statusOptions = [
    { value: 'pending', label: 'Pending' }, { value: 'assigned', label: 'Assigned' },
    { value: 'picked_up', label: 'Picked Up' }, { value: 'in_transit', label: 'In Transit' },
    { value: 'at_border', label: 'At Border' }, { value: 'customs_clearance', label: 'Customs Clearance' },
    { value: 'crossed_border', label: 'Crossed Border' }, { value: 'out_for_delivery', label: 'Out for Delivery' },
    { value: 'delivered', label: 'Delivered' },
  ];

  const locations = ['Nairobi', 'Mombasa', 'Kampala', 'Dar es Salaam', 'Kigali', 'Juba', 'Malaba Border', 'Busia Border'];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-blue-500"><p className="text-gray-500">Total Shipments</p><p className="text-2xl font-bold">{stats.total}</p></div>
            <div className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-green-500"><p className="text-gray-500">Active Shipments</p><p className="text-2xl font-bold">{stats.active}</p></div>
            <div className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-purple-500"><p className="text-gray-500">Pending Requests</p><p className="text-2xl font-bold">{stats.pendingRequests}</p></div>
            <div className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-orange-500"><p className="text-gray-500">Revenue</p><p className="text-2xl font-bold">KES {stats.revenue.toLocaleString()}</p></div>
          </div>
        );
      
      case 'shipments':
        return (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-4 border-b"><h2 className="font-semibold">All Shipments</h2></div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50"><tr><th className="px-4 py-3 text-left">ID</th><th className="px-4 py-3 text-left">Customer</th><th className="px-4 py-3 text-left">Route</th><th className="px-4 py-3 text-left">Goods</th><th className="px-4 py-3 text-left">Status</th><th className="px-4 py-3 text-left">Location</th><th className="px-4 py-3 text-left">Price</th><th className="px-4 py-3 text-left">Action</th></tr></thead>
                <tbody className="divide-y">
                  {shipments.map(s => (
                    <tr key={s.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-mono text-sm">{s.trackingId}</td>
                      <td className="px-4 py-3">{s.customerName}</td>
                      <td className="px-4 py-3">{s.from} → {s.to}</td>
                      <td className="px-4 py-3">{s.goods} ({s.weight}kg)</td>
                      <td className="px-4 py-3"><select value={s.status} onChange={e => handleStatusUpdate(s.id, e.target.value as any, s.location)} className="px-2 py-1 border rounded text-sm">{statusOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}</select></td>
                      <td className="px-4 py-3"><select value={s.location} onChange={e => handleStatusUpdate(s.id, s.status, e.target.value)} className="px-2 py-1 border rounded text-sm">{locations.map(l => <option key={l} value={l}>{l}</option>)}</select></td>
                      <td className="px-4 py-3">KES {s.price.toLocaleString()}</td>
                      <td className="px-4 py-3">{s.status !== 'delivered' && <button onClick={() => setShowClearanceModal(s.id)} className="text-green-600 text-sm">✅ Clear</button>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      
      case 'requests':
        return (
          <div className="space-y-4">
            {requests.filter(r => r.status === 'pending').map(req => (
              <div key={req.id} className="bg-white rounded-xl shadow-sm p-5">
                <div className="flex justify-between items-start">
                  <div><h3 className="font-bold text-lg">{req.company}</h3><p className="text-gray-600">{req.name} • {req.email} • {req.phone}</p><p className="text-sm text-gray-500 mt-1">Role: {req.role} • Submitted: {req.submittedAt}</p><div className="mt-2 flex gap-1">{req.documents.map(d => <span key={d} className="text-xs bg-gray-100 px-2 py-1 rounded">📄 {d}</span>)}</div></div>
                  <div className="flex gap-2"><button onClick={() => handleApprove(req.id)} className="bg-green-500 text-white px-4 py-2 rounded">Approve</button><button onClick={() => handleReject(req.id)} className="bg-red-500 text-white px-4 py-2 rounded">Reject</button></div>
                </div>
              </div>
            ))}
            {requests.filter(r => r.status === 'pending').length === 0 && <div className="text-center py-12 bg-white rounded-xl"><p className="text-gray-500">No pending requests</p></div>}
          </div>
        );
      
      case 'clearances':
        return (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-4 border-b"><h2 className="font-semibold">Pending Clearances</h2></div>
            <div className="divide-y">
              {shipments.filter(s => s.status === 'delivered' && s.status !== 'cleared').map(s => (
                <div key={s.id} className="p-4 flex justify-between items-center">
                  <div><p className="font-mono text-sm">{s.trackingId}</p><p>{s.customerName} - {s.from} → {s.to}</p></div>
                  <button onClick={() => setShowClearanceModal(s.id)} className="bg-blue-500 text-white px-4 py-2 rounded">📋 Complete Clearance</button>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'pricing':
        return (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-4 border-b flex justify-between"><h2 className="font-semibold">Pricing Rules (Click to edit)</h2><button onClick={() => setShowAddPricing(true)} className="bg-green-500 text-white px-3 py-1 rounded text-sm">+ Add</button></div>
            <div className="overflow-x-auto">
              <table className="w-full"><thead className="bg-gray-50"><tr><th className="px-4 py-3">Route</th><th className="px-4 py-3">Base Rate/km</th><th className="px-4 py-3">Border Fee</th><th className="px-4 py-3">Customs Fee</th><th className="px-4 py-3">Weight Charge/kg</th></tr></thead>
              <tbody className="divide-y">{pricingRules.map(rule => (<tr key={rule.id}><td className="px-4 py-3">{rule.origin} → {rule.destination}</td>
              <td className="px-4 py-3">{editingField === `${rule.id}-rate` ? <input type="number" defaultValue={rule.baseRate} className="w-20 p-1 border rounded" onBlur={e => { updatePricingRule(rule.id, 'baseRate', Number(e.target.value)); setEditingField(null); }} autoFocus /> : <span onClick={() => setEditingField(`${rule.id}-rate`)} className="cursor-pointer text-blue-600">KES {rule.baseRate}</span>}</td>
              <td className="px-4 py-3">{editingField === `${rule.id}-border` ? <input type="number" defaultValue={rule.borderFee} className="w-24 p-1 border rounded" onBlur={e => { updatePricingRule(rule.id, 'borderFee', Number(e.target.value)); setEditingField(null); }} /> : <span onClick={() => setEditingField(`${rule.id}-border`)} className="cursor-pointer text-blue-600">KES {rule.borderFee}</span>}</td>
              <td className="px-4 py-3">{editingField === `${rule.id}-customs` ? <input type="number" defaultValue={rule.customsFee} className="w-24 p-1 border rounded" onBlur={e => { updatePricingRule(rule.id, 'customsFee', Number(e.target.value)); setEditingField(null); }} /> : <span onClick={() => setEditingField(`${rule.id}-customs`)} className="cursor-pointer text-blue-600">KES {rule.customsFee}</span>}</td>
              <td className="px-4 py-3">{editingField === `${rule.id}-weight` ? <input type="number" defaultValue={rule.weightCharge} className="w-20 p-1 border rounded" step="0.5" onBlur={e => { updatePricingRule(rule.id, 'weightCharge', Number(e.target.value)); setEditingField(null); }} /> : <span onClick={() => setEditingField(`${rule.id}-weight`)} className="cursor-pointer text-blue-600">KES {rule.weightCharge}</span>}</td></tr>))}</tbody></table>
            </div>
          </div>
        );
      
      case 'tracking':
        return (
          <div className="space-y-4">
            {shipments.filter(s => s.status !== 'delivered').map(s => (
              <div key={s.id} className="bg-white rounded-xl shadow-sm p-4">
                <div className="flex justify-between"><div><p className="font-mono text-sm">{s.trackingId}</p><p className="font-semibold">{s.from} → {s.to}</p><p className="text-sm text-gray-600">{s.customerName} • {s.goods}</p></div><div className="text-right"><p className="font-bold">KES {s.price.toLocaleString()}</p><p className="text-sm text-gray-500">{s.transporterName || 'Unassigned'}</p></div></div>
                <div className="mt-3 pt-3 border-t flex items-center gap-2"><div className={`w-2 h-2 rounded-full ${s.status === 'in_transit' ? 'bg-green-500 animate-pulse' : 'bg-yellow-500'}`}></div><span className="text-sm">{s.status.replace(/_/g, ' ')}</span><span className="text-gray-400">•</span><span className="text-sm">📍 {s.location}</span><span className="text-gray-400">•</span><span className="text-sm">🕐 {s.lastUpdate}</span></div>
              </div>
            ))}
          </div>
        );
      
      case 'users':
        return (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-4 border-b"><h2 className="font-semibold">Approved Users</h2></div>
            <div className="divide-y">{requests.filter(r => r.status === 'approved').map(u => (<div key={u.id} className="p-4 flex justify-between"><div><p className="font-semibold">{u.name}</p><p className="text-sm text-gray-500">{u.email} • {u.phone}</p><p className="text-sm">{u.company} • {u.role}</p></div><span className="text-green-600 text-sm">✓ Approved</span></div>))}</div>
          </div>
        );
      
      default: return <div>Select a tab</div>;
    }
  };

  return (
    <AppLayout title="Super Admin Dashboard" role="super_admin">
      <div className="mb-6 flex gap-2 border-b">
        {['dashboard', 'shipments', 'requests', 'pricing', 'clearances', 'tracking', 'users'].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 font-medium ${activeTab === tab ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}>
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      {renderContent()}
      
      {/* Clearance Modal */}
      {showClearanceModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Goods Delivery Clearance</h3>
            <p className="text-gray-600 mb-4">Confirm that goods have been delivered and received in good condition.</p>
            <textarea placeholder="Delivery notes / recipient signature" className="w-full p-2 border rounded mb-4" rows={3}></textarea>
            <div className="flex gap-3"><button onClick={() => handleClearance(showClearanceModal)} className="flex-1 bg-green-500 text-white py-2 rounded">Confirm Delivery</button><button onClick={() => setShowClearanceModal(null)} className="flex-1 border py-2 rounded">Cancel</button></div>
          </div>
        </div>
      )}
      
      {/* Add Pricing Modal */}
      {showAddPricing && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full"><h3 className="text-xl font-bold mb-4">Add Pricing Rule</h3>
            <div className="space-y-3"><input type="text" placeholder="Origin" className="w-full p-2 border rounded" onChange={e => setNewRule({...newRule, origin: e.target.value})} />
            <input type="text" placeholder="Destination" className="w-full p-2 border rounded" onChange={e => setNewRule({...newRule, destination: e.target.value})} />
            <input type="number" placeholder="Base Rate per KM" className="w-full p-2 border rounded" onChange={e => setNewRule({...newRule, baseRate: Number(e.target.value)})} />
            <input type="number" placeholder="Border Fee" className="w-full p-2 border rounded" onChange={e => setNewRule({...newRule, borderFee: Number(e.target.value)})} />
            <input type="number" placeholder="Customs Fee" className="w-full p-2 border rounded" onChange={e => setNewRule({...newRule, customsFee: Number(e.target.value)})} />
            <input type="number" placeholder="Weight Charge per KG" className="w-full p-2 border rounded" onChange={e => setNewRule({...newRule, weightCharge: Number(e.target.value)})} /></div>
            <div className="flex gap-3 mt-6"><button onClick={() => { addPricingRule(newRule); setShowAddPricing(false); alert('Rule added!'); }} className="flex-1 bg-blue-500 text-white py-2 rounded">Add</button><button onClick={() => setShowAddPricing(false)} className="flex-1 border py-2 rounded">Cancel</button></div>
          </div>
        </div>
      )}
    </AppLayout>
  );
}
