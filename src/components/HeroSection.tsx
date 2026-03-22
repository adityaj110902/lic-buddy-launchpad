import heroFamily from "@/assets/hero-family.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";

const JOURNEY_LINK = "#journey"; // Replace with your actual journey URL

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroFamily} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-navy opacity-80" />
      </div>

      <div className="relative container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-2xl space-y-6">
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0ms" }}>
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-4 py-1.5 text-primary-foreground text-sm mb-4">
              <Shield className="w-4 h-4 text-lic-gold" />
              Trusted by 29 Crore+ Policyholders
            </div>
          </div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-foreground leading-tight opacity-0 animate-fade-up text-balance"
            style={{ animationDelay: "100ms", lineHeight: 1.1 }}
          >
            Your Life, Our Responsibility.
            <span className="block text-lic-gold mt-2">Start Your Onboarding Today.</span>
          </h1>

          <p className="text-primary-foreground/80 text-base md:text-lg max-w-lg opacity-0 animate-fade-up" style={{ animationDelay: "200ms" }}>
            Whether you're a customer looking for the right plan or an agent ready to serve — begin your LIC journey in just a few clicks.
          </p>

          <div className="flex flex-wrap gap-3 pt-2 opacity-0 animate-fade-up" style={{ animationDelay: "350ms" }}>
            <Button variant="hero" size="lg" asChild>
              <a href={JOURNEY_LINK}>
                Start Journey <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="#features">Learn More</a>
            </Button>
          </div>

          <div className="flex gap-8 pt-6 opacity-0 animate-fade-up" style={{ animationDelay: "500ms" }}>
            {[
              { value: "66+", label: "Years of Trust" },
              { value: "29Cr+", label: "Policyholders" },
              { value: "₹41L Cr", label: "Life Fund" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-xl md:text-2xl font-bold text-lic-gold">{stat.value}</div>
                <div className="text-xs text-primary-foreground/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
