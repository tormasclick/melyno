import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (role: string, redirectPath: string) => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("user", JSON.stringify({ role, name: role === "super_admin" ? "Super Admin" : role === "customer" ? "Jane Mwangi" : "John Otieno" }));
    navigate({ to: redirectPath });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8"><h1 className="text-3xl font-bold text-primary">Melyno</h1><p className="text-gray-500 mt-2">Logistics Platform Demo</p></div>
        <div className="space-y-3">
          <button onClick={() => handleLogin("super_admin", "/super-admin")} className="w-full p-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl font-semibold hover:opacity-90 transition">🔐 Super Admin Login</button>
          <button onClick={() => handleLogin("customer", "/dashboard")} className="w-full p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold hover:opacity-90 transition">👤 Customer Login</button>
          <button onClick={() => handleLogin("transporter", "/provider")} className="w-full p-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl font-semibold hover:opacity-90 transition">🚚 Transporter Login</button>
        </div>
        <p className="text-center text-sm text-gray-400 mt-6">Demo credentials - Click any button to continue</p>
      </div>
    </div>
  );
}
