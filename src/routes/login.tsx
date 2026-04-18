import { createFileRoute, Link } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import heroBg from "@/assets/hero-network.jpg";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign in — Melyna" },
      { name: "description", content: "Sign in to your Melyna account." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left visual */}
      <div className="relative hidden lg:flex bg-gradient-hero text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-50"
          style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 grid-bg opacity-25" />
        <div className="relative flex flex-col justify-between p-12 w-full">
          <Logo variant="light" />
          <div>
            <h2 className="text-4xl font-bold leading-tight">Welcome back to <span className="text-gradient-accent">Melyna</span></h2>
            <p className="mt-4 text-white/70 max-w-md">Pick up where you left off. Track shipments, request transport, manage your jobs.</p>
          </div>
          <div className="text-xs text-white/50">© {new Date().getFullYear()} Melyna</div>
        </div>
      </div>

      {/* Form */}
      <div className="flex items-center justify-center p-6 sm:p-12 bg-background">
        <div className="w-full max-w-md">
          <div className="lg:hidden mb-8">
            <Logo />
          </div>
          <h1 className="text-3xl font-bold text-primary">Sign in</h1>
          <p className="mt-2 text-muted-foreground text-sm">Enter your details to access your account</p>

          <form className="mt-8 space-y-5">
            <div>
              <Label className="text-sm font-medium">Email</Label>
              <Input type="email" placeholder="you@example.com" className="mt-1.5 h-11 rounded-xl" />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <Label className="text-sm font-medium">Password</Label>
                <button type="button" className="text-xs text-accent hover:underline">Forgot?</button>
              </div>
              <Input type="password" placeholder="••••••••" className="mt-1.5 h-11 rounded-xl" />
            </div>
            <Button type="button" className="w-full h-11 rounded-xl bg-gradient-primary shadow-soft hover:shadow-elegant">
              Sign in
              <i className="fa-solid fa-arrow-right ml-2" />
            </Button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center"><span className="w-full border-t" /></div>
              <span className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-3 text-muted-foreground">or continue with</span>
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button type="button" className="flex h-11 items-center justify-center gap-2 rounded-xl border bg-card text-sm font-medium hover:bg-muted transition-colors">
                <i className="fa-brands fa-google text-accent" />
                Google
              </button>
              <button type="button" className="flex h-11 items-center justify-center gap-2 rounded-xl border bg-card text-sm font-medium hover:bg-muted transition-colors">
                <i className="fa-brands fa-apple" />
                Apple
              </button>
            </div>

            <p className="text-center text-sm text-muted-foreground">
              New to Melyna?{" "}
              <Link to="/register" className="font-medium text-accent hover:underline">Create account</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
