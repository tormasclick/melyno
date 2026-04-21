import { Shipment, User, Vehicle, PricingRule, Notification } from './types';

// Mock Users
export const mockUsers: User[] = [
  {
    id: 'user_1',
    name: 'Jane Mwangi',
    email: 'jane@example.com',
    role: 'customer',
    phone: '+254712345678',
    company: 'Mwangi Enterprises',
    createdAt: new Date('2024-01-01'),
  },
  {
    id: 'user_2',
    name: 'John Otieno',
    email: 'john@example.com',
    role: 'transporter',
    phone: '+254723456789',
    company: 'Otieno Logistics',
    createdAt: new Date('2024-01-15'),
  },
  {
    id: 'user_3',
    name: 'Admin User',
    email: 'admin@melyno.com',
    role: 'super_admin',
    phone: '+254734567890',
    createdAt: new Date('2024-01-01'),
  },
];

// Mock Shipments
export const mockShipments: Shipment[] = [
  {
    id: 'ship_1',
    trackingId: 'MLY-2841',
    customerId: 'user_1',
    customerName: 'Jane Mwangi',
    transporterId: 'user_2',
    transporterName: 'John Otieno',
    from: 'Nairobi',
    to: 'Kampala',
    fromCountry: 'Kenya',
    toCountry: 'Uganda',
    goods: 'Electronics',
    weight: 500,
    price: 42000,
    status: 'at_border',
    createdAt: new Date('2024-03-20T08:00:00'),
    pickupDate: new Date('2024-03-20T10:00:00'),
    timeline: [
      { id: 't1', status: 'pending', location: 'Nairobi', timestamp: new Date('2024-03-20T08:00:00'), description: 'Shipment created' },
      { id: 't2', status: 'assigned', location: 'Nairobi', timestamp: new Date('2024-03-20T08:30:00'), description: 'Transporter assigned' },
      { id: 't3', status: 'picked_up', location: 'Nairobi', timestamp: new Date('2024-03-20T10:00:00'), description: 'Goods picked up' },
      { id: 't4', status: 'in_transit', location: 'Nakuru', timestamp: new Date('2024-03-20T14:30:00'), description: 'In transit to border' },
      { id: 't5', status: 'at_border', location: 'Malaba Border', timestamp: new Date('2024-03-20T18:00:00'), description: 'Arrived at border, awaiting clearance' },
    ],
  },
  {
    id: 'ship_2',
    trackingId: 'MLY-2839',
    customerId: 'user_1',
    customerName: 'Jane Mwangi',
    transporterId: 'user_2',
    transporterName: 'John Otieno',
    from: 'Mombasa',
    to: 'Nairobi',
    fromCountry: 'Kenya',
    toCountry: 'Kenya',
    goods: 'Container',
    weight: 2000,
    price: 85000,
    status: 'in_transit',
    createdAt: new Date('2024-03-21T09:00:00'),
    pickupDate: new Date('2024-03-21T11:00:00'),
    timeline: [
      { id: 't1', status: 'pending', location: 'Mombasa', timestamp: new Date('2024-03-21T09:00:00'), description: 'Shipment created' },
      { id: 't2', status: 'assigned', location: 'Mombasa', timestamp: new Date('2024-03-21T09:30:00'), description: 'Transporter assigned' },
      { id: 't3', status: 'picked_up', location: 'Mombasa', timestamp: new Date('2024-03-21T11:00:00'), description: 'Container loaded' },
      { id: 't4', status: 'in_transit', location: 'Voi', timestamp: new Date('2024-03-21T16:00:00'), description: 'In transit to Nairobi' },
    ],
  },
  {
    id: 'ship_3',
    trackingId: 'MLY-2837',
    customerId: 'user_1',
    customerName: 'Jane Mwangi',
    from: 'Nairobi',
    to: 'Dar es Salaam',
    fromCountry: 'Kenya',
    toCountry: 'Tanzania',
    goods: 'Machinery',
    weight: 1500,
    price: 120000,
    status: 'pending',
    createdAt: new Date('2024-03-22T10:00:00'),
    timeline: [
      { id: 't1', status: 'pending', location: 'Nairobi', timestamp: new Date('2024-03-22T10:00:00'), description: 'Shipment created, awaiting transporter' },
    ],
  },
];

// Mock Vehicles
export const mockVehicles: Vehicle[] = [
  {
    id: 'veh_1',
    registration: 'KCA 234X',
    type: 'semi_trailer',
    capacity: 20000,
    ownerId: 'user_2',
    status: 'available',
    location: 'Nairobi',
  },
  {
    id: 'veh_2',
    registration: 'KCD 567Y',
    type: 'box_truck',
    capacity: 5000,
    ownerId: 'user_2',
    status: 'in_transit',
    location: 'Malaba Border',
  },
];

// Mock Pricing Rules
export const mockPricingRules: PricingRule[] = [
  { id: 'price_1', originCountry: 'Kenya', destinationCountry: 'Uganda', baseRatePerKm: 60, borderFee: 5000, customsFee: 3000, weightChargePerKg: 2, vehicleType: 'semi_trailer' },
  { id: 'price_2', originCountry: 'Kenya', destinationCountry: 'Tanzania', baseRatePerKm: 55, borderFee: 4500, customsFee: 3500, weightChargePerKg: 2, vehicleType: 'semi_trailer' },
  { id: 'price_3', originCountry: 'Kenya', destinationCountry: 'Rwanda', baseRatePerKm: 65, borderFee: 6000, customsFee: 4000, weightChargePerKg: 2.5, vehicleType: 'semi_trailer' },
  { id: 'price_4', originCountry: 'Kenya', destinationCountry: 'Kenya', baseRatePerKm: 40, borderFee: 0, customsFee: 0, weightChargePerKg: 1.5, vehicleType: 'box_truck' },
];

// Mock Notifications
export const mockNotifications: Notification[] = [
  { id: 'notif_1', userId: 'user_1', title: 'Shipment Update', message: 'Your shipment MLY-2841 has arrived at Malaba Border', type: 'info', read: false, createdAt: new Date() },
  { id: 'notif_2', userId: 'user_1', title: 'Payment Received', message: 'Payment of KES 42,000 confirmed', type: 'success', read: false, createdAt: new Date() },
  { id: 'notif_3', userId: 'user_2', title: 'New Job Available', message: 'New shipment from Nairobi to Kampala', type: 'warning', read: false, createdAt: new Date() },
];

// Helper functions
export const getShipmentsByUser = (userId: string, role: string): Shipment[] => {
  if (role === 'customer') {
    return mockShipments.filter(s => s.customerId === userId);
  }
  if (role === 'transporter') {
    return mockShipments.filter(s => s.transporterId === userId);
  }
  return mockShipments;
};

export const getShipmentById = (id: string): Shipment | undefined => {
  return mockShipments.find(s => s.id === id);
};

export const updateShipmentStatus = (shipmentId: string, newStatus: Shipment['status'], location: string, description: string): void => {
  const shipment = mockShipments.find(s => s.id === shipmentId);
  if (shipment) {
    shipment.status = newStatus;
    shipment.timeline.push({
      id: `t${Date.now()}`,
      status: newStatus,
      location,
      timestamp: new Date(),
      description,
    });
    
    // Add notification for customer
    mockNotifications.push({
      id: `notif_${Date.now()}`,
      userId: shipment.customerId,
      title: 'Shipment Status Update',
      message: `Your shipment ${shipment.trackingId} is now ${newStatus.replace('_', ' ')} at ${location}`,
      type: 'info',
      read: false,
      createdAt: new Date(),
    });
  }
};
