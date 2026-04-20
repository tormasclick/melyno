import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";

export const Route = createFileRoute("/tracking")({
  head: () => ({
    meta: [
      { title: "Live Tracking — Melyno" },
      { name: "description", content: "Track your shipment in real-time with live updates." },
    ],
  }),
  component: TrackingPage,
});

const timeline = [
  { label: "Picked up", time: "14:20", icon: "fa-box", done: true },
  { label: "In transit", time: "14:35", icon: "fa-truck-fast", done: true, active: true },
  { label: "Near destination", time: "—", icon: "fa-location-dot", done: false },
  { label: "Delivered", time: "—", icon: "fa-circle-check", done: false },
];

function TrackingPage() {
  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 mb-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="font-mono">MLY-2841</span>
            <span>•</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-medium text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              In transit
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-primary">Westlands → Karen</h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Map */}
          <div className="lg:col-span-2 rounded-3xl border bg-primary overflow-hidden shadow-elegant relative h-[400px] sm:h-[520px]">
            {/* Faux map background */}
            <div className="absolute inset-0 bg-gradient-hero" />
            <div className="absolute inset-0 grid-bg opacity-40" />

            {/* Route path */}
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 500">
              <defs>
                <linearGradient id="routeGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="oklch(0.72 0.14 195)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="oklch(0.82 0.13 190)" stopOpacity="1" />
                </linearGradient>
              </defs>
              <path
                d="M 60 400 Q 200 320 350 280 T 700 100"
                stroke="url(#routeGrad)"
                strokeWidth="4"
                fill="none"
                strokeDasharray="2 8"
                strokeLinecap="round"
              />
            </svg>

            {/* Pickup marker */}
            <div className="absolute bottom-16 left-8">
              <div className="flex flex-col items-center">
                <div className="h-4 w-4 rounded-full bg-white ring-4 ring-accent shadow-glow" />
                <div className="mt-2 glass-dark rounded-lg px-2.5 py-1 text-xs text-white font-medium">Pickup</div>
              </div>
            </div>

            {/* Destination marker */}
            <div className="absolute top-16 right-8">
              <div className="flex flex-col items-center">
                <div className="h-4 w-4 rounded-full bg-accent ring-4 ring-white/30 shadow-glow" />
                <div className="mt-2 glass-dark rounded-lg px-2.5 py-1 text-xs text-white font-medium">Karen</div>
              </div>
            </div>

            {/* Moving truck */}
            <div className="absolute top-1/2 left-0 w-full -translate-y-1/2">
              <div className="animate-truck inline-flex">
                <div className="flex flex-col items-center">
                  <div className="glass-dark rounded-full px-3 py-1.5 mb-2 text-xs text-white font-semibold whitespace-nowrap">
                    24 min · 12 km
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-accent text-accent-foreground shadow-glow animate-pulse-glow">
                    <i className="fa-solid fa-truck-fast text-lg" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating ETA card */}
            <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-72 glass-dark rounded-2xl p-4">
              <div className="text-xs uppercase tracking-wider text-white/60">Estimated arrival</div>
              <div className="mt-1 text-2xl font-bold text-white">14:59</div>
              <div className="mt-1 text-xs text-white/70">in approximately 24 minutes</div>
              <div className="mt-3 h-1.5 rounded-full bg-white/15 overflow-hidden">
                <div className="h-full w-2/3 bg-gradient-accent rounded-full" />
              </div>
            </div>
          </div>

          {/* Side panel */}
          <div className="space-y-6">
            {/* Driver card */}
            <div className="rounded-2xl bg-card border shadow-soft p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Your driver</h3>
              <div className="mt-4 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground text-lg font-bold">
                  JK
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-primary">James Kamau</div>
                  <div className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                    <i className="fa-solid fa-star text-accent" />
                    4.92 · 320 trips
                  </div>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center gap-2 rounded-xl bg-accent/10 text-accent py-2.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
                  <i className="fa-solid fa-phone" />
                  Call
                </button>
                <button className="flex items-center justify-center gap-2 rounded-xl bg-primary/10 text-primary py-2.5 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                  <i className="fa-solid fa-message" />
                  Chat
                </button>
              </div>
            </div>

            {/* Vehicle */}
            <div className="rounded-2xl bg-card border shadow-soft p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Vehicle</h3>
              <div className="mt-4 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-muted">
                  <i className="fa-solid fa-van-shuttle text-xl text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-primary">White Toyota Hiace</div>
                  <div className="text-xs text-muted-foreground mt-0.5">KCA 234X · Cargo Van</div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="rounded-2xl bg-card border shadow-soft p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Timeline</h3>
              <ol className="mt-5 space-y-5">
                {timeline.map((t, i) => (
                  <li key={i} className="relative flex gap-4">
                    {i < timeline.length - 1 && (
                      <span
                        className={`absolute left-[15px] top-8 h-full w-0.5 ${
                          t.done ? "bg-accent" : "bg-border"
                        }`}
                      />
                    )}
                    <div
                      className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                        t.done
                          ? t.active
                            ? "bg-gradient-accent text-accent-foreground animate-pulse-glow"
                            : "bg-success text-success-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <i className={`fa-solid ${t.icon} text-xs`} />
                    </div>
                    <div className="flex-1 pb-1">
                      <div className={`text-sm font-medium ${t.done ? "text-foreground" : "text-muted-foreground"}`}>
                        {t.label}
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">{t.time}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
