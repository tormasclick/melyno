import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Button } from '../components/ui/button'

export function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navbar />
      <div className="flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-md">
          <div className="bg-card rounded-2xl shadow-elegant border p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-primary">Create Account</h1>
              <p className="text-muted-foreground mt-2">Join Melyno today</p>
            </div>
            <div className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-lg" />
              <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg" />
              <input type="tel" placeholder="Phone Number" className="w-full p-3 border rounded-lg" />
              <select className="w-full p-3 border rounded-lg">
                <option>I want to ship goods (Customer)</option>
                <option>I want to deliver goods (Transporter)</option>
              </select>
              <input type="password" placeholder="Password" className="w-full p-3 border rounded-lg" />
              <Button className="w-full bg-gradient-primary text-white py-3 rounded-lg font-semibold">Create Account</Button>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-6">
              Already have an account?{' '}
              <Link to="/login" className="text-accent hover:underline">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
