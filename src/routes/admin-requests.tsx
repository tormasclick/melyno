import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/DashboardLayout";
import { useState } from "react";
import { 
  getTransportRequests, 
  getTransporterRequests, 
  approveTransportRequest, 
  approveTransporterRequest, 
  rejectRequest 
} from "@/lib/adminService";

export const Route = createFileRoute("/admin-requests")({
  component: AdminRequestsPage,
});

function AdminRequestsPage() {
  const [activeTab, setActiveTab] = useState<'transport' | 'transporter'>('transport');
  const [transportReqs, setTransportReqs] = useState(getTransportRequests());
  const [transporterReqs, setTransporterReqs] = useState(getTransporterRequests());
  const [loading, setLoading] = useState<string | null>(null);

  const handleApprove = async (id: string, type: 'transport' | 'transporter') => {
    setLoading(id);
    if (type === 'transport') {
      await approveTransportRequest(id);
      setTransportReqs(getTransportRequests());
    } else {
      await approveTransporterRequest(id);
      setTransporterReqs(getTransporterRequests());
    }
    setLoading(null);
  };

  const handleReject = async (id: string, type: 'transport' | 'transporter') => {
    setLoading(id);
    await rejectRequest(id, type);
    if (type === 'transport') {
      setTransportReqs(getTransportRequests());
    } else {
      setTransporterReqs(getTransporterRequests());
    }
    setLoading(null);
  };

  const stats = {
    pendingTransport: transportReqs.filter(r => r.status === 'pending').length,
    pendingTransporter: transporterReqs.filter(r => r.status === 'pending').length,
    approvedTransport: transportReqs.filter(r => r.status === 'approved').length,
    approvedTransporter: transporterReqs.filter(r => r.status === 'approved').length,
  };

  return (
    <DashboardLayout role="admin" title="Request Management">
      <div className="space-y-6">
        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl bg-card p-5 shadow-soft border">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Pending Transport Companies</span>
              <i className="fa-solid fa-building text-2xl text-warning" />
            </div>
            <div className="mt-3 text-2xl font-bold text-primary">{stats.pendingTransport}</div>
          </div>
          <div className="rounded-2xl bg-card p-5 shadow-soft border">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Pending Individual Transporters</span>
              <i className="fa-solid fa-user text-2xl text-warning" />
            </div>
            <div className="mt-3 text-2xl font-bold text-primary">{stats.pendingTransporter}</div>
          </div>
          <div className="rounded-2xl bg-card p-5 shadow-soft border">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Approved Companies</span>
              <i className="fa-solid fa-check-circle text-2xl text-success" />
            </div>
            <div className="mt-3 text-2xl font-bold text-primary">{stats.approvedTransport}</div>
          </div>
          <div className="rounded-2xl bg-card p-5 shadow-soft border">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Approved Transporters</span>
              <i className="fa-solid fa-truck text-2xl text-success" />
            </div>
            <div className="mt-3 text-2xl font-bold text-primary">{stats.approvedTransporter}</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b">
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab('transport')}
              className={`px-4 py-2 font-medium transition-colors ${
                activeTab === 'transport' 
                  ? 'text-accent border-b-2 border-accent' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Transport Companies
            </button>
            <button
              onClick={() => setActiveTab('transporter')}
              className={`px-4 py-2 font-medium transition-colors ${
                activeTab === 'transporter' 
                  ? 'text-accent border-b-2 border-accent' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Individual Transporters
            </button>
          </div>
        </div>

        {/* Transport Companies List */}
        {activeTab === 'transport' && (
          <div className="space-y-4">
            {transportReqs.filter(r => r.status === 'pending').map((request) => (
              <div key={request.id} className="rounded-2xl bg-card border shadow-soft p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <i className="fa-solid fa-building text-2xl text-accent" />
                      <h3 className="text-xl font-bold text-primary">{request.companyName}</h3>
                      <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium bg-warning/20 text-warning-foreground">
                        Pending Review
                      </span>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2 mt-4">
                      <div>
                        <p className="text-xs text-muted-foreground">Contact Person</p>
                        <p className="font-medium">{request.contactName}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Email</p>
                        <p className="font-medium">{request.email}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Phone</p>
                        <p className="font-medium">{request.phone}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Fleet Size</p>
                        <p className="font-medium">{request.fleetSize} vehicles</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Vehicle Types</p>
                        <div className="flex gap-1 mt-1">
                          {request.vehicleTypes.map(v => (
                            <span key={v} className="text-xs bg-muted px-2 py-1 rounded-full capitalize">
                              {v.replace(/_/g, ' ')}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Experience</p>
                        <p className="font-medium">{request.experience}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <button
                      onClick={() => handleApprove(request.id, 'transport')}
                      disabled={loading === request.id}
                      className="px-4 py-2 bg-success text-white rounded-lg hover:bg-success/90 transition-colors disabled:opacity-50"
                    >
                      {loading === request.id ? 'Processing...' : 'Approve'}
                    </button>
                    <button
                      onClick={() => handleReject(request.id, 'transport')}
                      disabled={loading === request.id}
                      className="px-4 py-2 bg-destructive text-white rounded-lg hover:bg-destructive/90 transition-colors disabled:opacity-50"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {transportReqs.filter(r => r.status === 'pending').length === 0 && (
              <div className="text-center py-12 bg-card rounded-2xl border">
                <i className="fa-solid fa-check-circle text-5xl text-success mb-4" />
                <p className="text-muted-foreground">No pending transport company requests</p>
              </div>
            )}

            {/* Approved Companies */}
            {transportReqs.filter(r => r.status === 'approved').length > 0 && (
              <>
                <h3 className="text-lg font-semibold text-primary mt-8 mb-4">Approved Companies</h3>
                {transportReqs.filter(r => r.status === 'approved').map((request) => (
                  <div key={request.id} className="rounded-2xl bg-card border shadow-soft p-4 opacity-75">
                    <div className="flex items-center gap-3">
                      <i className="fa-solid fa-building text-accent" />
                      <span className="font-semibold">{request.companyName}</span>
                      <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium bg-success/15 text-success">
                        Approved
                      </span>
                      <span className="text-xs text-muted-foreground ml-auto">
                        Approved • Email sent
                      </span>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        )}

        {/* Individual Transporters List */}
        {activeTab === 'transporter' && (
          <div className="space-y-4">
            {transporterReqs.filter(r => r.status === 'pending').map((request) => (
              <div key={request.id} className="rounded-2xl bg-card border shadow-soft p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <i className="fa-solid fa-user text-2xl text-accent" />
                      <h3 className="text-xl font-bold text-primary">{request.name}</h3>
                      <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium bg-warning/20 text-warning-foreground">
                        Pending Review
                      </span>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2 mt-4">
                      <div>
                        <p className="text-xs text-muted-foreground">Email</p>
                        <p className="font-medium">{request.email}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Phone</p>
                        <p className="font-medium">{request.phone}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">License Number</p>
                        <p className="font-medium">{request.licenseNumber}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Vehicle Type</p>
                        <p className="font-medium capitalize">{request.vehicleType.replace(/_/g, ' ')}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Vehicle Registration</p>
                        <p className="font-medium">{request.vehicleRegistration}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Experience</p>
                        <p className="font-medium">{request.experience}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <button
                      onClick={() => handleApprove(request.id, 'transporter')}
                      disabled={loading === request.id}
                      className="px-4 py-2 bg-success text-white rounded-lg hover:bg-success/90 transition-colors disabled:opacity-50"
                    >
                      {loading === request.id ? 'Processing...' : 'Approve'}
                    </button>
                    <button
                      onClick={() => handleReject(request.id, 'transporter')}
                      disabled={loading === request.id}
                      className="px-4 py-2 bg-destructive text-white rounded-lg hover:bg-destructive/90 transition-colors disabled:opacity-50"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {transporterReqs.filter(r => r.status === 'pending').length === 0 && (
              <div className="text-center py-12 bg-card rounded-2xl border">
                <i className="fa-solid fa-check-circle text-5xl text-success mb-4" />
                <p className="text-muted-foreground">No pending individual transporter requests</p>
              </div>
            )}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
