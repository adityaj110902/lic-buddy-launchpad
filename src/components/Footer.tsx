import licLogo from "@/assets/lic.png";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="gradient-navy text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={licLogo} alt="LIC" className="h-10 w-10 object-contain" />
              <span className="text-lg font-bold">LIC of India</span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
              Life Insurance Corporation of India — "Har Pal Aapke Saath". Securing families since 1956.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lic-gold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/70">
              <li><a href="#home" className="hover:text-primary-foreground transition-colors">Home</a></li>
              <li><a href="#journey" className="hover:text-primary-foreground transition-colors">Start Onboarding</a></li>
              <li><a href="#features" className="hover:text-primary-foreground transition-colors">Features</a></li>
              <li><a href="https://licindia.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">Visit licindia.in</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lic-gold mb-4 text-sm uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-lic-gold" /> 022-68276827</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-lic-gold" /> info@licindia.in</li>
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 text-lic-gold mt-0.5" /> Yogakshema, Mumbai — 400021</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Life Insurance Corporation of India. All rights reserved. IRDAI Reg No.: 512
        </div>
      </div>
    </footer>
  );
};

export default Footer;
