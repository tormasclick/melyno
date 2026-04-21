import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Route = createFileRoute("/register")({
  component: RegisterPage,
});

function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "customer",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For demonstration, just redirect to login
    alert("Registration submitted! Admin will review and approve your account.");
    navigate({ to: "/login" });
  };

  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navbar />
      <div className="flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-md">
          <div className="bg-card rounded-2xl shadow-elegant border p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-primary">Create Account</h1>
              <p className="text-muted-foreground mt-2">Join Melyno logistics platform</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full p-3 border rounded-lg bg-background"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full p-3 border rounded-lg bg-background"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full p-3 border rounded-lg bg-background"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Company Name (Optional)</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full p-3 border rounded-lg bg-background"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">I want to sign up as</label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({...formData, role: e.target.value})}
                  className="w-full p-3 border rounded-lg bg-background"
                >
                  <option value="customer">Customer (I want to ship goods)</option>
                  <option value="transporter">Transporter (I want to deliver goods)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Password</label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="w-full p-3 border rounded-lg bg-background"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-gradient-primary text-white py-3 rounded-lg font-semibold">
                Create Account
              </Button>
            </form>

            <p className="text-center text-sm text-muted-foreground mt-6">
              Already have an account?{" "}
              <button onClick={() => navigate({ to: "/login" })} className="text-accent hover:underline">
                Sign in
              </button>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
