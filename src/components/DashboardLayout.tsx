import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Logo } from "./Logo";

type NavItem = { to: string; label: string; icon: string };

export function DashboardLayout({
  children,
  role = "customer",
  title,
}: {
  children: React.ReactNode;
  role?: "customer" | "provider";
  title: string;
}) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const customerNav: NavItem[] = [
    { to: "/dashboard", label: "Overview", icon: "fa-gauge-high" },
    { to: "/dashboard", label: "Shipments", icon: "fa-box" },
    { to: "/tracking", label: "Tracking", icon: "fa-location-dot" },
    { to: "/request", label: "Request Transport", icon: "fa-plus" },
    { to: "/dashboard", label: "Profile", icon: "fa-user" },
  ];
  const providerNav: NavItem[] = [
    { to: "/provider", label: "Available Jobs", icon: "fa-list-check" },
    { to: "/provider", label: "Accepted", icon: "fa-truck-fast" },
    { to: "/provider", label: "Earnings", icon: "fa-wallet" },
    { to: "/provider", label: "Profile", icon: "fa-user" },
  ];
  const nav = role === "customer" ? customerNav : providerNav;

  return (
    <div className="flex min-h-screen bg-gradient-soft">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-sidebar text-sidebar-foreground transition-transform duration-300 lg:static lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-sidebar-border px-5">
          <Logo variant="light" />
          <button
            className="lg:hidden text-sidebar-foreground"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <i className="fa-solid fa-xmark" />
          </button>
        </div>
        <nav className="space-y-1 p-3">
          {nav.map((item, i) => {
            const active = location.pathname === item.to && i === 0;
            return (
              <Link
                key={i}
                to={item.to}
                onClick={() => setOpen(false)}
                className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                  active
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
          <Link
            to="/"
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground"
          >
            <i className="fa-solid fa-arrow-right-from-bracket w-4" />
            Sign out
          </Link>
        </div>
      </aside>

      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <div className="flex flex-1 flex-col min-w-0">
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b bg-background/80 px-4 backdrop-blur sm:px-6">
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-muted"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
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
              {role === "customer" ? "JD" : "TP"}
            </div>
          </div>
        </header>
        <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
