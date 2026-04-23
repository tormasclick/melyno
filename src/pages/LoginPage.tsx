import { useNavigate } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Button } from '../components/ui/button'

export function LoginPage() {
  const navigate = useNavigate()

  const handleLogin = (role: string, redirectPath: string) => {
    // Clear any existing data
    localStorage.clear()
    
    // Set new login data
    localStorage.setItem('isLoggedIn', 'true')
    localStorage.setItem('user', JSON.stringify({ 
      role, 
      name: role === 'admin' ? 'Super Admin' : role === 'customer' ? 'Jane Mwangi' : 'John Otieno' 
    }))
    
    // Force navigation to dashboard
    window.location.href = redirectPath
  }

  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navbar />
      <div className="flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-md">
          <div className="bg-card rounded-2xl shadow-elegant border p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-primary">Welcome Back</h1>
              <p className="text-muted-foreground mt-2">Sign in to your Melyno account</p>
            </div>

            <div className="space-y-3">
              <button 
                onClick={() => handleLogin('admin', '/admin')} 
                className="w-full p-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl font-semibold hover:opacity-90 transition"
              >
                🔐 Admin Login
              </button>
              <button 
                onClick={() => handleLogin('customer', '/dashboard')} 
                className="w-full p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold hover:opacity-90 transition"
              >
                👤 Customer Login
              </button>
              <button 
                onClick={() => handleLogin('transporter', '/transporter')} 
                className="w-full p-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl font-semibold hover:opacity-90 transition"
              >
                🚚 Transporter Login
              </button>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-6">
              Don't have an account?{' '}
              <button onClick={() => navigate('/register')} className="text-accent hover:underline">
                Create account
              </button>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
