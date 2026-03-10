import {
  CreditCard,
  Wallet,
  Gift,
  AlertTriangle,
  Shield,
  Plane,
} from "lucide-react";
import AnimatedSection, { StaggerContainer, StaggerItem } from "./AnimatedSection";
import servicesImg from "@/assets/services-illustration.png";

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
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="section-label">Expertise</p>
            <h2 className="section-title">What I Help With</h2>
            <p className="section-subtitle">
              Practical, no-nonsense guidance across the topics that matter most to your wallet.
            </p>
            <div className="flex justify-center mt-10">
              <img src={servicesImg} alt="Financial services and card guidance" className="w-48 md:w-64 object-contain" />
            </div>
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((service, i) => (
            <StaggerItem key={i}>
              <div className="group p-8 rounded-2xl bg-card border border-border card-elevated gradient-border h-full">
                <div className="p-3.5 rounded-xl bg-accent inline-flex mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2.5">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ServicesSection;
