import {
  CreditCard,
  Wallet,
  Gift,
  AlertTriangle,
  Shield,
  Plane,
} from "lucide-react";

const services = [
  {
    icon: CreditCard,
    title: "Credit Card Guidance",
    description:
      "Choose the right card, maximize rewards, and avoid unnecessary fees and debt traps.",
  },
  {
    icon: Wallet,
    title: "Debit Card Benefits",
    description:
      "Unlock hidden perks, cashback offers, and smart ways to use your debit card daily.",
  },
  {
    icon: Gift,
    title: "Rewards & Cashback",
    description:
      "Learn how to stack rewards, redeem points wisely, and get the most from every transaction.",
  },
  {
    icon: AlertTriangle,
    title: "EMI Awareness",
    description:
      "Understand the real cost of EMIs, no-cost traps, and when it makes sense to use them.",
  },
  {
    icon: Shield,
    title: "Insurance Protection",
    description:
      "Get clarity on health and term insurance — what you need, what you don't, and how to compare.",
  },
  {
    icon: Plane,
    title: "Travel Deals",
    description:
      "Find the best travel credit cards, lounge access tips, and ways to fly smart on a budget.",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-background" id="services">
      <div className="container-wide">
        <div className="text-center mb-16">
          <p className="section-label">Expertise</p>
          <h2 className="section-title">What I Help With</h2>
          <p className="section-subtitle">
            Practical, no-nonsense guidance across the topics that matter most to
            your wallet.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-2xl bg-card border border-border card-elevated"
            >
              <div className="inline-flex p-3.5 rounded-xl bg-primary/10 text-primary mb-6 transition-transform duration-300 group-hover:scale-110">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
