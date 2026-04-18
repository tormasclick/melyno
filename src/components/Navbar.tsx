import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="glass border-b">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo />
          <nav className="hidden items-center gap-8 md:flex">
            <Link to="/" activeOptions={{ exact: true }} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary" activeProps={{ className: "text-primary" }}>
              Home
            </Link>
            <Link to="/request" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary" activeProps={{ className: "text-primary" }}>
              Request Transport
            </Link>
            <Link to="/tracking" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary" activeProps={{ className: "text-primary" }}>
              Tracking
            </Link>
            <Link to="/dashboard" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary" activeProps={{ className: "text-primary" }}>
              Dashboard
            </Link>
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <Link to="/login">
              <Button variant="ghost" size="sm">Sign in</Button>
            </Link>
            <Link to="/register">
              <Button size="sm" className="rounded-full bg-gradient-primary shadow-soft hover:shadow-elegant">
                Get Started
              </Button>
            </Link>
          </div>
          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground hover:bg-muted"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`} />
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t bg-background/95 backdrop-blur">
            <div className="space-y-1 px-4 py-4">
              {[
                { to: "/", label: "Home" },
                { to: "/request", label: "Request Transport" },
                { to: "/tracking", label: "Tracking" },
                { to: "/dashboard", label: "Dashboard" },
                { to: "/provider", label: "For Transporters" },
              ].map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
                >
                  {l.label}
                </Link>
              ))}
              <div className="flex gap-2 pt-2">
                <Link to="/login" className="flex-1" onClick={() => setOpen(false)}>
                  <Button variant="outline" size="sm" className="w-full">Sign in</Button>
                </Link>
                <Link to="/register" className="flex-1" onClick={() => setOpen(false)}>
                  <Button size="sm" className="w-full bg-gradient-primary">Get Started</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
