import { createFileRoute, Link } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Customer Dashboard — Melyna" },
      { name: "description", content: "Manage your shipments, track deliveries, and request transport." },
    ],
  }),
  component: CustomerDashboard,
});

const stats = [
  { label: "Active Shipments", value: "3", icon: "fa-truck-fast", trend: "+1", tone: "accent" },
  { label: "Completed", value: "47", icon: "fa-circle-check", trend: "+12 this month", tone: "success" },
  { label: "Pending", value: "2", icon: "fa-clock", trend: "Awaiting pickup", tone: "warning" },
  { label: "Total Spent", value: "KES 84,200", icon: "fa-wallet", trend: "+18% MoM", tone: "primary" },
];

const shipments = [
  { id: "MLY-2841", from: "Westlands", to: "Karen", goods: "Furniture", status: "In Transit", price: "KES 3,200", date: "Today, 14:20" },
  { id: "MLY-2839", from: "CBD", to: "Kilimani", goods: "Documents", status: "Delivered", price: "KES 800", date: "Today, 09:15" },
  { id: "MLY-2837", from: "Industrial Area", to: "Ruiru", goods: "Electronics", status: "Pending", price: "KES 5,400", date: "Yesterday" },
  { id: "MLY-2832", from: "Nyali", to: "Bamburi", goods: "Clothes", status: "Delivered", price: "KES 1,200", date: "Mar 28" },
  { id: "MLY-2828", from: "Lavington", to: "Runda", goods: "Groceries", status: "In Transit", price: "KES 1,800", date: "Mar 27" },
];

function statusBadge(status: string) {
  const map: Record<string, string> = {
    "In Transit": "bg-accent/15 text-accent",
    "Delivered": "bg-success/15 text-success",
    "Pending": "bg-warning/20 text-warning-foreground",
  };
  return map[status] ?? "bg-muted text-muted-foreground";
}

function CustomerDashboard() {
  return (
    <DashboardLayout role="customer" title="Welcome back, Jane">
      <div className="space-y-6">
        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
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
              <div className="mt-1 text-xs text-muted-foreground">{s.trend}</div>
            </div>
          ))}
        </div>

        {/* CTA bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-2xl bg-gradient-hero p-6 text-white shadow-elegant overflow-hidden relative">
          <div className="absolute inset-0 grid-bg opacity-25" />
          <div className="relative">
            <h3 className="text-lg font-semibold">Need to move something?</h3>
            <p className="text-sm text-white/75 mt-1">Get matched with a transporter in under a minute.</p>
          </div>
          <Link to="/request" className="relative">
            <Button className="rounded-full bg-gradient-accent text-accent-foreground font-semibold shadow-glow hover:scale-105 transition-transform">
              <i className="fa-solid fa-plus mr-2" />
              Request Transport
            </Button>
          </Link>
        </div>

        {/* Shipments table */}
        <div className="rounded-2xl bg-card border shadow-soft overflow-hidden">
          <div className="flex items-center justify-between border-b px-6 py-4">
            <h3 className="text-base font-semibold text-primary">Recent Shipments</h3>
            <button className="text-sm text-accent hover:underline">View all</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="text-left px-6 py-3 font-medium">ID</th>
                  <th className="text-left px-6 py-3 font-medium">Route</th>
                  <th className="text-left px-6 py-3 font-medium">Goods</th>
                  <th className="text-left px-6 py-3 font-medium">Status</th>
                  <th className="text-left px-6 py-3 font-medium">Price</th>
                  <th className="text-left px-6 py-3 font-medium">Date</th>
                  <th className="px-6 py-3" />
                </tr>
              </thead>
              <tbody className="divide-y">
                {shipments.map((s) => (
                  <tr key={s.id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4 font-mono text-xs text-muted-foreground">{s.id}</td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-foreground">{s.from}</div>
                      <div className="text-xs text-muted-foreground flex items-center gap-1">
                        <i className="fa-solid fa-arrow-right text-[10px]" /> {s.to}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-foreground">{s.goods}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${statusBadge(s.status)}`}>
                        <span className="h-1.5 w-1.5 rounded-full bg-current" />
                        {s.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-medium text-primary">{s.price}</td>
                    <td className="px-6 py-4 text-muted-foreground">{s.date}</td>
                    <td className="px-6 py-4">
                      <Link to="/tracking" className="text-accent hover:underline text-xs font-medium">
                        Track
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
