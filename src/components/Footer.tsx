import { Link } from 'react-router-dom'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="bg-card border-t py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              Moving goods across East Africa with confidence.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-primary">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-accent">Home</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-accent">FAQ</Link></li>
              <li><Link to="/login" className="text-muted-foreground hover:text-accent">Sign In</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-primary">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Email: support@melyno.com</li>
              <li>Phone: +254 700 123 456</li>
              <li>Nairobi, Kenya</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-primary">Follow Us</h3>
            <div className="mt-4 flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-accent"><i className="fa-brands fa-facebook text-xl" /></a>
              <a href="#" className="text-muted-foreground hover:text-accent"><i className="fa-brands fa-twitter text-xl" /></a>
              <a href="#" className="text-muted-foreground hover:text-accent"><i className="fa-brands fa-linkedin text-xl" /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Melyno. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
