import { MessageSquare, TrendingUp, Lightbulb } from "lucide-react";

const services = [
  {
    icon: MessageSquare,
    title: "Consultation",
    description: "One-on-one expert sessions tailored to your specific needs. Get clarity on your goals and a clear action plan to move forward.",
  },
  {
    icon: TrendingUp,
    title: "Financial Guidance",
    description: "Make informed financial decisions with personalized advice. From budgeting to investments, get guidance that works for you.",
  },
  {
    icon: Lightbulb,
    title: "Smart Spending Tips",
    description: "Learn practical strategies to optimize your spending, maximize rewards, and build better financial habits that last.",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-background" id="services">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">What I Offer</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
            Services Designed for You
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group p-7 rounded-2xl bg-card border border-border card-elevated text-center"
            >
              <div className="inline-flex p-4 rounded-2xl bg-accent text-accent-foreground mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
