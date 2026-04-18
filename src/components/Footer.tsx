import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Logo variant="light" />
            <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed">
              Smart logistics, built for everyone. Move goods anywhere with confidence.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: "fa-twitter", label: "Twitter" },
                { icon: "fa-linkedin-in", label: "LinkedIn" },
                { icon: "fa-instagram", label: "Instagram" },
                { icon: "fa-facebook-f", label: "Facebook" },
              ].map((s) => (
                <a
                  key={s.icon}
                  href="#"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-accent hover:text-accent-foreground hover:scale-110"
                >
                  <i className={`fa-brands ${s.icon} text-sm`} />
                </a>
              ))}
            </div>
          </div>

          {[
            {
              title: "Product",
              links: [
                { to: "/request", label: "Request Transport" },
                { to: "/tracking", label: "Live Tracking" },
                { to: "/provider", label: "For Transporters" },
                { to: "/dashboard", label: "Dashboard" },
              ],
            },
            {
              title: "Company",
              links: [
                { to: "/", label: "About" },
                { to: "/", label: "Careers" },
                { to: "/", label: "Press" },
                { to: "/", label: "Contact" },
              ],
            },
            {
              title: "Support",
              links: [
                { to: "/", label: "Help Center" },
                { to: "/", label: "Safety" },
                { to: "/", label: "Terms" },
                { to: "/", label: "Privacy" },
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold tracking-wide uppercase text-accent">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((l, i) => (
                  <li key={i}>
                    <Link to={l.to} className="text-sm text-primary-foreground/70 transition-colors hover:text-accent">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-primary-foreground/60">© {new Date().getFullYear()} Melyna. All rights reserved.</p>
          <p className="text-xs text-primary-foreground/60">Built for movers everywhere.</p>
        </div>
      </div>
    </footer>
  );
}
