import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Logo } from "./Logo";

type NavItem = { to: string; label: string; icon: string };
type Role = "customer" | "transporter" | "admin" | "super_admin" | "track_owner";

export function DashboardLayout({
  children,
  role = "customer",
  title,
}: {
  children: React.ReactNode;
  role?: Role;
  title: string;
}) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navItems: Record<Role, NavItem[]> = {
    customer: [
      { to: "/dashboard", label: "Overview", icon: "fa-gauge-high" },
      { to: "/dashboard", label: "My Shipments", icon: "fa-box" },
      { to: "/tracking", label: "Track Shipment", icon: "fa-location-dot" },
      { to: "/request", label: "New Shipment", icon: "fa-plus" },
      { to: "/dashboard", label: "Profile", icon: "fa-user" },
    ],
    transporter: [
      { to: "/provider", label: "Available Jobs", icon: "fa-list-check" },
      { to: "/provider", label: "My Shipments", icon: "fa-truck-fast" },
      { to: "/provider", label: "Earnings", icon: "fa-wallet" },
      { to: "/provider", label: "My Vehicles", icon: "fa-car" },
      { to: "/provider", label: "Profile", icon: "fa-user" },
    ],
    admin: [
      { to: "/admin", label: "Overview", icon: "fa-gauge-high" },
      { to: "/admin", label: "Shipments", icon: "fa-box" },
      { to: "/admin", label: "Users", icon: "fa-users" },
      { to: "/admin", label: "Vehicles", icon: "fa-truck" },
      { to: "/admin", label: "Pricing", icon: "fa-tag" },
      { to: "/admin", label: "Reports", icon: "fa-chart-line" },
    ],
    super_admin: [
      { to: "/admin", label: "Overview", icon: "fa-gauge-high" },
      { to: "/admin", label: "Shipments", icon: "fa-box" },
      { to: "/admin", label: "Users", icon: "fa-users" },
      { to: "/admin", label: "Vehicles", icon: "fa-truck" },
      { to: "/admin", label: "Pricing", icon: "fa-tag" },
      { to: "/admin", label: "Reports", icon: "fa-chart-line" },
      { to: "/admin", label: "System Settings", icon: "fa-gear" },
    ],
    track_owner: [
      { to: "/track-owner", label: "Overview", icon: "fa-gauge-high" },
      { to: "/track-owner", label: "My Fleet", icon: "fa-truck" },
      { to: "/track-owner", label: "Drivers", icon: "fa-users" },
      { to: "/track-owner", label: "Maintenance", icon: "fa-wrench" },
      { to: "/track-owner", label: "Earnings", icon: "fa-wallet" },
    ],
  };

  const nav = navItems[role] || navItems.customer;

  return (
    <div className="flex min-h-screen bg-gradient-soft">
      <aside className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-sidebar text-sidebar-foreground transition-transform duration-300 lg:static lg:translate-x-0 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}>
        <div className="flex h-16 items-center justify-between border-b border-sidebar-border px-5">
          <Logo variant="light" />
          <button className="lg:hidden text-sidebar-foreground" onClick={() => setOpen(false)}>
            <i className="fa-solid fa-xmark" />
          </button>
        </div>
        <nav className="space-y-1 p-3">
          {nav.map((item, idx) => {
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={idx}
                to={item.to}
                onClick={() => setOpen(false)}
                className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-glow"
                    : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-foreground"
                }`}
              >
                <i className={`fa-solid ${item.icon} w-4 transition-transform group-hover:scale-110`} />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="absolute bottom-4 left-3 right-3">
          <Link to="/" className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground">
            <i className="fa-solid fa-arrow-right-from-bracket w-4" />
            Sign out
          </Link>
        </div>
      </aside>

      {open && <div className="fixed inset-0 z-30 bg-black/40 lg:hidden" onClick={() => setOpen(false)} />}

      <div className="flex flex-1 flex-col min-w-0">
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b bg-background/80 px-4 backdrop-blur sm:px-6">
          <div className="flex items-center gap-3">
            <button className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-muted" onClick={() => setOpen(true)}>
              <i className="fa-solid fa-bars" />
            </button>
            <h1 className="text-lg font-semibold text-foreground">{title}</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground">
              <i className="fa-solid fa-bell" />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-accent animate-pulse" />
            </button>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-primary text-sm font-semibold text-primary-foreground">
              {role === "customer" ? "JD" : role === "transporter" ? "JO" : "AD"}
            </div>
          </div>
        </header>
        <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
