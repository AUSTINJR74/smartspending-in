import { MessageSquare, TrendingUp, Lightbulb, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: MessageSquare,
    title: "Consultation",
    description: "One-on-one expert sessions tailored to your specific needs. Get clarity and a clear action plan.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: TrendingUp,
    title: "Financial Guidance",
    description: "Make informed decisions with personalized advice on budgeting, investments, and growth strategies.",
    color: "bg-accent text-accent-foreground",
  },
  {
    icon: Lightbulb,
    title: "Smart Spending Tips",
    description: "Optimize your spending, maximize rewards, and build better financial habits that last a lifetime.",
    color: "bg-secondary text-foreground",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-background" id="services">
      <div className="container-wide">
        <div className="text-center mb-16">
          <p className="section-label">Services</p>
          <h2 className="section-title">What I Can Help You With</h2>
          <p className="section-subtitle">
            Focused services designed to deliver maximum impact in minimum time.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-2xl bg-card border border-border card-elevated cursor-pointer"
            >
              <div className={`inline-flex p-3.5 rounded-xl ${service.color} mb-6 transition-transform duration-300 group-hover:scale-110`}>
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-3 flex items-center gap-2">
                {service.title}
                <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
