import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-network.jpg";
import trackingImg from "@/assets/tracking-preview.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Melyno — Move Goods Smarter, Faster, Anywhere" },
      {
        name: "description",
        content:
          "Request transport, match with verified providers, and track in real-time. The modern logistics marketplace for Africa and beyond.",
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <TrackingPreview />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
      <div
        className="absolute inset-0 opacity-40"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="absolute inset-0 grid-bg opacity-30 animate-grid" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium text-accent-glow">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Now live across 12 cities
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl leading-[1.05]">
            Move Goods{" "}
            <span className="text-gradient-accent">Smarter,</span>
            <br />
            Faster, Anywhere
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/80 sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Connect instantly with verified transporters. Get real-time tracking, secure payments,
            and the best price — every time.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/request">
              <Button size="lg" className="rounded-full bg-gradient-accent text-accent-foreground font-semibold shadow-glow hover:scale-105 transition-transform px-8 h-12">
                <i className="fa-solid fa-truck-fast mr-2" />
                Request Transport
              </Button>
            </Link>
            <Link to="/provider">
              <Button size="lg" variant="outline" className="rounded-full glass-dark border-white/20 text-white hover:bg-white/10 hover:text-white px-8 h-12">
                <i className="fa-solid fa-handshake mr-2" />
                Become a Transporter
              </Button>
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { v: "50K+", l: "Deliveries" },
              { v: "2.5K", l: "Transporters" },
              { v: "4.9★", l: "Rating" },
            ].map((s) => (
              <div key={s.l} className="glass-dark rounded-2xl px-4 py-4">
                <div className="text-2xl sm:text-3xl font-bold text-accent-glow">{s.v}</div>
                <div className="mt-1 text-xs text-primary-foreground/70 uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { icon: "fa-clipboard-list", title: "Request", desc: "Tell us what to move, where from, and where to." },
    { icon: "fa-people-arrows", title: "Match", desc: "Get instantly paired with the best verified transporter." },
    { icon: "fa-box-open", title: "Deliver", desc: "Track in real-time. Pay securely. Done." },
  ];
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">How it works</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary">Three steps to delivery</h2>
          <p className="mt-4 text-muted-foreground">From request to doorstep — without the friction.</p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={i} className="group relative rounded-3xl bg-card p-8 shadow-soft hover-lift border">
              <div className="absolute -top-4 left-8 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-primary text-sm font-bold text-primary-foreground shadow-elegant">
                {i + 1}
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-accent text-accent-foreground shadow-glow group-hover:scale-110 transition-transform">
                <i className={`fa-solid ${s.icon} text-xl`} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-primary">{s.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    { icon: "fa-location-dot", title: "Live Tracking", desc: "See your shipment move on the map in real-time." },
    { icon: "fa-shield-halved", title: "Verified Providers", desc: "Every transporter is vetted, rated, and insured." },
    { icon: "fa-credit-card", title: "Secure Payments", desc: "Pay only when you're satisfied. Mobile money & cards." },
    { icon: "fa-bolt", title: "Instant Matching", desc: "Get matched in under 60 seconds, day or night." },
    { icon: "fa-headset", title: "24/7 Support", desc: "Real humans ready to help, anytime you need." },
    { icon: "fa-tag", title: "Best Price Guarantee", desc: "Transparent pricing. No surprises." },
  ];
  return (
    <section className="py-24 bg-gradient-soft">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">Why Melyno</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary">Built for movers everywhere</h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div key={i} className="rounded-2xl bg-card p-7 shadow-soft hover-lift border">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary">
                <i className={`fa-solid ${f.icon} text-lg`} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-primary">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrackingPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">Live tracking</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary">Know where your goods are. Always.</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Watch your shipment move across the map. Get ETA updates, driver details, and delivery
              confirmations — all in one beautiful interface.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Real-time GPS updates every 10 seconds",
                "Push notifications at every milestone",
                "Share tracking link with anyone",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <i className="fa-solid fa-check text-xs" />
                  </div>
                  <span className="text-foreground">{t}</span>
                </li>
              ))}
            </ul>
            <Link to="/tracking" className="mt-8 inline-block">
              <Button className="rounded-full bg-gradient-primary shadow-soft hover:shadow-elegant">
                See live demo
                <i className="fa-solid fa-arrow-right ml-2" />
              </Button>
            </Link>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-elegant border bg-primary">
              <img
                src={trackingImg}
                alt="Tracking preview"
                loading="lazy"
                width={1280}
                height={896}
                className="w-full h-auto"
              />
              <div className="absolute top-4 left-4 right-4 glass-dark rounded-xl px-4 py-3 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground animate-pulse-glow">
                  <i className="fa-solid fa-truck text-sm" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-white">In transit</div>
                  <div className="text-xs text-white/70 truncate">ETA 24 minutes • 12 km away</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 hidden sm:block animate-float">
              <div className="glass rounded-2xl p-4 shadow-elegant">
                <div className="text-xs text-muted-foreground">Driver</div>
                <div className="mt-1 text-sm font-semibold">James K. ★ 4.9</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { name: "Aisha M.", role: "Boutique Owner", text: "Melyno saved my Saturday. Got fabric across town in an hour.", icon: "fa-store" },
    { name: "David O.", role: "E-commerce Founder", text: "We dropped 30% in delivery costs. The tracking is gold.", icon: "fa-laptop" },
    { name: "Grace W.", role: "Transporter", text: "I get 4x more jobs since joining. The app is so easy.", icon: "fa-truck" },
  ];
  return (
    <section className="py-24 bg-gradient-soft">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">Loved by movers</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary">What our users say</h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <div key={i} className="rounded-2xl bg-card p-7 shadow-soft hover-lift border">
              <div className="flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, j) => (
                  <i key={j} className="fa-solid fa-star text-sm" />
                ))}
              </div>
              <p className="mt-4 text-foreground leading-relaxed">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground">
                  <i className={`fa-solid ${t.icon}`} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-primary">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 sm:p-14 text-center shadow-elegant">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to move?</h2>
            <p className="mt-4 text-white/80 max-w-xl mx-auto">
              Join thousands using Melyno every day to move goods across cities.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/request">
                <Button size="lg" className="rounded-full bg-gradient-accent text-accent-foreground font-semibold shadow-glow hover:scale-105 transition-transform">
                  Request Transport
                </Button>
              </Link>
              <Link to="/register">
                <Button size="lg" variant="outline" className="rounded-full glass-dark border-white/20 text-white hover:bg-white/10 hover:text-white">
                  Create free account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
