import licLogo from "@/assets/lic.png";
import { Phone, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="gradient-navy text-primary-foreground text-xs py-1.5">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> 022-68276827</span>
            <span className="hidden sm:flex items-center gap-1"><Mail className="w-3 h-3" /> info@licindia.in</span>
          </div>
          <span className="text-primary-foreground/70">IRDAI Reg No.: 512</span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-card shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <img src={licLogo} alt="LIC India" className="h-12 w-12 object-contain" />
            <div className="leading-tight">
              <span className="text-lg font-bold text-primary block" style={{ lineHeight: 1.1 }}>LIC of India</span>
              <span className="text-[10px] text-muted-foreground tracking-wide uppercase">Onboarding Portal</span>
            </div>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-foreground/80">
            <a href="#home" className="hover:text-primary transition-colors">Home</a>
            <a href="#journey" className="hover:text-primary transition-colors">Start Journey</a>
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-foreground active:scale-95 transition-transform"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-card px-4 pb-4 animate-fade-up">
            <div className="flex flex-col gap-3 pt-3 text-sm font-medium">
              <a href="#home" className="py-2 hover:text-primary" onClick={() => setMobileOpen(false)}>Home</a>
              <a href="#journey" className="py-2 hover:text-primary" onClick={() => setMobileOpen(false)}>Start Journey</a>
              <a href="#features" className="py-2 hover:text-primary" onClick={() => setMobileOpen(false)}>Features</a>
              <a href="#contact" className="py-2 hover:text-primary" onClick={() => setMobileOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
