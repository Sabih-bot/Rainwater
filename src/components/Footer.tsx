import { Link } from "react-router-dom";
import { Droplet, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-primary-foreground/10">
                <Droplet className="h-6 w-6 text-water-light" />
              </div>
              <span className="font-display text-xl font-bold">
                Rain<span className="text-water-light">Harvest</span>
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Promoting sustainable water conservation through innovative rainwater harvesting solutions for residential and commercial applications.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Categories", "Products", "Facts & Methods", "Usage Tips", "Contact Us"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                    className="text-primary-foreground/70 hover:text-water-light transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Residential Solutions</li>
              <li>Commercial Systems</li>
              <li>Consultation Services</li>
              <li>Installation Support</li>
              <li>Maintenance Programs</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="h-4 w-4 mt-0.5 text-water-light" />
                <span>123 Water Conservation Ave, Green City, EC 12345</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Phone className="h-4 w-4 text-water-light" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail className="h-4 w-4 text-water-light" />
                <span>info@rainharvest.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="section-container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/60">
            © 2024 RainHarvest. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <a href="#" className="hover:text-water-light transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-water-light transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
