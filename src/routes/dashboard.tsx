import { createFileRoute, useSearch } from "@tanstack/react-router";
import { AppLayout } from "@/components/AppLayout";
import { useState, useEffect } from "react";
import { getShipments, addShipment, subscribe, Shipment } from "@/store/dataStore";

export const Route = createFileRoute("/dashboard")({
  component: CustomerDashboard,
});

function CustomerDashboard() {
  const search = useSearch({ from: "/dashboard" }) as { tab?: string };
  const [activeTab, setActiveTab] = useState(search?.tab || 'dashboard');
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [showNewShipment, setShowNewShipment] = useState(false);
  const [newShipment, setNewShipment] = useState({ customerName: 'Jane Mwangi', customerEmail: 'jane@example.com', from: '', to: '', goods: '', weight: 0, price: 0 });

  useEffect(() => {
    setShipments(getShipments().filter(s => s.customerName === 'Jane Mwangi'));
    const unsubscribe = subscribe(() => setShipments(getShipments().filter(s => s.customerName === 'Jane Mwangi')));
    return unsubscribe;
  }, []);

  const handleCreateShipment = () => {
    addShipment(newShipment);
    setShowNewShipment(false);
    setNewShipment({ customerName: 'Jane Mwangi', customerEmail: 'jane@example.com', from: '', to: '', goods: '', weight: 0, price: 0 });
    alert('✅ Shipment request submitted! Admin will assign a transporter.');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (<div className="grid grid-cols-1 md:grid-cols-3 gap-4"><div className="bg-white rounded-xl p-5 shadow-sm"><p className="text-gray-500">Active Shipments</p><p className="text-2xl font-bold">{shipments.filter(s => s.status !== 'delivered').length}</p></div><div className="bg-white rounded-xl p-5 shadow-sm"><p className="text-gray-500">Delivered</p><p className="text-2xl font-bold">{shipments.filter(s => s.status === 'delivered').length}</p></div><div className="bg-white rounded-xl p-5 shadow-sm"><p className="text-gray-500">Total Spent</p><p className="text-2xl font-bold">KES {shipments.reduce((sum, s) => sum + s.price, 0).toLocaleString()}</p></div></div>);
      case 'new':
        return (<div className="bg-white rounded-xl shadow-sm p-6"><h2 className="text-xl font-bold mb-4">Request New Shipment</h2><div className="space-y-4"><input type="text" placeholder="From" className="w-full p-3 border rounded" onChange={e => setNewShipment({...newShipment, from: e.target.value})} /><input type="text" placeholder="To" className="w-full p-3 border rounded" onChange={e => setNewShipment({...newShipment, to: e.target.value})} /><input type="text" placeholder="Goods Description" className="w-full p-3 border rounded" onChange={e => setNewShipment({...newShipment, goods: e.target.value})} /><input type="number" placeholder="Weight (kg)" className="w-full p-3 border rounded" onChange={e => setNewShipment({...newShipment, weight: Number(e.target.value)})} /><input type="number" placeholder="Estimated Price (KES)" className="w-full p-3 border rounded" onChange={e => setNewShipment({...newShipment, price: Number(e.target.value)})} /><button onClick={handleCreateShipment} className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold">Submit Request</button></div></div>);
      case 'shipments':
        return (<div className="space-y-4">{shipments.map(s => (<div key={s.id} className="bg-white rounded-xl shadow-sm p-5"><div className="flex justify-between"><div><p className="font-mono text-sm">{s.trackingId}</p><p className="font-semibold">{s.from} → {s.to}</p><p className="text-gray-600">{s.goods} • {s.weight}kg</p><p className="text-sm text-gray-500 mt-1">Status: {s.status.replace(/_/g, ' ')}</p></div><div className="text-right"><p className="font-bold text-primary">KES {s.price.toLocaleString()}</p>{s.transporterName && <p className="text-sm text-gray-500">🚚 {s.transporterName}</p>}</div></div></div>))}</div>);
      case 'tracking':
        return (<div className="space-y-4">{shipments.filter(s => s.status !== 'delivered').map(s => (<div key={s.id} className="bg-white rounded-xl shadow-sm p-5"><div className="flex items-center gap-4"><div className="flex-1"><p className="font-mono text-sm">{s.trackingId}</p><p className="font-semibold">{s.from} → {s.to}</p><div className="mt-2 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div><span className="text-sm">{s.status.replace(/_/g, ' ')}</span></div><p className="text-sm text-gray-500 mt-1">📍 {s.location}</p><p className="text-xs text-gray-400">Last update: {s.lastUpdate}</p></div><div className="text-right"><p className="font-bold">KES {s.price.toLocaleString()}</p></div></div></div>))}</div>);
      default: return null;
    }
  };

  return (
    <AppLayout title="Customer Dashboard" role="customer">
      <div className="mb-6 flex gap-2 border-b">
        {['dashboard', 'new', 'shipments', 'tracking'].map(tab => (<button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 font-medium ${activeTab === tab ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}>{tab.charAt(0).toUpperCase() + tab.slice(1)}</button>))}
      </div>
      {renderContent()}
    </AppLayout>
  );
}
