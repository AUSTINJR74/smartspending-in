import {
  Percent,
  Gift,
  HelpCircle,
  Shield,
  CreditCard,
  AlertTriangle,
} from "lucide-react";

const mistakes = [
  { icon: Percent, title: "Paying unnecessary interest", description: "Not clearing dues on time leads to hidden charges." },
  { icon: Gift, title: "Missing reward benefits", description: "Most people don't claim the rewards they've already earned." },
  { icon: HelpCircle, title: "Confusion around EMIs", description: "\"No-cost\" EMI isn't always free — hidden costs add up." },
  { icon: Shield, title: "Not understanding insurance", description: "Skipping insurance or buying the wrong plan is costly." },
  { icon: CreditCard, title: "Misusing debit & credit cards", description: "Using the wrong card for the wrong purpose wastes money." },
  { icon: AlertTriangle, title: "Ignoring annual fees", description: "Paying fees on cards that don't match your spending style." },
];

const ProblemSection = () => {
  return (
    <section className="section-padding bg-card" id="problems">
      <div className="container-wide">
        <div className="text-center mb-14">
          <p className="section-label">The Problem</p>
          <h2 className="section-title">Common Card Mistakes People Make</h2>
          <p className="section-subtitle">
            Most people lose money simply because no one taught them the basics.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {mistakes.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-background border border-border card-elevated"
            >
              <div className="p-2.5 rounded-lg bg-accent inline-flex mb-4">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-1.5">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
