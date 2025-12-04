import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-display font-bold text-xl">
                J
              </div>
              <span className="font-display text-2xl font-semibold">
                Jiju Hospital
              </span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Providing compassionate healthcare with cutting-edge technology and experienced medical professionals. Your health is our priority.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "About Us", path: "/about" },
                { name: "Departments", path: "/departments" },
                { name: "Our Doctors", path: "/doctors" },
                { name: "Treatments", path: "/treatments" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <Phone className="h-4 w-4 mt-0.5 text-primary" />
                <div>
                  <p className="text-background/70">Emergency</p>
                  <p className="font-medium">+91 274 478 974</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Mail className="h-4 w-4 mt-0.5 text-primary" />
                <div>
                  <p className="text-background/70">Email</p>
                  <p className="font-medium">info@jijuhospital.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <div>
                  <p className="text-background/70">Address</p>
                  <p className="font-medium">123 Healthcare Avenue</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social & Hours */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-3 mb-6">
              <a
                href="mailto:info@jijuhospital.com"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 hover:bg-primary text-background transition-colors"
                aria-label="Email us"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 hover:bg-primary text-background transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 hover:bg-primary text-background transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/91274478974"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 hover:bg-primary text-background transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
            <div className="text-sm">
              <p className="text-background/70 mb-1">Working Hours</p>
              <p className="font-medium">Mon - Sat: 8:00 AM - 8:00 PM</p>
              <p className="font-medium">Sun: Emergency Only</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-background/60">
            © {new Date().getFullYear()} Jiju Hospital. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/terms" className="text-background/60 hover:text-primary transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="text-background/60 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
