import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/provider")({
  head: () => ({
    meta: [
      { title: "Transporter Dashboard — Melyno" },
      { name: "description", content: "Browse delivery requests, manage jobs, and view earnings." },
    ],
  }),
  component: ProviderDashboard,
});

const earnings = [
  { label: "Today", value: "KES 4,800", icon: "fa-coins", tone: "accent" },
  { label: "This Week", value: "KES 28,400", icon: "fa-chart-line", tone: "success" },
  { label: "This Month", value: "KES 112K", icon: "fa-wallet", tone: "primary" },
  { label: "Rating", value: "4.92 ★", icon: "fa-star", tone: "warning" },
];

const jobs = [
  { id: "MLY-2901", from: "Westlands", to: "Karen", goods: "Furniture · 80kg", vehicle: "Van", price: "KES 3,200", distance: "12 km" },
  { id: "MLY-2902", from: "CBD", to: "Kilimani", goods: "Documents · 2kg", vehicle: "Bike", price: "KES 800", distance: "4 km" },
  { id: "MLY-2903", from: "Industrial Area", to: "Ruiru", goods: "Electronics · 30kg", vehicle: "Van", price: "KES 5,400", distance: "22 km" },
  { id: "MLY-2904", from: "Lavington", to: "Runda", goods: "Groceries · 15kg", vehicle: "Bike", price: "KES 1,800", distance: "7 km" },
];

const accepted = [
  { id: "MLY-2899", from: "Eastleigh", to: "South B", status: "Picked up", eta: "18 min" },
  { id: "MLY-2898", from: "Parklands", to: "Westlands", status: "On the way", eta: "9 min" },
];

function ProviderDashboard() {
  return (
    <DashboardLayout role="provider" title="Good evening, James">
      <div className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {earnings.map((s) => (
            <div key={s.label} className="rounded-2xl bg-card p-5 shadow-soft border hover-lift">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{s.label}</span>
                <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                  s.tone === "accent" ? "bg-accent/15 text-accent" :
                  s.tone === "success" ? "bg-success/15 text-success" :
                  s.tone === "warning" ? "bg-warning/20 text-warning-foreground" :
                  "bg-primary/10 text-primary"
                }`}>
                  <i className={`fa-solid ${s.icon}`} />
                </div>
              </div>
              <div className="mt-3 text-2xl font-bold text-primary">{s.value}</div>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-2xl bg-card border shadow-soft p-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="text-base font-semibold text-primary">Available Jobs</h3>
                <p className="text-xs text-muted-foreground mt-0.5">Near you · Updated just now</p>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-2.5 py-1 text-xs font-medium text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                Live
              </span>
            </div>
            <div className="space-y-3">
              {jobs.map((j) => (
                <div key={j.id} className="group rounded-xl border bg-background p-4 hover:border-accent transition-all hover:shadow-soft">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="font-mono">{j.id}</span>
                        <span>•</span>
                        <span className="inline-flex items-center gap-1">
                          <i className={`fa-solid ${j.vehicle === "Bike" ? "fa-motorcycle" : "fa-truck"}`} />
                          {j.vehicle}
                        </span>
                        <span>•</span>
                        <span>{j.distance}</span>
                      </div>
                      <div className="mt-2 flex items-center gap-3 text-sm">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-accent" />
                          <span className="font-medium text-foreground">{j.from}</span>
                        </div>
                        <i className="fa-solid fa-arrow-right text-muted-foreground text-xs" />
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-primary" />
                          <span className="font-medium text-foreground">{j.to}</span>
                        </div>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">{j.goods}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-lg font-bold text-primary">{j.price}</div>
                      <Button size="sm" className="mt-2 rounded-full bg-gradient-primary group-hover:bg-gradient-accent group-hover:text-accent-foreground transition-all">
                        Accept
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-card border shadow-soft p-6">
            <h3 className="text-base font-semibold text-primary">Active Jobs</h3>
            <p className="text-xs text-muted-foreground mt-0.5 mb-5">Your accepted deliveries</p>
            <div className="space-y-3">
              {accepted.map((a) => (
                <div key={a.id} className="rounded-xl bg-gradient-soft p-4 border">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-muted-foreground">{a.id}</span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-2 py-0.5 text-xs font-medium text-accent">
                      {a.status}
                    </span>
                  </div>
                  <div className="mt-2 text-sm font-medium text-foreground">
                    {a.from} → {a.to}
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      <i className="fa-solid fa-clock mr-1" />
                      ETA {a.eta}
                    </span>
                    <button className="text-xs font-medium text-accent hover:underline">Update</button>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-4 w-full rounded-xl border border-dashed py-3 text-sm text-muted-foreground hover:bg-muted/50 transition-colors">
              <i className="fa-solid fa-list mr-2" />
              View all jobs
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
