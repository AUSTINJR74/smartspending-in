import { CreditCard, Wallet, Gift, Calculator, Shield, Plane, HeartPulse, FileCheck } from "lucide-react";

const items = [
  { icon: CreditCard, title: "Credit Card Guidance", desc: "Choose and use credit cards wisely" },
  { icon: Wallet, title: "Debit Card Benefits", desc: "Maximize your debit card perks" },
  { icon: Gift, title: "Reward Points & Cashback", desc: "Never miss a reward opportunity" },
  { icon: Calculator, title: "EMI Awareness", desc: "Understand EMI costs before committing" },
  { icon: HeartPulse, title: "Health Insurance", desc: "Pick the right health cover for your family" },
  { icon: FileCheck, title: "Term Insurance", desc: "Secure your family's future affordably" },
  { icon: Shield, title: "Insurance Protection", desc: "Know what your cards actually cover" },
  { icon: Plane, title: "Smart Travel Deals", desc: "Save on travel with the right cards" },
];

const ExpertiseSection = () => {
  return (
    <section className="section-padding bg-background" id="expertise">
      <div className="container-wide">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground text-center mb-4">
          What I Help With
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
          Practical guidance to make your financial tools work for you.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-card card-elevated text-center space-y-3"
            >
              <div className="inline-flex p-3 rounded-xl bg-accent text-accent-foreground">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
