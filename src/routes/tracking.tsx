import { createFileRoute, redirect } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { mockShipments } from "@/lib/mockData";

export const Route = createFileRoute("/tracking")({
  beforeLoad: ({ location }) => {
    // Check if user is logged in (in production, check actual auth state)
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      throw redirect({
        to: '/login',
        search: { redirect: location.href },
      });
    }
  },
  component: TrackingPage,
});

function TrackingPage() {
  // Get shipment ID from URL or use default
  const shipment = mockShipments[0];
  
  if (!shipment) {
    return <div>No shipment found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-card rounded-2xl shadow-soft border p-6">
          <h1 className="text-2xl font-bold text-primary mb-4">Track Your Shipment</h1>
          <p className="text-muted-foreground mb-6">Tracking ID: {shipment.trackingId}</p>
          
          <div className="space-y-6">
            {/* Status Timeline */}
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
              {shipment.timeline.map((event, idx) => (
                <div key={idx} className="relative flex gap-4 mb-6">
                  <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-accent/15">
                    <i className="fa-solid fa-circle-check text-accent text-sm" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">{event.description}</p>
                    <p className="text-sm text-muted-foreground">{event.location}</p>
                    <p className="text-xs text-muted-foreground">{event.timestamp.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-accent/10 rounded-lg p-4">
              <p className="text-sm text-muted-foreground">Current Status</p>
              <p className="text-lg font-semibold text-primary capitalize">
                {shipment.status.replace(/_/g, ' ')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
