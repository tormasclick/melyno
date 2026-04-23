import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'

export function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Melyno</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">Connecting East Africa through seamless logistics</p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">Our Mission</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              To revolutionize cross-border logistics in East Africa by providing reliable, transparent, and efficient transportation solutions that empower businesses and individuals to move goods seamlessly across borders.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We believe that logistics should never be a barrier to trade. Our platform connects customers with verified transporters, provides real-time tracking, and handles all border complexities.
            </p>
          </div>
          <div className="bg-gradient-primary rounded-2xl p-8 text-white text-center">
            <i className="fas fa-quote-left text-4xl mb-4 opacity-50" />
            <p className="text-xl italic">"Moving goods across East Africa shouldn't be complicated. We're here to make it simple."</p>
            <p className="mt-4 font-semibold">— Melyno Team</p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div><div className="text-4xl font-bold text-primary">10K+</div><p className="text-muted-foreground mt-2">Deliveries Completed</p></div>
            <div><div className="text-4xl font-bold text-primary">500+</div><p className="text-muted-foreground mt-2">Verified Transporters</p></div>
            <div><div className="text-4xl font-bold text-primary">6</div><p className="text-muted-foreground mt-2">East African Countries</p></div>
            <div><div className="text-4xl font-bold text-primary">4.9★</div><p className="text-muted-foreground mt-2">Customer Rating</p></div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"><i className="fas fa-shield-alt text-2xl text-blue-600" /></div>
            <h3 className="text-xl font-semibold mb-2">Reliability</h3>
            <p className="text-muted-foreground">We deliver on our promises, every time.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"><i className="fas fa-eye text-2xl text-green-600" /></div>
            <h3 className="text-xl font-semibold mb-2">Transparency</h3>
            <p className="text-muted-foreground">Real-time tracking and clear pricing.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4"><i className="fas fa-handshake text-2xl text-purple-600" /></div>
            <h3 className="text-xl font-semibold mb-2">Integrity</h3>
            <p className="text-muted-foreground">Honest partnerships with our community.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-primary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-white/80 text-lg mb-8">Join thousands of businesses already using Melyno</p>
          <Link to="/login"><Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 rounded-full">Get Started Today</Button></Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}
