export type UserRole = 'customer' | 'transporter' | 'admin' | 'super_admin' | 'track_owner';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  phone: string;
  company?: string;
  createdAt: Date;
}

export interface Shipment {
  id: string;
  trackingId: string;
  customerId: string;
  customerName: string;
  transporterId?: string;
  transporterName?: string;
  from: string;
  to: string;
  fromCountry: string;
  toCountry: string;
  goods: string;
  weight: number;
  price: number;
  status: ShipmentStatus;
  createdAt: Date;
  pickupDate?: Date;
  deliveryDate?: Date;
  timeline: TimelineEvent[];
}

export type ShipmentStatus = 
  | 'pending' 
  | 'assigned' 
  | 'picked_up' 
  | 'in_transit' 
  | 'at_border' 
  | 'customs_clearance' 
  | 'crossed_border' 
  | 'out_for_delivery' 
  | 'delivered' 
  | 'cancelled';

export interface TimelineEvent {
  id: string;
  status: ShipmentStatus;
  location: string;
  timestamp: Date;
  description: string;
}

export interface Vehicle {
  id: string;
  registration: string;
  type: 'box_truck' | 'semi_trailer' | 'flatbed' | 'refrigerated';
  capacity: number;
  ownerId: string;
  status: 'available' | 'in_transit' | 'maintenance';
  location?: string;
}

export interface PricingRule {
  id: string;
  originCountry: string;
  destinationCountry: string;
  baseRatePerKm: number;
  borderFee: number;
  customsFee: number;
  weightChargePerKg: number;
  vehicleType: string;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  createdAt: Date;
}
