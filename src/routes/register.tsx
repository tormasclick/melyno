import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import heroBg from "@/assets/hero-network.jpg";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Create account — Melyna" },
      { name: "description", content: "Create your free Melyna account in seconds." },
    ],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  const [role, setRole] = useState<"customer" | "provider">("customer");
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="flex items-center justify-center p-6 sm:p-12 bg-background order-2 lg:order-1">
        <div className="w-full max-w-md">
          <div className="lg:hidden mb-8">
            <Logo />
          </div>
          <h1 className="text-3xl font-bold text-primary">Create account</h1>
          <p className="mt-2 text-muted-foreground text-sm">Join Melyna in less than a minute.</p>

          <div className="mt-6 grid grid-cols-2 gap-2 rounded-xl bg-muted p-1">
            {(["customer", "provider"] as const).map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`rounded-lg py-2 text-sm font-medium capitalize transition-all ${
                  role === r ? "bg-card text-primary shadow-soft" : "text-muted-foreground"
                }`}
              >
                {r === "customer" ? "I send goods" : "I move goods"}
              </button>
            ))}
          </div>

          <form className="mt-6 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium">First name</Label>
                <Input className="mt-1.5 h-11 rounded-xl" placeholder="Jane" />
              </div>
              <div>
                <Label className="text-sm font-medium">Last name</Label>
                <Input className="mt-1.5 h-11 rounded-xl" placeholder="Doe" />
              </div>
            </div>
            <div>
              <Label className="text-sm font-medium">Email</Label>
              <Input type="email" className="mt-1.5 h-11 rounded-xl" placeholder="you@example.com" />
            </div>
            <div>
              <Label className="text-sm font-medium">Phone</Label>
              <Input className="mt-1.5 h-11 rounded-xl" placeholder="+254 700 000 000" />
            </div>
            <div>
              <Label className="text-sm font-medium">Password</Label>
              <Input type="password" className="mt-1.5 h-11 rounded-xl" placeholder="At least 8 characters" />
            </div>

            <Button type="button" className="w-full h-11 rounded-xl bg-gradient-primary shadow-soft hover:shadow-elegant">
              Create account
              <i className="fa-solid fa-arrow-right ml-2" />
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              By continuing you agree to our Terms & Privacy Policy.
            </p>
            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-accent hover:underline">Sign in</Link>
            </p>
          </form>
        </div>
      </div>

      <div className="relative hidden lg:flex bg-gradient-hero text-white overflow-hidden order-1 lg:order-2">
        <div
          className="absolute inset-0 opacity-50"
          style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 grid-bg opacity-25" />
        <div className="relative flex flex-col justify-between p-12 w-full">
          <Logo variant="light" />
          <div>
            <h2 className="text-4xl font-bold leading-tight">Move smarter from <span className="text-gradient-accent">day one</span></h2>
            <p className="mt-4 text-white/70 max-w-md">Whether you're sending or moving, Melyna gives you the tools to do it better.</p>
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
              {[
                { v: "60s", l: "to match" },
                { v: "0", l: "hidden fees" },
                { v: "24/7", l: "support" },
              ].map((s) => (
                <div key={s.l} className="glass-dark rounded-xl p-3">
                  <div className="text-xl font-bold text-accent-glow">{s.v}</div>
                  <div className="text-xs text-white/70 mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-xs text-white/50">© {new Date().getFullYear()} Melyna</div>
        </div>
      </div>
    </div>
  );
}
