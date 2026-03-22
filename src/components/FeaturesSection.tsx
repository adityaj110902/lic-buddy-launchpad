import { FileText, Lock, Clock, Headphones, Smartphone, CheckCircle2 } from "lucide-react";

const features = [
  { icon: FileText, title: "Paperless Process", description: "Complete your onboarding digitally — no paperwork needed." },
  { icon: Lock, title: "Secure & Private", description: "Bank-grade encryption protects your personal data at every step." },
  { icon: Clock, title: "Quick Turnaround", description: "Get onboarded in minutes, not days. Fast approvals guaranteed." },
  { icon: Headphones, title: "Dedicated Support", description: "24/7 helpline and chat support throughout your journey." },
  { icon: Smartphone, title: "Mobile Friendly", description: "Start on any device — phone, tablet, or desktop." },
  { icon: CheckCircle2, title: "IRDAI Compliant", description: "Fully compliant with all regulatory guidelines and standards." },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-xl mx-auto mb-14 opacity-0 animate-fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance" style={{ lineHeight: 1.15 }}>
            Why Onboard with Us?
          </h2>
          <p className="text-muted-foreground mt-3 text-sm md:text-base">
            A seamless, secure, and modern experience built for India's most trusted insurer.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="opacity-0 animate-fade-up group p-6 rounded-xl border border-border bg-background hover:shadow-lg transition-shadow duration-300"
              style={{ animationDelay: `${100 + i * 80}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-lic-gold/10 flex items-center justify-center mb-4 group-hover:bg-lic-gold/20 transition-colors">
                <feature.icon className="w-5 h-5 text-lic-gold" />
              </div>
              <h3 className="font-semibold text-foreground mb-1.5">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
