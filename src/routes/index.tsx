import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-long-distance-truck.jpeg";
import trackingImg from "@/assets/tracking-map-africa.jpeg";
import borderImg from "@/assets/border-crossing-logistics.jpeg";
import fleetImg from "@/assets/fleet-trucks-east-africa.jpeg";
import businessImg from "@/assets/business-owner-success.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Melyno — Move Goods Across East Africa" },
      {
        name: "description",
        content: "Reliable long-distance logistics connecting Kenya, Uganda, Tanzania, Rwanda, Burundi & South Sudan.",
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
      <TrustedBySection />
      <HowItWorks />
      <Features />
      <CrossBorderSection />
      <FleetShowcase />
      <TrackingPreview />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Melyno truck crossing East Africa"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>

      <div className="relative z-10 w-full mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white border border-white/20">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            Now serving East Africa
          </span>
          <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.1]">
            Move Goods Across{" "}
            <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
              East Africa
            </span>
          </h1>
          <p className="mt-6 text-xl text-white/90 max-w-2xl leading-relaxed">
            Connect with verified long-distance transporters. Real-time tracking across borders.
            Kenya • Uganda • Tanzania • Rwanda • Burundi • South Sudan
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link to="/request">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white shadow-lg transition-all px-8 h-12 rounded-full font-semibold">
                <i className="fa-solid fa-truck-fast mr-2" />
                Request Transport
              </Button>
            </Link>
            <Link to="/provider">
              <Button size="lg" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 px-8 h-12 rounded-full font-semibold transition-all">
                <i className="fa-solid fa-handshake mr-2" />
                Become a Transporter
              </Button>
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 max-w-2xl">
            {[
              { v: "10K+", l: "Long Distance Trips" },
              { v: "500+", l: "Cross-border Trucks" },
              { v: "4.9★", l: "Rating" },
            ].map((s) => (
              <div key={s.l} className="bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-4 border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-teal-400">{s.v}</div>
                <div className="mt-1 text-xs text-white/80 uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustedBySection() {
  return (
    <section className="py-16 bg-background border-y">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm uppercase tracking-wider text-muted-foreground mb-8">Trusted by businesses across East Africa</p>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center">
          {["Kenya", "Uganda", "Tanzania", "Rwanda", "Burundi", "South Sudan"].map((country) => (
            <div key={country} className="text-center">
              <i className="fa-solid fa-flag-checkered text-3xl text-accent/60 mb-2" />
              <p className="text-sm font-medium text-foreground">{country}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { icon: "fa-clipboard-list", title: "Request", desc: "Tell us your route, goods, and preferred delivery time." },
    { icon: "fa-people-arrows", title: "Match", desc: "Get instantly paired with verified long-distance transporters." },
    { icon: "fa-box-open", title: "Track & Deliver", desc: "Monitor your shipment across borders in real-time." },
  ];
  return (
    <section className="py-24 bg-gradient-soft">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">How it works</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary">Three steps to delivery</h2>
          <p className="mt-4 text-muted-foreground">From request to doorstep — across borders with ease.</p>
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

function CrossBorderSection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">Border Crossing Made Easy</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary">Seamless Cross-Border Logistics</h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              We handle all customs documentation, border clearance, and regional compliance so your goods move without delays.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Pre-cleared customs documentation",
                "Real-time border status updates",
                "Regional compliance expertise",
                "Dedicated border support team",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <i className="fa-solid fa-circle-check text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <img
              src={borderImg}
              alt="Border crossing logistics at Malaba"
              className="rounded-2xl shadow-elegant w-full object-cover h-96"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FleetShowcase() {
  return (
    <section className="py-24 bg-gradient-soft">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">Our Fleet</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary">Modern Fleet for Long-Distance Haulage</h2>
          <p className="mt-4 text-muted-foreground">From box trucks to semi-trailers, we have the right vehicle for your cargo</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="relative rounded-2xl overflow-hidden group">
            <img
              src={fleetImg}
              alt="Melyno fleet of trucks"
              className="w-full h-80 object-cover transition-transform group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-white text-xl font-bold">Long-Haul Trucks</h3>
              <p className="text-white/80 text-sm">20-40 ton capacity</p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden group">
            <img
              src={businessImg}
              alt="Business owner receiving goods"
              className="w-full h-80 object-cover transition-transform group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-white text-xl font-bold">Satisfied Customers</h3>
              <p className="text-white/80 text-sm">Join 1000+ businesses</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    { icon: "fa-location-dot", title: "Cross-border Tracking", desc: "Track your shipment across borders in real-time with checkpoint updates." },
    { icon: "fa-passport", title: "Border Support", desc: "We handle customs documentation and border crossing logistics." },
    { icon: "fa-shield-halved", title: "Verified Fleet", desc: "All transporters are vetted, licensed for cross-border operations." },
    { icon: "fa-credit-card", title: "Secure Payments", desc: "Pay only when delivered. Mobile money & cards accepted." },
    { icon: "fa-clock", title: "Time-definite Delivery", desc: "Scheduled deliveries with real-time ETAs across East Africa." },
    { icon: "fa-headset", title: "24/7 Support", desc: "Dedicated support for all routes and border issues." },
  ];
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">Why Choose Melyno</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary">Built for East African Logistics</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div key={i} className="rounded-2xl bg-card p-7 shadow-soft hover-lift border">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary">
                <i className={`fa-solid ${f.icon} text-lg`} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-primary">{f.title}</h3>
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
    <section className="py-24 bg-gradient-soft">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">Live Tracking</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary">Know where your goods are, always</h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Real-time GPS tracking, border crossing notifications, and estimated arrival times.
              Get alerts when your shipment reaches key checkpoints.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Live location updates every 5 minutes",
                "Border crossing notifications",
                "Customs clearance status",
                "Driver contact and vehicle details",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <i className="fa-solid fa-circle-check text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/tracking">
              <Button className="mt-8 rounded-full bg-gradient-primary text-white px-8 hover:shadow-lg transition-all">
                Track Your Shipment
              </Button>
            </Link>
          </div>
          <div className="relative">
            <img
              src={trackingImg}
              alt="Melyno tracking interface showing East Africa map"
              className="rounded-2xl shadow-elegant w-full"
              loading="lazy"
            />
            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                  <i className="fa-solid fa-location-dot text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Current Location</p>
                  <p className="text-sm font-semibold">Malaba Border</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    { name: "Grace M.", role: "Import/Export Business, Nairobi", text: "Melyno has transformed how we move goods to Kampala. Reliable and transparent.", rating: 5 },
    { name: "John K.", role: "Manufacturer, Mombasa", text: "Cross-border logistics used to be a headache. Melyno handles everything seamlessly.", rating: 5 },
    { name: "Sarah T.", role: "Retail Chain, Dar es Salaam", text: "Real-time tracking across borders gives us peace of mind. Highly recommended.", rating: 5 },
  ];
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">Testimonials</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary">Trusted by Businesses Across East Africa</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-2xl bg-card p-6 shadow-soft border">
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <i key={j} className="fa-solid fa-star text-accent" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed">"{t.text}"</p>
              <div className="mt-4">
                <p className="font-semibold text-primary">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to move your goods?</h2>
        <p className="mt-4 text-white/80 text-lg">Join thousands of businesses using Melyno for reliable East African logistics.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/register">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 rounded-full font-semibold shadow-lg transition-all">
              Get Started Today
            </Button>
          </Link>
          <Link to="/request">
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white border-0 px-8 rounded-full font-semibold shadow-lg transition-all">
              <i className="fa-solid fa-calculator mr-2" />
              Request a Quote
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
