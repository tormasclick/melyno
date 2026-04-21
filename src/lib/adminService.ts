import { Shipment, User, Vehicle, PricingRule } from './types';

// Mock database - will be replaced with real backend
let pricingRules: PricingRule[] = [
  { id: 'price_1', originCountry: 'Kenya', destinationCountry: 'Uganda', baseRatePerKm: 60, borderFee: 5000, customsFee: 3000, weightChargePerKg: 2, vehicleType: 'semi_trailer' },
  { id: 'price_2', originCountry: 'Kenya', destinationCountry: 'Tanzania', baseRatePerKm: 55, borderFee: 4500, customsFee: 3500, weightChargePerKg: 2, vehicleType: 'semi_trailer' },
  { id: 'price_3', originCountry: 'Kenya', destinationCountry: 'Rwanda', baseRatePerKm: 65, borderFee: 6000, customsFee: 4000, weightChargePerKg: 2.5, vehicleType: 'semi_trailer' },
];

let transportRequests: TransportRequest[] = [
  {
    id: 'req_1',
    companyName: 'FastLogistics Ltd',
    contactName: 'John Kamau',
    email: 'john@fastlogistics.com',
    phone: '+254712345678',
    fleetSize: 5,
    vehicleTypes: ['semi_trailer', 'box_truck'],
    experience: '5 years',
    status: 'pending',
    submittedAt: new Date(),
  },
  {
    id: 'req_2',
    companyName: 'East Africa Hauliers',
    contactName: 'Mary Wanjiku',
    email: 'mary@eahauliers.com',
    phone: '+254723456789',
    fleetSize: 12,
    vehicleTypes: ['semi_trailer', 'flatbed', 'refrigerated'],
    experience: '8 years',
    status: 'pending',
    submittedAt: new Date(),
  },
];

let transporterRequests: TransporterRequest[] = [
  {
    id: 'trans_req_1',
    name: 'Peter Omondi',
    email: 'peter@example.com',
    phone: '+254734567890',
    licenseNumber: 'TR2024001',
    vehicleType: 'semi_trailer',
    vehicleRegistration: 'KCA 234X',
    experience: '3 years',
    status: 'pending',
    submittedAt: new Date(),
  },
];

export interface TransportRequest {
  id: string;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  fleetSize: number;
  vehicleTypes: string[];
  experience: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: Date;
}

export interface TransporterRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  licenseNumber: string;
  vehicleType: string;
  vehicleRegistration: string;
  experience: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: Date;
}

// Email service simulation
export const sendApprovalEmail = async (email: string, name: string, role: string) => {
  console.log(`Sending approval email to ${email} for ${role}`);
  // In production, this would call an actual email API
  return { success: true, message: `Email sent to ${email}` };
};

// Admin functions
export const getPricingRules = () => pricingRules;

export const updatePricingRule = (id: string, updates: Partial<PricingRule>) => {
  const index = pricingRules.findIndex(r => r.id === id);
  if (index !== -1) {
    pricingRules[index] = { ...pricingRules[index], ...updates };
    return pricingRules[index];
  }
  return null;
};

export const addPricingRule = (rule: Omit<PricingRule, 'id'>) => {
  const newRule = { ...rule, id: `price_${Date.now()}` };
  pricingRules.push(newRule);
  return newRule;
};

export const deletePricingRule = (id: string) => {
  pricingRules = pricingRules.filter(r => r.id !== id);
};

export const getTransportRequests = () => transportRequests;
export const getTransporterRequests = () => transporterRequests;

export const approveTransportRequest = async (id: string) => {
  const request = transportRequests.find(r => r.id === id);
  if (request) {
    request.status = 'approved';
    await sendApprovalEmail(request.email, request.contactName, 'transport_company');
    return request;
  }
  return null;
};

export const approveTransporterRequest = async (id: string) => {
  const request = transporterRequests.find(r => r.id === id);
  if (request) {
    request.status = 'approved';
    await sendApprovalEmail(request.email, request.name, 'transporter');
    return request;
  }
  return null;
};

export const rejectRequest = async (id: string, type: 'transport' | 'transporter') => {
  if (type === 'transport') {
    const request = transportRequests.find(r => r.id === id);
    if (request) {
      request.status = 'rejected';
      return request;
    }
  } else {
    const request = transporterRequests.find(r => r.id === id);
    if (request) {
      request.status = 'rejected';
      return request;
    }
  }
  return null;
};

// Statistics for admin
export const getAdminStats = () => ({
  totalShipments: 156,
  activeShipments: 23,
  totalUsers: 1245,
  totalTransporters: 45,
  pendingTransportRequests: transportRequests.filter(r => r.status === 'pending').length,
  pendingTransporterRequests: transporterRequests.filter(r => r.status === 'pending').length,
  monthlyRevenue: 2845000,
});
