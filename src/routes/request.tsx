import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/request")({
  head: () => ({
    meta: [
      { title: "Request Transport — Melyno" },
      { name: "description", content: "Request transport for your goods in just a few steps." },
    ],
  }),
  component: RequestPage,
});

const steps = [
  { label: "Pickup", icon: "fa-location-arrow" },
  { label: "Destination", icon: "fa-flag-checkered" },
  { label: "Goods", icon: "fa-box" },
  { label: "Vehicle", icon: "fa-truck" },
  { label: "Estimate", icon: "fa-receipt" },
];

function RequestPage() {
  const [step, setStep] = useState(0);
  const [vehicle, setVehicle] = useState<string>("Van");

  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navbar />
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary">Request Transport</h1>
          <p className="mt-2 text-muted-foreground">A few quick details and we'll match you instantly.</p>
        </div>

        {/* Progress */}
        <div className="mb-10">
          <div className="flex items-center justify-between">
            {steps.map((s, i) => (
              <div key={i} className="flex flex-1 items-center">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-all ${
                      i <= step
                        ? "bg-gradient-primary text-primary-foreground shadow-elegant"
                        : "bg-muted text-muted-foreground"
                    } ${i === step ? "ring-4 ring-accent/20" : ""}`}
                  >
                    {i < step ? <i className="fa-solid fa-check" /> : <i className={`fa-solid ${s.icon}`} />}
                  </div>
                  <span className={`mt-2 hidden sm:block text-xs font-medium ${i <= step ? "text-primary" : "text-muted-foreground"}`}>
                    {s.label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className={`h-0.5 flex-1 mb-6 sm:mb-6 ${i < step ? "bg-gradient-primary" : "bg-muted"}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Card */}
        <div className="rounded-3xl bg-card shadow-elegant border p-6 sm:p-10">
          {step === 0 && (
            <StepBlock title="Where are we picking up?" icon="fa-location-arrow">
              <div className="space-y-4">
                <Field label="Pickup address" placeholder="e.g. 14 Riverside Drive, Westlands" />
                <Field label="Contact name" placeholder="John Doe" />
                <Field label="Contact phone" placeholder="+254 700 000 000" />
              </div>
            </StepBlock>
          )}
          {step === 1 && (
            <StepBlock title="Where is it going?" icon="fa-flag-checkered">
              <div className="space-y-4">
                <Field label="Destination address" placeholder="e.g. Karen Shopping Centre" />
                <Field label="Recipient name" placeholder="Jane Smith" />
                <Field label="Recipient phone" placeholder="+254 700 000 001" />
              </div>
            </StepBlock>
          )}
          {step === 2 && (
            <StepBlock title="Tell us about the goods" icon="fa-box">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Type" placeholder="e.g. Furniture, Documents" />
                <Field label="Weight (kg)" placeholder="80" type="number" />
                <Field label="Size" placeholder="Medium" />
                <Field label="Quantity" placeholder="1" type="number" />
              </div>
            </StepBlock>
          )}
          {step === 3 && (
            <StepBlock title="Choose a vehicle" icon="fa-truck">
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { id: "Bike", icon: "fa-motorcycle", desc: "Small parcels · Up to 10kg" },
                  { id: "Van", icon: "fa-van-shuttle", desc: "Boxes & furniture · Up to 500kg" },
                  { id: "Truck", icon: "fa-truck", desc: "Bulk loads · 500kg+" },
                ].map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setVehicle(v.id)}
                    className={`text-left rounded-2xl border p-5 transition-all hover-lift ${
                      vehicle === v.id ? "border-accent ring-2 ring-accent/30 bg-accent/5" : "bg-background"
                    }`}
                  >
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                      vehicle === v.id ? "bg-gradient-accent text-accent-foreground" : "bg-muted text-foreground"
                    }`}>
                      <i className={`fa-solid ${v.icon} text-lg`} />
                    </div>
                    <div className="mt-4 font-semibold text-primary">{v.id}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{v.desc}</div>
                  </button>
                ))}
              </div>
            </StepBlock>
          )}
          {step === 4 && (
            <StepBlock title="Your estimate" icon="fa-receipt">
              <div className="rounded-2xl bg-gradient-soft border p-6">
                <div className="space-y-3 text-sm">
                  {[
                    ["Base fare", "KES 500"],
                    ["Distance (12 km)", "KES 1,800"],
                    ["Vehicle (" + vehicle + ")", "KES 700"],
                    ["Service fee", "KES 200"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between text-muted-foreground">
                      <span>{k}</span>
                      <span className="text-foreground font-medium">{v}</span>
                    </div>
                  ))}
                  <div className="border-t pt-3 mt-3 flex justify-between text-base font-bold text-primary">
                    <span>Total estimate</span>
                    <span className="text-gradient-accent">KES 3,200</span>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-xs text-muted-foreground text-center">
                Final price confirmed once a transporter accepts your request.
              </p>
            </StepBlock>
          )}

          <div className="mt-10 flex items-center justify-between gap-3">
            <Button
              variant="ghost"
              onClick={() => setStep(Math.max(0, step - 1))}
              disabled={step === 0}
              className="rounded-full"
            >
              <i className="fa-solid fa-arrow-left mr-2" />
              Back
            </Button>
            {step < steps.length - 1 ? (
              <Button
                onClick={() => setStep(step + 1)}
                className="rounded-full bg-gradient-primary shadow-soft hover:shadow-elegant"
              >
                Continue
                <i className="fa-solid fa-arrow-right ml-2" />
              </Button>
            ) : (
              <Link to="/tracking">
                <Button className="rounded-full bg-gradient-accent text-accent-foreground font-semibold shadow-glow hover:scale-105 transition-transform">
                  Confirm & match
                  <i className="fa-solid fa-check ml-2" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function StepBlock({ title, icon, children }: { title: string; icon: string; children: React.ReactNode }) {
  return (
    <div className="animate-in fade-in duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-accent text-accent-foreground shadow-glow">
          <i className={`fa-solid ${icon}`} />
        </div>
        <h2 className="text-xl font-semibold text-primary">{title}</h2>
      </div>
      {children}
    </div>
  );
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <div>
      <Label className="text-sm font-medium text-foreground mb-1.5 block">{label}</Label>
      <Input type={type} placeholder={placeholder} className="h-11 rounded-xl" />
    </div>
  );
}
