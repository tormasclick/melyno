import { createFileRoute, useSearch } from "@tanstack/react-router";
import { AppLayout } from "@/components/AppLayout";
import { useState, useEffect } from "react";
import { getShipments, updateShipmentStatus, subscribe, Shipment } from "@/store/dataStore";

export const Route = createFileRoute("/provider")({
  component: ProviderDashboard,
});

function ProviderDashboard() {
  const search = useSearch({ from: "/provider" }) as { tab?: string };
  const [activeTab, setActiveTab] = useState(search?.tab || 'dashboard');
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [selectedShipment, setSelectedShipment] = useState<string | null>(null);
  const [newLocation, setNewLocation] = useState('');
  const [newStatus, setNewStatus] = useState('');

  useEffect(() => {
    setShipments(getShipments());
    const unsubscribe = subscribe(() => setShipments(getShipments()));
    return unsubscribe;
  }, []);

  const availableJobs = shipments.filter(s => s.status === 'pending');
  const myShipments = shipments.filter(s => s.transporterName === 'John Otieno' || s.status === 'assigned');
  const completedJobs = shipments.filter(s => s.transporterName === 'John Otieno' && s.status === 'delivered');
  const earnings = myShipments.reduce((sum, s) => sum + s.price, 0);

  const handleAcceptJob = (id: string) => {
    updateShipmentStatus(id, 'assigned', 'Nairobi Depot');
    alert('✅ Job accepted! You can now track this shipment.');
  };

  const handleUpdateTracking = (id: string) => {
    if (newLocation && newStatus) {
      updateShipmentStatus(id, newStatus as any, newLocation);
      setSelectedShipment(null);
      setNewLocation('');
      setNewStatus('');
      alert('✅ Location updated! Customer can now see the update.');
    }
  };

  const statusOptions = [
    { value: 'picked_up', label: 'Picked Up' },
    { value: 'in_transit', label: 'In Transit' },
    { value: 'at_border', label: 'At Border' },
    { value: 'customs_clearance', label: 'Customs Clearance' },
    { value: 'crossed_border', label: 'Crossed Border' },
    { value: 'out_for_delivery', label: 'Out for Delivery' },
    { value: 'delivered', label: 'Delivered' },
  ];

  const locations = ['Nairobi', 'Mombasa', 'Kampala', 'Dar es Salaam', 'Kigali', 'Malaba Border', 'Busia Border', 'Namanga Border'];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-blue-500"><p className="text-gray-500">Available Jobs</p><p className="text-2xl font-bold">{availableJobs.length}</p></div>
            <div className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-green-500"><p className="text-gray-500">Active Shipments</p><p className="text-2xl font-bold">{myShipments.filter(s => s.status !== 'delivered').length}</p></div>
            <div className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-purple-500"><p className="text-gray-500">Completed</p><p className="text-2xl font-bold">{completedJobs.length}</p></div>
            <div className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-orange-500"><p className="text-gray-500">Earnings</p><p className="text-2xl font-bold">KES {earnings.toLocaleString()}</p></div>
          </div>
        );
      
      case 'available':
        return (
          <div className="space-y-4">
            {availableJobs.map(job => (
              <div key={job.id} className="bg-white rounded-xl shadow-sm p-5">
                <div className="flex justify-between items-start">
                  <div><p className="font-mono text-sm text-gray-500">{job.trackingId}</p><p className="font-bold">{job.from} → {job.to}</p><p className="text-gray-600">{job.customerName} • {job.goods} • {job.weight}kg</p><p className="text-lg font-bold text-primary mt-2">KES {job.price.toLocaleString()}</p></div>
                  <button onClick={() => handleAcceptJob(job.id)} className="bg-green-500 text-white px-6 py-2 rounded-lg">Accept Job</button>
                </div>
              </div>
            ))}
            {availableJobs.length === 0 && <div className="text-center py-12 bg-white rounded-xl"><p className="text-gray-500">No available jobs at the moment</p></div>}
          </div>
        );
      
      case 'active':
        return (
          <div className="space-y-4">
            {myShipments.filter(s => s.status !== 'delivered').map(s => (
              <div key={s.id} className="bg-white rounded-xl shadow-sm p-5">
                <div className="flex justify-between"><div><p className="font-mono text-sm">{s.trackingId}</p><p className="font-semibold">{s.from} → {s.to}</p><p className="text-sm text-gray-600">{s.customerName} • {s.goods} • {s.weight}kg</p><div className="mt-2 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div><span className="text-sm">{s.status.replace(/_/g, ' ')}</span><span className="text-gray-400">📍 {s.location}</span></div></div><div className="text-right"><p className="font-bold text-primary">KES {s.price.toLocaleString()}</p><button onClick={() => setSelectedShipment(s.id)} className="text-blue-500 text-sm mt-2">Update Location</button></div></div>
                {selectedShipment === s.id && (<div className="mt-4 pt-4 border-t"><div className="grid grid-cols-2 gap-3"><select onChange={e => setNewStatus(e.target.value)} className="p-2 border rounded"><option value="">Select Status</option>{statusOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}</select><select onChange={e => setNewLocation(e.target.value)} className="p-2 border rounded"><option value="">Select Location</option>{locations.map(l => <option key={l} value={l}>{l}</option>)}</select></div><button onClick={() => handleUpdateTracking(s.id)} className="mt-3 w-full bg-blue-500 text-white py-2 rounded">Update Tracking</button></div>)}
              </div>
            ))}
          </div>
        );
      
      case 'clearance':
        return (
          <div className="space-y-4">
            {myShipments.filter(s => s.status === 'delivered' && s.status !== 'cleared').map(s => (
              <div key={s.id} className="bg-white rounded-xl shadow-sm p-5"><div className="flex justify-between items-center"><div><p className="font-mono text-sm">{s.trackingId}</p><p>{s.customerName}</p><p className="text-sm text-gray-500">{s.from} → {s.to}</p></div><button onClick={() => { updateShipmentStatus(s.id, 'cleared', s.location); alert('✅ Clearance submitted! Customer notified.'); }} className="bg-green-500 text-white px-4 py-2 rounded">Submit Clearance</button></div></div>
            ))}
          </div>
        );
      
      case 'earnings':
        return (
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-sm p-5"><h3 className="font-bold text-lg mb-2">Total Earnings: KES {earnings.toLocaleString()}</h3><div className="space-y-2">{completedJobs.map(j => (<div key={j.id} className="flex justify-between py-2 border-b"><span>{j.trackingId} - {j.from} → {j.to}</span><span className="font-bold">KES {j.price.toLocaleString()}</span></div>))}</div></div>
          </div>
        );
      
      case 'tracking':
        return (
          <div className="space-y-4">
            {myShipments.filter(s => s.status !== 'delivered').map(s => (
              <div key={s.id} className="bg-white rounded-xl shadow-sm p-5"><div className="flex justify-between"><div><p className="font-mono text-sm">{s.trackingId}</p><p className="font-semibold">{s.from} → {s.to}</p><div className="mt-2"><div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div><span className="text-sm">{s.status.replace(/_/g, ' ')}</span></div><p className="text-sm text-gray-500 mt-1">📍 {s.location}</p><p className="text-xs text-gray-400">Last updated: {s.lastUpdate}</p></div></div><div className="text-right"><p className="font-bold">KES {s.price.toLocaleString()}</p><p className="text-sm text-gray-500">{s.customerName}</p></div></div></div>
            ))}
          </div>
        );
      
      case 'vehicles':
        return (
          <div className="bg-white rounded-xl shadow-sm p-5"><h3 className="font-bold mb-4">My Vehicles</h3><div className="space-y-3"><div className="flex justify-between p-3 bg-gray-50 rounded"><div><p className="font-mono font-bold">KCA 234X</p><p className="text-sm">Semi Trailer • 20,000 kg capacity</p></div><span className="text-green-600">Available</span></div><div className="flex justify-between p-3 bg-gray-50 rounded"><div><p className="font-mono font-bold">KCD 567Y</p><p className="text-sm">Box Truck • 5,000 kg capacity</p></div><span className="text-yellow-600">In Transit</span></div></div><button className="mt-4 w-full border-2 border-dashed border-gray-300 py-3 rounded text-gray-500">+ Add New Vehicle</button></div>
        );
      
      default: return <div>Select a tab</div>;
    }
  };

  return (
    <AppLayout title="Transporter Dashboard" role="transporter">
      <div className="mb-6 flex gap-2 border-b">
        {['dashboard', 'available', 'active', 'clearance', 'earnings', 'tracking', 'vehicles'].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 font-medium ${activeTab === tab ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}>
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      {renderContent()}
    </AppLayout>
  );
}
