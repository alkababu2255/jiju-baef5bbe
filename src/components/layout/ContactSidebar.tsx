import { Phone, MessageCircle, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

export function ContactSidebar() {
  return (
    <aside className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-2">
      {/* Phone */}
      <a
        href="tel:+91274478974"
        className="group flex items-center bg-primary text-primary-foreground rounded-l-lg overflow-hidden shadow-elevated hover:shadow-lg transition-all duration-300"
      >
        <div className="p-3">
          <Phone className="h-5 w-5" />
        </div>
        <span className="max-w-0 group-hover:max-w-xs overflow-hidden whitespace-nowrap transition-all duration-300 pr-0 group-hover:pr-4 text-sm font-medium">
          +91 274 478 974
        </span>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/91274478974"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center bg-[#25D366] text-primary-foreground rounded-l-lg overflow-hidden shadow-elevated hover:shadow-lg transition-all duration-300"
      >
        <div className="p-3">
          <MessageCircle className="h-5 w-5" />
        </div>
        <span className="max-w-0 group-hover:max-w-xs overflow-hidden whitespace-nowrap transition-all duration-300 pr-0 group-hover:pr-4 text-sm font-medium">
          WhatsApp
        </span>
      </a>

      {/* Book Appointment */}
      <Link
        to="/contact"
        className="group flex items-center bg-accent text-accent-foreground rounded-l-lg overflow-hidden shadow-elevated hover:shadow-lg transition-all duration-300"
      >
        <div className="p-3">
          <Calendar className="h-5 w-5" />
        </div>
        <span className="max-w-0 group-hover:max-w-xs overflow-hidden whitespace-nowrap transition-all duration-300 pr-0 group-hover:pr-4 text-sm font-medium">
          Book Now
        </span>
      </Link>
    </aside>
  );
}
