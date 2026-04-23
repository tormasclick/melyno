import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import heroBg from '../assets/hero-long-distance-truck.jpeg'
import trackingImg from '../assets/tracking-map-africa.jpeg'
import borderImg from '../assets/border-crossing-logistics.jpeg'
import fleetImg from '../assets/fleet-trucks-east-africa.jpeg'
import businessImg from '../assets/business-owner-success.jpeg'

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <StatsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  )
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="Melyno truck" className="w-full h-full object-cover scale-110 animate-scaleIn" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50" />
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="animate-fadeInUp">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white border border-white/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Now serving 6 East African Countries
            </span>
          </div>

          {/* Main Heading - Fixed visibility */}
          <h1 className="animate-fadeInUp delay-100 mt-8 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight leading-[1.1]">
            <span className="text-white drop-shadow-lg">Move Goods Across</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-400 to-teal-300 drop-shadow-lg">
              East Africa
            </span>
          </h1>

          {/* Description */}
          <p className="animate-fadeInUp delay-200 mt-6 text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Connect with verified long-distance transporters. Real-time tracking across borders.
            Kenya • Uganda • Tanzania • Rwanda • Burundi • South Sudan
          </p>

          {/* CTA Buttons */}
          <div className="animate-fadeInUp delay-300 mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <button className="group relative overflow-hidden bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">
                  <i className="fas fa-truck-fast" />
                  Get Started
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-blue-700 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </Link>
            <Link to="/login">
              <button className="group relative overflow-hidden bg-white/20 backdrop-blur-sm border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-gray-900 hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">
                  <i className="fas fa-handshake" />
                  Become a Transporter
                </span>
              </button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="animate-fadeInUp delay-400 mt-12 flex flex-wrap gap-8 justify-center">
            {[
              { icon: "fas fa-star", text: "4.9 Rating", sub: "500+ reviews" },
              { icon: "fas fa-clock", text: "24/7 Support", sub: "Always here" },
              { icon: "fas fa-shield-alt", text: "Insured Cargo", sub: "Full coverage" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center">
                  <i className={`${item.icon} text-white text-sm`} />
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold text-sm">{item.text}</p>
                  <p className="text-white/70 text-xs">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}

function StatsSection() {
  const stats = [
    { value: "10,000+", label: "Deliveries Completed", icon: "fas fa-check-circle" },
    { value: "500+", label: "Verified Transporters", icon: "fas fa-users" },
    { value: "6", label: "East African Countries", icon: "fas fa-map-marked-alt" },
    { value: "98%", label: "On-Time Delivery", icon: "fas fa-clock" },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center animate-fadeInUp delay-100" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                <i className={`${stat.icon} text-white text-2xl`} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-gray-600 mt-2 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  const features = [
    { icon: "fas fa-map-marked-alt", title: "Cross-Border Tracking", desc: "Real-time GPS tracking across all East African borders with live updates", color: "from-blue-500 to-cyan-500" },
    { icon: "fas fa-passport", title: "Border Support", desc: "Full customs documentation and border clearance assistance", color: "from-purple-500 to-pink-500" },
    { icon: "fas fa-shield-alt", title: "Verified Fleet", desc: "All transporters vetted and insured for cross-border operations", color: "from-green-500 to-emerald-500" },
    { icon: "fas fa-credit-card", title: "Secure Payments", desc: "Pay with M-Pesa, cards, or bank transfer. Only on delivery", color: "from-orange-500 to-red-500" },
    { icon: "fas fa-chart-line", title: "Real-Time Updates", desc: "SMS and email notifications at every milestone", color: "from-indigo-500 to-purple-500" },
    { icon: "fas fa-headset", title: "24/7 Support", desc: "Dedicated support team for all routes and border issues", color: "from-teal-500 to-green-500" },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Why Choose Us</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">Built for East African<br />Logistics Excellence</h2>
          <p className="mt-4 text-gray-600 text-lg">Everything you need to move goods across borders seamlessly</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift border border-gray-100">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${feature.icon} text-white text-xl`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorksSection() {
  const steps = [
    { number: "01", title: "Request", desc: "Tell us your route, goods, and delivery timeline", icon: "fas fa-clipboard-list", color: "from-blue-500 to-cyan-500" },
    { number: "02", title: "Match", desc: "Get paired with verified transporters instantly", icon: "fas fa-handshake", color: "from-purple-500 to-pink-500" },
    { number: "03", title: "Track", desc: "Monitor your shipment across borders in real-time", icon: "fas fa-map-marker-alt", color: "from-orange-500 to-red-500" },
    { number: "04", title: "Deliver", desc: "Receive goods safely with secure payment release", icon: "fas fa-box-open", color: "from-green-500 to-emerald-500" },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Simple Process</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">How Melyno Works</h2>
          <p className="mt-4 text-gray-600 text-lg">Four simple steps to get your goods moving</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${step.icon} text-white text-2xl`} />
                </div>
                <div className="text-4xl font-bold text-gray-200 absolute top-4 right-4">{step.number}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                  <i className="fas fa-arrow-right text-gray-300 text-2xl" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  const services = [
    { icon: "fas fa-truck", title: "Full Truckload", desc: "20-40 ton capacity for large shipments", image: fleetImg },
    { icon: "fas fa-box", title: "Less than Truckload", desc: "Cost-effective for smaller loads", image: businessImg },
    { icon: "fas fa-thermometer-half", title: "Refrigerated", desc: "Temperature-controlled for perishables", image: borderImg },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Our Services</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">Comprehensive Logistics Solutions</h2>
          <p className="mt-4 text-gray-600 text-lg">Tailored shipping options for all cargo types</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl shadow-lg hover-lift">
              <img src={service.image} alt={service.title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center mb-4">
                  <i className={`${service.icon} text-xl`} />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-white/80 text-sm">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const testimonials = [
    { name: "Grace Mwangi", role: "Import/Export Business, Nairobi", text: "Melyno has revolutionized how we move goods to Kampala. The real-time tracking gives us peace of mind.", rating: 5, image: "https://randomuser.me/api/portraits/women/1.jpg" },
    { name: "John Otieno", role: "Manufacturer, Mombasa", text: "Cross-border logistics used to be a headache. Melyno handles everything seamlessly from documentation to delivery.", rating: 5, image: "https://randomuser.me/api/portraits/men/1.jpg" },
    { name: "Sarah Tumukunde", role: "Retail Chain, Kigali", text: "The transparency and efficiency of Melyno is unmatched. Highly recommended for anyone shipping across East Africa.", rating: 5, image: "https://randomuser.me/api/portraits/women/2.jpg" },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Testimonials</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">What Our Clients Say</h2>
          <p className="mt-4 text-gray-600 text-lg">Trusted by businesses across East Africa</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift">
              <div className="flex items-center gap-4 mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <i key={j} className="fas fa-star text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed">"{testimonial.text}"</p>
              <div className="mt-4 pt-4 border-t">
                <i className="fas fa-quote-right text-gray-300 text-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Ready to Move Your Goods?</h2>
        <p className="text-xl text-white/80 mb-8">Join thousands of businesses already using Melyno for reliable East African logistics</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/login">
            <button className="group relative overflow-hidden bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
              <span className="relative z-10 flex items-center gap-2">
                <i className="fas fa-rocket" />
                Get Started Today
              </span>
            </button>
          </Link>
          <Link to="/login">
            <button className="group relative overflow-hidden bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-white hover:text-gray-900 hover:scale-105">
              <span className="relative z-10 flex items-center gap-2">
                <i className="fas fa-calculator" />
                Request a Quote
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
