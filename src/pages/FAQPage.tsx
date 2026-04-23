import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { useState } from 'react'

export function FAQPage() {
  const [openSection, setOpenSection] = useState<string | null>(null)

  const faqSections = [
    {
      title: "Getting Started",
      icon: "fa-rocket",
      questions: [
        { q: "How do I create an account?", a: "Click the 'Get Started' button on the homepage. Fill in your details including name, email, phone number. You'll receive a verification email to activate your account." },
        { q: "What documents do I need to become a transporter?", a: "Transporters need: Valid driving license, vehicle registration documents, insurance certificate, PSV license, and a good driving record." },
        { q: "How long does verification take?", a: "Verification typically takes 24-48 hours. You'll receive an email notification once your account is approved." }
      ]
    },
    {
      title: "Making Shipment Requests",
      icon: "fa-box",
      questions: [
        { q: "How do I request a shipment?", a: "Login to your dashboard → Click 'New Shipment' → Fill in pickup/delivery locations, goods type, weight → Submit request to get instant quotes." },
        { q: "What information do I need to provide?", a: "You'll need: Pickup and delivery addresses, goods description (type, weight, dimensions), special handling requirements, preferred pickup date/time." },
        { q: "Can I track my shipment in real-time?", a: "Yes! Once assigned to a transporter, you'll get real-time tracking updates in your dashboard showing location and status." }
      ]
    },
    {
      title: "Pricing & Payments",
      icon: "fa-credit-card",
      questions: [
        { q: "How is the price calculated?", a: "Prices are calculated based on: Distance (km), weight/volume of goods, vehicle type selected, border crossing fees, and customs clearance fees." },
        { q: "What payment methods are accepted?", a: "We accept: M-Pesa, Airtel Money, Bank Transfer, Credit/Debit Cards (Visa/Mastercard). Payments are processed securely." },
        { q: "When do I pay?", a: "For regular customers: Pay upon delivery. For new customers: 50% deposit required, balance upon delivery." }
      ]
    },
    {
      title: "Tracking & Delivery",
      icon: "fa-location-dot",
      questions: [
        { q: "How do I track my shipment?", a: "Login to your dashboard → Click on 'My Shipments' → Select the shipment → Click 'Track'. You'll see real-time location and status." },
        { q: "Will I get notifications?", a: "Yes! You'll receive notifications at key milestones: Shipment confirmed, Picked up, In transit, At border crossing, Customs clearance, Out for delivery, Delivered." },
        { q: "What happens if my shipment is delayed?", a: "You'll receive immediate notification with reason and updated ETA. Our support team will contact you." },
        { q: "How are border crossings handled?", a: "Our team handles all customs documentation. You'll receive updates at each stage: arrived at border, in customs, cleared customs." }
      ]
    },
    {
      title: "For Transporters",
      icon: "fa-truck",
      questions: [
        { q: "How do I get jobs?", a: "Login to your dashboard to see 'Available Jobs'. Accept jobs that match your vehicle type and capacity." },
        { q: "When do I get paid?", a: "Payments are released 24-48 hours after delivery confirmation. Funds sent to your registered M-Pesa or bank account." },
        { q: "How do I update tracking?", a: "Go to 'My Shipments' → Select shipment → Click 'Update Location' → Select status and location → Update." }
      ]
    },
    {
      title: "Account Management",
      icon: "fa-user",
      questions: [
        { q: "How do I reset my password?", a: "Click 'Forgot Password' on login page. Enter your email. You'll receive a password reset link valid for 1 hour." },
        { q: "How do I update my profile?", a: "Login → Dashboard → Profile → Update your information → Save Changes." },
        { q: "Is my data secure?", a: "Yes! We use industry-standard encryption. Your personal information is never shared with third parties." }
      ]
    },
    {
      title: "Support & Help",
      icon: "fa-headset",
      questions: [
        { q: "How do I contact support?", a: "Email: support@melyno.com, Phone: +254 700 123 456, Live chat available 8 AM - 8 PM EAT." },
        { q: "What if my goods are damaged?", a: "Report immediately through your dashboard within 24 hours of delivery. Provide photos and description." },
        { q: "Can I change or cancel a shipment?", a: "Changes: Contact support 2+ hours before pickup. Cancellation: Free if cancelled 4+ hours before pickup." }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navbar />
      <div className="bg-gradient-primary text-white py-20"><div className="max-w-7xl mx-auto px-4 text-center"><h1 className="text-4xl sm:text-5xl font-bold mb-4">Frequently Asked Questions</h1><p className="text-xl text-white/80 max-w-2xl mx-auto">Everything you need to know about using Melyno logistics platform</p></div></div>
      <div className="max-w-7xl mx-auto px-4 py-16"><div className="grid gap-8 lg:grid-cols-4"><div className="lg:col-span-1"><div className="sticky top-24 bg-white rounded-2xl shadow-sm border p-4"><h3 className="font-semibold text-primary mb-4 px-3">Topics</h3>{faqSections.map((section) => (<button key={section.title} onClick={() => {const element = document.getElementById(section.title.toLowerCase().replace(/ /g, '-')); element?.scrollIntoView({ behavior: 'smooth' });}} className="w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"><i className={`fas ${section.icon} w-5 mr-2`} />{section.title}</button>))}</div></div>
      <div className="lg:col-span-3 space-y-6">{faqSections.map((section) => (<div key={section.title} id={section.title.toLowerCase().replace(/ /g, '-')} className="bg-white rounded-2xl shadow-sm border overflow-hidden"><div className="bg-gradient-primary px-6 py-4"><div className="flex items-center gap-3"><i className={`fas ${section.icon} text-2xl text-white`} /><h2 className="text-xl font-bold text-white">{section.title}</h2></div></div><div className="divide-y">{section.questions.map((item, idx) => (<div key={idx} className="p-6"><button onClick={() => setOpenSection(openSection === `${section.title}-${idx}` ? null : `${section.title}-${idx}`)} className="w-full text-left flex justify-between items-center"><h3 className="text-lg font-semibold text-primary">{item.q}</h3><i className={`fas fa-chevron-down transition-transform ${openSection === `${section.title}-${idx}` ? 'rotate-180' : ''}`} /></button>{openSection === `${section.title}-${idx}` && (<div className="mt-4 text-muted-foreground leading-relaxed">{item.a}</div>)}</div>))}</div></div>))}
      <div className="bg-accent/10 rounded-2xl p-8 text-center border border-accent/20"><i className="fas fa-headset text-4xl text-accent mb-4" /><h3 className="text-xl font-semibold text-primary mb-2">Still have questions?</h3><p className="text-muted-foreground mb-4">Our support team is here to help you</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><a href="mailto:support@melyno.com" className="inline-flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90"><i className="fas fa-envelope" />support@melyno.com</a><a href="tel:+254700123456" className="inline-flex items-center gap-2 px-6 py-2 bg-accent text-white rounded-full hover:bg-accent/90"><i className="fas fa-phone" />+254 700 123 456</a></div></div></div></div></div>
      <Footer />
    </div>
  )
}
