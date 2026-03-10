import {
  CreditCard,
  Wallet,
  Gift,
  AlertTriangle,
  Shield,
  Plane,
} from "lucide-react";

const services = [
  { icon: CreditCard, title: "Credit Card Guidance", description: "Choose the right card, maximize rewards, and avoid unnecessary fees." },
  { icon: Wallet, title: "Debit Card Benefits", description: "Unlock hidden perks, cashback offers, and smart daily usage tips." },
  { icon: Gift, title: "Reward Points & Cashback", description: "Learn to stack rewards, redeem wisely, and earn from every swipe." },
  { icon: AlertTriangle, title: "EMI Awareness", description: "Understand the real cost of EMIs and when they actually make sense." },
  { icon: Shield, title: "Insurance Protection", description: "Get clarity on health and term insurance — what you need and what you don't." },
  { icon: Plane, title: "Travel Deals", description: "Best travel cards, lounge access tips, and ways to fly smart on a budget." },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-background" id="services">
      <div className="container-wide">
        <div className="text-center mb-14">
          <p className="section-label">Expertise</p>
          <h2 className="section-title">What I Help With</h2>
          <p className="section-subtitle">
            Practical, no-nonsense guidance across the topics that matter most to your wallet.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <div
              key={i}
              className="group p-7 rounded-xl bg-card border border-border card-elevated"
            >
              <div className="p-3 rounded-lg bg-accent inline-flex mb-5 group-hover:bg-primary/10 transition-colors">
                <service.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
