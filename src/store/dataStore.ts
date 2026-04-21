export type ShipmentStatus = 
  | 'pending' | 'assigned' | 'picked_up' | 'in_transit' 
  | 'at_border' | 'customs_clearance' | 'crossed_border' 
  | 'out_for_delivery' | 'delivered' | 'cleared';

export interface Shipment {
  id: string;
  trackingId: string;
  customerName: string;
  customerEmail: string;
  from: string;
  to: string;
  goods: string;
  weight: number;
  status: ShipmentStatus;
  price: number;
  transporterName?: string;
  transporterId?: string;
  lastUpdate: string;
  location: string;
  deliveryProof?: string;
  clearedAt?: string;
}

export interface JoinRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  role: 'customer' | 'transporter';
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: string;
  documents: string[];
}

export interface PricingRule {
  id: string;
  origin: string;
  destination: string;
  baseRate: number;
  borderFee: number;
  customsFee: number;
  weightCharge: number;
}

// Initial data
let shipments: Shipment[] = [
  { id: '1', trackingId: 'MLY-1001', customerName: 'Jane Mwangi', customerEmail: 'jane@example.com', from: 'Nairobi', to: 'Kampala', goods: 'Electronics', weight: 500, status: 'in_transit', price: 42000, transporterName: 'John Otieno', lastUpdate: new Date().toLocaleString(), location: 'Malaba Border' },
  { id: '2', trackingId: 'MLY-1002', customerName: 'Peter Kamau', customerEmail: 'peter@example.com', from: 'Mombasa', to: 'Nairobi', goods: 'Containers', weight: 2000, status: 'pending', price: 85000, lastUpdate: new Date().toLocaleString(), location: 'Mombasa Port' },
  { id: '3', trackingId: 'MLY-1003', customerName: 'Sarah Wanjiku', customerEmail: 'sarah@example.com', from: 'Nairobi', to: 'Dar es Salaam', goods: 'Machinery', weight: 1500, status: 'delivered', price: 120000, transporterName: 'James Otieno', lastUpdate: new Date().toLocaleString(), location: 'Dar es Salaam' },
];

let joinRequests: JoinRequest[] = [
  { id: 'r1', name: 'John Otieno', email: 'john@otieno.com', phone: '+254712345678', company: 'Otieno Logistics', role: 'transporter', status: 'pending', submittedAt: new Date().toLocaleString(), documents: ['license.pdf', 'insurance.pdf'] },
  { id: 'r2', name: 'Mercy Wambui', email: 'mercy@wambui.com', phone: '+254723456789', company: 'Wambui Enterprises', role: 'customer', status: 'pending', submittedAt: new Date().toLocaleString(), documents: ['business_reg.pdf'] },
  { id: 'r3', name: 'Peter Omondi', email: 'peter@omondi.com', phone: '+254734567890', company: 'Omondi Hauliers', role: 'transporter', status: 'pending', submittedAt: new Date().toLocaleString(), documents: ['license.pdf', 'insurance.pdf', 'certificate.pdf'] },
];

let pricingRules: PricingRule[] = [
  { id: 'p1', origin: 'Nairobi', destination: 'Kampala', baseRate: 60, borderFee: 5000, customsFee: 3000, weightCharge: 2 },
  { id: 'p2', origin: 'Nairobi', destination: 'Dar es Salaam', baseRate: 55, borderFee: 4500, customsFee: 3500, weightCharge: 2 },
  { id: 'p3', origin: 'Mombasa', destination: 'Nairobi', baseRate: 40, borderFee: 0, customsFee: 0, weightCharge: 1.5 },
];

let listeners: (() => void)[] = [];

export const subscribe = (listener: () => void) => {
  listeners.push(listener);
  return () => { listeners = listeners.filter(l => l !== listener); };
};

const notify = () => listeners.forEach(l => l());

export const getShipments = () => [...shipments];
export const getJoinRequests = () => [...joinRequests];
export const getPricingRules = () => [...pricingRules];

export const updateShipmentStatus = (id: string, status: ShipmentStatus, location: string) => {
  const s = shipments.find(s => s.id === id);
  if (s) {
    s.status = status;
    s.location = location;
    s.lastUpdate = new Date().toLocaleString();
    notify();
    return true;
  }
  return false;
};

export const addClearance = (shipmentId: string, proofImage: string) => {
  const s = shipments.find(s => s.id === shipmentId);
  if (s) {
    s.status = 'cleared';
    s.deliveryProof = proofImage;
    s.clearedAt = new Date().toLocaleString();
    notify();
    return true;
  }
  return false;
};

export const approveRequest = (id: string) => {
  const request = joinRequests.find(r => r.id === id);
  if (request) {
    request.status = 'approved';
    notify();
    return true;
  }
  return false;
};

export const rejectRequest = (id: string) => {
  const request = joinRequests.find(r => r.id === id);
  if (request) {
    request.status = 'rejected';
    notify();
    return true;
  }
  return false;
};

export const updatePricingRule = (id: string, field: keyof PricingRule, value: number) => {
  const rule = pricingRules.find(r => r.id === id);
  if (rule) {
    (rule as any)[field] = value;
    notify();
    return true;
  }
  return false;
};

export const addPricingRule = (rule: Omit<PricingRule, 'id'>) => {
  const newRule = { ...rule, id: `p${Date.now()}` };
  pricingRules.push(newRule);
  notify();
  return newRule;
};

export const addShipment = (shipment: Omit<Shipment, 'id' | 'trackingId' | 'lastUpdate' | 'status'>) => {
  const newShipment: Shipment = {
    ...shipment,
    id: `${Date.now()}`,
    trackingId: `MLY-${Math.floor(1000 + Math.random() * 9000)}`,
    lastUpdate: new Date().toLocaleString(),
    status: 'pending',
  };
  shipments.unshift(newShipment);
  notify();
  return newShipment;
};

export const getStats = () => {
  return {
    total: shipments.length,
    active: shipments.filter(s => !['delivered', 'cleared'].includes(s.status)).length,
    pending: shipments.filter(s => s.status === 'pending').length,
    inTransit: shipments.filter(s => ['in_transit', 'at_border', 'customs_clearance'].includes(s.status)).length,
    delivered: shipments.filter(s => s.status === 'delivered').length,
    cleared: shipments.filter(s => s.status === 'cleared').length,
    revenue: shipments.reduce((sum, s) => sum + s.price, 0),
    pendingRequests: joinRequests.filter(r => r.status === 'pending').length,
  };
};
