import { Heart, ShieldCheck, Users, TrendingUp, Activity, Car, Home, Umbrella } from "lucide-react";

const lifeFeatures = [
  { icon: Users, text: "Family Protection" },
  { icon: TrendingUp, text: "Income Replacement" },
  { icon: ShieldCheck, text: "Long-term Security" },
  { icon: Heart, text: "Future Planning" },
];

const generalFeatures = [
  { icon: Activity, text: "Health Insurance" },
  { icon: Car, text: "Vehicle Insurance" },
  { icon: Home, text: "Property Protection" },
  { icon: Umbrella, text: "Risk Coverage" },
];

const InsuranceTypes = () => {
  return (
    <section id="insurance-types" className="section-padding bg-card/50">
      <div className="container-wide">
        <div className="text-center mb-16">
          <p className="section-label">Insurance Solutions</p>
          <h2 className="section-title">Choose the Right Protection</h2>
          <p className="section-subtitle">
            Comprehensive insurance guidance tailored to your life stage and needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Life Insurance Card */}
          <div className="group relative p-8 md:p-10 rounded-3xl bg-background border border-border card-elevated overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-500" />
            <div className="relative">
              <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-3">Life Insurance</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Protect your family's financial future with the right life insurance plan. Ensure peace of mind for those who matter most.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {lifeFeatures.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border/50 group-hover:border-primary/20 transition-colors">
                    <f.icon className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-medium text-foreground">{f.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* General Insurance Card */}
          <div className="group relative p-8 md:p-10 rounded-3xl bg-background border border-border card-elevated overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/30 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/50 transition-colors duration-500" />
            <div className="relative">
              <div className="inline-flex p-4 rounded-2xl bg-accent text-accent-foreground mb-6 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-3">General Insurance</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Safeguard your health, vehicle, and property. Comprehensive coverage for life's uncertainties.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {generalFeatures.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border/50 group-hover:border-accent-foreground/20 transition-colors">
                    <f.icon className="w-5 h-5 text-accent-foreground shrink-0" />
                    <span className="text-sm font-medium text-foreground">{f.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceTypes;
