import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/DashboardLayout";
import { useState } from "react";
import { mockShipments, mockUsers, mockVehicles, mockPricingRules, updateShipmentStatus } from "@/lib/mockData";

export const Route = createFileRoute("/admin")({
  component: AdminDashboard,
});

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('shipments');
  const shipments = mockShipments;
  const users = mockUsers;
  const vehicles = mockVehicles;
  const pricing = mockPricingRules;

  const stats = {
    totalShipments: shipments.length,
    activeShipments: shipments.filter(s => !['delivered', 'cancelled'].includes(s.status)).length,
    totalUsers: users.length,
    totalRevenue: shipments.reduce((sum, s) => sum + s.price, 0),
  };

  return (
    <DashboardLayout role="admin" title="Admin Dashboard">
      <div className="space-y-6">
        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl bg-card p-5 shadow-soft border">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Total Shipments</span>
              <i className="fa-solid fa-box text-2xl text-accent" />
            </div>
            <div className="mt-3 text-2xl font-bold text-primary">{stats.totalShipments}</div>
          </div>
          <div className="rounded-2xl bg-card p-5 shadow-soft border">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Active Shipments</span>
              <i className="fa-solid fa-truck-fast text-2xl text-accent" />
            </div>
            <div className="mt-3 text-2xl font-bold text-primary">{stats.activeShipments}</div>
          </div>
          <div className="rounded-2xl bg-card p-5 shadow-soft border">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Total Users</span>
              <i className="fa-solid fa-users text-2xl text-accent" />
            </div>
            <div className="mt-3 text-2xl font-bold text-primary">{stats.totalUsers}</div>
          </div>
          <div className="rounded-2xl bg-card p-5 shadow-soft border">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Total Revenue</span>
              <i className="fa-solid fa-chart-line text-2xl text-accent" />
            </div>
            <div className="mt-3 text-2xl font-bold text-primary">KES {stats.totalRevenue.toLocaleString()}</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b">
          <div className="flex gap-4">
            {['shipments', 'users', 'vehicles', 'pricing'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 font-medium transition-colors ${
                  activeTab === tab 
                    ? 'text-accent border-b-2 border-accent' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Shipments Table */}
        {activeTab === 'shipments' && (
          <div className="rounded-2xl bg-card border shadow-soft overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left px-6 py-3">Tracking ID</th>
                    <th className="text-left px-6 py-3">Customer</th>
                    <th className="text-left px-6 py-3">Route</th>
                    <th className="text-left px-6 py-3">Status</th>
                    <th className="text-left px-6 py-3">Price</th>
                    <th className="text-left px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {shipments.map((shipment) => (
                    <tr key={shipment.id} className="hover:bg-muted/30">
                      <td className="px-6 py-4 font-mono text-xs">{shipment.trackingId}</td>
                      <td className="px-6 py-4">{shipment.customerName}</td>
                      <td className="px-6 py-4">{shipment.from} → {shipment.to}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium bg-accent/15 text-accent">
                          {shipment.status.replace(/_/g, ' ')}
                        </span>
                      </td>
                      <td className="px-6 py-4">KES {shipment.price.toLocaleString()}</td>
                      <td className="px-6 py-4">
                        <button className="text-accent hover:underline text-xs">View Details</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Users Table */}
        {activeTab === 'users' && (
          <div className="rounded-2xl bg-card border shadow-soft overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left px-6 py-3">Name</th>
                    <th className="text-left px-6 py-3">Email</th>
                    <th className="text-left px-6 py-3">Role</th>
                    <th className="text-left px-6 py-3">Phone</th>
                    <th className="text-left px-6 py-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-muted/30">
                      <td className="px-6 py-4 font-medium">{user.name}</td>
                      <td className="px-6 py-4">{user.email}</td>
                      <td className="px-6 py-4">
                        <span className="capitalize">{user.role.replace(/_/g, ' ')}</span>
                      </td>
                      <td className="px-6 py-4">{user.phone}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium bg-success/15 text-success">
                          Active
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Vehicles Table */}
        {activeTab === 'vehicles' && (
          <div className="rounded-2xl bg-card border shadow-soft overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left px-6 py-3">Registration</th>
                    <th className="text-left px-6 py-3">Type</th>
                    <th className="text-left px-6 py-3">Capacity (kg)</th>
                    <th className="text-left px-6 py-3">Status</th>
                    <th className="text-left px-6 py-3">Location</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {vehicles.map((vehicle) => (
                    <tr key={vehicle.id} className="hover:bg-muted/30">
                      <td className="px-6 py-4 font-mono">{vehicle.registration}</td>
                      <td className="px-6 py-4 capitalize">{vehicle.type.replace(/_/g, ' ')}</td>
                      <td className="px-6 py-4">{vehicle.capacity.toLocaleString()}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${
                          vehicle.status === 'available' ? 'bg-success/15 text-success' :
                          vehicle.status === 'in_transit' ? 'bg-accent/15 text-accent' :
                          'bg-warning/20 text-warning-foreground'
                        }`}>
                          {vehicle.status.replace(/_/g, ' ')}
                        </span>
                      </td>
                      <td className="px-6 py-4">{vehicle.location || '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Pricing Rules Table */}
        {activeTab === 'pricing' && (
          <div className="rounded-2xl bg-card border shadow-soft overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left px-6 py-3">Route</th>
                    <th className="text-left px-6 py-3">Vehicle</th>
                    <th className="text-left px-6 py-3">Base Rate/km</th>
                    <th className="text-left px-6 py-3">Border Fee</th>
                    <th className="text-left px-6 py-3">Customs Fee</th>
                    <th className="text-left px-6 py-3">Weight/kg</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {pricing.map((rule) => (
                    <tr key={rule.id} className="hover:bg-muted/30">
                      <td className="px-6 py-4">{rule.originCountry} → {rule.destinationCountry}</td>
                      <td className="px-6 py-4 capitalize">{rule.vehicleType.replace(/_/g, ' ')}</td>
                      <td className="px-6 py-4">KES {rule.baseRatePerKm}</td>
                      <td className="px-6 py-4">KES {rule.borderFee.toLocaleString()}</td>
                      <td className="px-6 py-4">KES {rule.customsFee.toLocaleString()}</td>
                      <td className="px-6 py-4">KES {rule.weightChargePerKg}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
