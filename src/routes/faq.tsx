import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useState } from "react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ - Melyno Logistics" },
      { name: "description", content: "Frequently asked questions about Melyno logistics platform" },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const faqSections = [
    {
      title: "Getting Started",
      icon: "fa-rocket",
      questions: [
        {
          q: "How do I create an account?",
          a: "Click the 'Get Started' button on the homepage. Fill in your details including name, email, phone number, and company name (if applicable). You'll receive a verification email to activate your account."
        },
        {
          q: "What documents do I need to become a transporter?",
          a: "Transporters need: Valid driving license, vehicle registration documents, insurance certificate, PSV license (for commercial vehicles), and a good driving record. Upload these during registration for verification."
        },
        {
          q: "How long does verification take?",
          a: "Verification typically takes 24-48 hours. You'll receive an email notification once your account is approved. During peak times, it may take up to 72 hours."
        }
      ]
    },
    {
      title: "Making Shipment Requests",
      icon: "fa-box",
      questions: [
        {
          q: "How do I request a shipment?",
          a: "Go to Dashboard → Request Transport. Fill in: Pickup location, destination, goods type, weight/volume, and preferred pickup date. Submit the request to get instant quotes from available transporters."
        },
        {
          q: "What information do I need to provide?",
          a: "You'll need: Pickup and delivery addresses, goods description (type, weight, dimensions), special handling requirements (if any), preferred pickup date/time, and any additional instructions."
        },
        {
          q: "Can I track my shipment in real-time?",
          a: "Yes! Once your shipment is assigned to a transporter, you'll get a tracking link. The link is private and only accessible from your dashboard for security and privacy reasons."
        }
      ]
    },
    {
      title: "Pricing & Payments",
      icon: "fa-credit-card",
      questions: [
        {
          q: "How is the price calculated?",
          a: "Prices are calculated based on: Distance (km), weight/volume of goods, vehicle type selected, border crossing fees (for international routes), and customs clearance fees. Use our Pricing Calculator for estimates."
        },
        {
          q: "What payment methods are accepted?",
          a: "We accept: M-Pesa, Airtel Money, Bank Transfer, Credit/Debit Cards (Visa/Mastercard), and Mobile Banking. Payments are processed securely through our payment partners."
        },
        {
          q: "When do I pay?",
          a: "For regular customers: Pay upon delivery. For new customers: 50% deposit required, balance upon delivery. Corporate accounts: Monthly invoicing available after credit check."
        }
      ]
    },
    {
      title: "Tracking & Delivery",
      icon: "fa-location-dot",
      questions: [
        {
          q: "How do I track my shipment?",
          a: "Login to your dashboard → Click on 'My Shipments' → Select the shipment you want to track → Click 'Track'. You'll see real-time location, status updates, and estimated delivery time."
        },
        {
          q: "Will I get notifications about my shipment?",
          a: "Yes! You'll receive email and SMS notifications at key milestones: Shipment confirmed, Picked up, In transit, At border crossing, Customs clearance, Out for delivery, Delivered."
        },
        {
          q: "What happens if my shipment is delayed?",
          a: "You'll receive immediate notification of any delays with reason and updated ETA. Our support team will contact you to explain the situation and provide solutions."
        },
        {
          q: "How are border crossings handled?",
          a: "Our team handles all customs documentation and border clearance. You'll receive updates when your shipment arrives at the border, enters customs, and clears customs."
        }
      ]
    },
    {
      title: "For Transporters",
      icon: "fa-truck",
      questions: [
        {
          q: "How do I get jobs?",
          a: "Once approved, login to your dashboard to see 'Available Jobs'. These are shipment requests near your location. You can accept jobs that match your vehicle type and capacity."
        },
        {
          q: "When do I get paid?",
          a: "Payments are released 24-48 hours after successful delivery confirmation. Funds are sent directly to your registered M-Pesa or bank account. Our commission is automatically deducted."
        },
        {
          q: "What if I can't complete a job?",
          a: "Notify us immediately through the dashboard. We'll help find a replacement transporter. Frequent cancellations may affect your rating and job access."
        }
      ]
    },
    {
      title: "Account Management",
      icon: "fa-user",
      questions: [
        {
          q: "How do I reset my password?",
          a: "Click 'Forgot Password' on the login page. Enter your registered email. You'll receive a password reset link valid for 1 hour. Click the link and create a new password."
        },
        {
          q: "How do I update my profile?",
          a: "Login → Dashboard → Profile Settings. You can update your contact information, company details, and notification preferences. Some changes may require verification."
        },
        {
          q: "Is my data secure?",
          a: "Yes! We use industry-standard encryption for all data. Your personal information is never shared with third parties. Shipment tracking links are private to your account only."
        }
      ]
    },
    {
      title: "Support & Help",
      icon: "fa-headset",
      questions: [
        {
          q: "How do I contact support?",
          a: "You can reach us via: Email: support@melyno.com, Phone: +254 700 123 456, Live chat (available 8 AM - 8 PM EAT), or through the dashboard support ticket system."
        },
        {
          q: "What if my goods are damaged?",
          a: "Report immediately through your dashboard within 24 hours of delivery. Provide photos and description. We'll investigate and process claims according to our insurance policy."
        },
        {
          q: "Can I change or cancel a shipment?",
          a: "Changes: Contact support at least 2 hours before pickup. Cancellation: Free if cancelled 4+ hours before pickup. Late cancellations may incur a fee."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Everything you need to know about using Melyno logistics platform
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-4">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-card rounded-2xl shadow-soft border p-4">
                <h3 className="font-semibold text-primary mb-4 px-3">Topics</h3>
                <nav className="space-y-1">
                  {faqSections.map((section) => (
                    <button
                      key={section.title}
                      onClick={() => {
                        const element = document.getElementById(section.title.toLowerCase().replace(/ /g, '-'));
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
                    >
                      <i className={`fa-solid ${section.icon} w-5 mr-2`} />
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* FAQ Sections */}
            <div className="lg:col-span-3 space-y-8">
              {faqSections.map((section) => (
                <div
                  key={section.title}
                  id={section.title.toLowerCase().replace(/ /g, '-')}
                  className="bg-card rounded-2xl shadow-soft border overflow-hidden"
                >
                  <div className="bg-gradient-primary px-6 py-4">
                    <div className="flex items-center gap-3">
                      <i className={`fa-solid ${section.icon} text-2xl text-white`} />
                      <h2 className="text-xl font-bold text-white">{section.title}</h2>
                    </div>
                  </div>
                  <div className="divide-y">
                    {section.questions.map((item, idx) => (
                      <div key={idx} className="p-6">
                        <button
                          onClick={() => setOpenSection(openSection === `${section.title}-${idx}` ? null : `${section.title}-${idx}`)}
                          className="w-full text-left flex justify-between items-center"
                        >
                          <h3 className="text-lg font-semibold text-primary">{item.q}</h3>
                          <i className={`fa-solid fa-chevron-down transition-transform ${openSection === `${section.title}-${idx}` ? 'rotate-180' : ''}`} />
                        </button>
                        {openSection === `${section.title}-${idx}` && (
                          <div className="mt-4 text-muted-foreground leading-relaxed animate-fadeIn">
                            {item.a}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Still Need Help */}
              <div className="bg-accent/10 rounded-2xl p-8 text-center border border-accent/20">
                <i className="fa-solid fa-headset text-4xl text-accent mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">Still have questions?</h3>
                <p className="text-muted-foreground mb-4">Our support team is here to help you</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="mailto:support@melyno.com" className="inline-flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90">
                    <i className="fa-solid fa-envelope" />
                    support@melyno.com
                  </a>
                  <a href="tel:+254700123456" className="inline-flex items-center gap-2 px-6 py-2 bg-accent text-white rounded-full hover:bg-accent/90">
                    <i className="fa-solid fa-phone" />
                    +254 700 123 456
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
