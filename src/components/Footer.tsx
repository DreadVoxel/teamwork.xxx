import { Link } from "react-router-dom";
import { Heart, Mail, Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl primary-gradient flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-heading text-2xl font-semibold text-foreground">
                Amore
              </span>
            </Link>
            <p className="text-muted-foreground font-body max-w-md mb-6">
              Connecting hearts with intention and care. We believe in meaningful 
              relationships built on trust, respect, and genuine connection.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-body"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/profiles"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-body"
                >
                  Browse Profiles
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-body"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-body"
                >
                  Success Stories
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:hello@amore.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 font-body"
              >
                <Mail className="w-4 h-4" />
                hello@amore.com
              </a>
              <p className="text-muted-foreground font-body text-sm">
                We're here to help you find meaningful connections.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm font-body">
            © {new Date().getFullYear()} Amore. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm font-body">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
