import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Briefcase, FileCheck, ShieldCheck, ClipboardList, UserPlus } from "lucide-react";

const CUSTOMER_JOURNEY_LINK = "https://presales.businessbywire.com/vividwebdp/vividflow/run/nextgenlife#Landing";
const AGENT_JOURNEY_LINK = "https://presales.businessbywire.com/vividwebdp/vividflow/run/agent_onboarding#Landing";

const JourneySelector = () => {
  return (
    <section id="journey" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-xl mx-auto mb-12 opacity-0 animate-fade-up" style={{ animationDelay: "0ms" }}>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance" style={{ lineHeight: 1.15 }}>
            Choose Your Onboarding Path
          </h2>
          <p className="text-muted-foreground mt-3 text-sm md:text-base">
            Select your role to begin a guided onboarding experience tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto items-stretch">
          {/* Customer Card */}
          <div className="opacity-0 animate-slide-in-left flex" style={{ animationDelay: "150ms" }}>
            <div className="bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-border group relative overflow-hidden flex flex-col w-full">
              <div className="absolute top-0 left-0 w-full h-1 gradient-gold" />
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-lg bg-lic-gold/15 flex items-center justify-center">
                  <Users className="w-6 h-6 text-lic-gold" />
                </div>
                <h3 className="text-xl font-bold text-foreground">I am a Customer</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-6">
                New or existing policyholder? Start your onboarding to explore plans, submit documents, and manage your policies digitally.
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  { icon: FileCheck, text: "Submit KYC documents online" },
                  { icon: ShieldCheck, text: "View & manage your policies" },
                  { icon: ClipboardList, text: "Explore insurance plans" },
                ].map((item) => (
                  <li key={item.text} className="flex items-center gap-3 text-sm text-foreground/80">
                    <item.icon className="w-4 h-4 text-lic-success flex-shrink-0" />
                    {item.text}
                  </li>
                ))}
              </ul>
              <Button variant="hero" className="w-full mt-auto" onClick={() => { window.location.href = CUSTOMER_JOURNEY_LINK; }}>
                Apply Now <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Agent Card */}
          <div className="opacity-0 animate-slide-in-right flex" style={{ animationDelay: "250ms" }}>
            <div className="bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-border group relative overflow-hidden flex flex-col w-full">
              <div className="absolute top-0 left-0 w-full h-1 gradient-navy" />
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">I am an Agent</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-6">
                LIC agent or advisor? Complete your onboarding, access tools, and start helping customers secure their future.
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  { icon: UserPlus, text: "Register & verify credentials" },
                  { icon: FileCheck, text: "Access agent dashboard" },
                  { icon: ClipboardList, text: "Manage client portfolios" },
                ].map((item) => (
                  <li key={item.text} className="flex items-center gap-3 text-sm text-foreground/80">
                    <item.icon className="w-4 h-4 text-lic-sky flex-shrink-0" />
                    {item.text}
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-auto" size="default" onClick={() => { window.location.href = AGENT_JOURNEY_LINK; }}>
                Apply Now <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySelector;
