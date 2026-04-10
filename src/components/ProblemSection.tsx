import {
  Percent,
  Gift,
  HelpCircle,
  Shield,
  CreditCard,
  AlertTriangle,
} from "lucide-react";
import AnimatedSection, { StaggerContainer, StaggerItem } from "./AnimatedSection";
import problemsImg from "@/assets/problems-illustration.png";

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
    <section className="section-padding bg-secondary/50" id="problems">
      <div className="container-wide">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="section-label">The Problem</p>
            <h2 className="section-title">Common Card Mistakes People Make</h2>
            <p className="section-subtitle">
              Most people lose money simply because no one taught them the basics.
            </p>
            <div className="flex justify-center mt-10">
              <img src={problemsImg} alt="Common financial mistakes" className="w-44 md:w-56 object-contain opacity-90" />
            </div>
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {mistakes.map((item, i) => (
            <StaggerItem key={i}>
              <div className="group p-7 rounded-2xl bg-background border border-border card-elevated gradient-border h-full">
                <div className="p-3 rounded-xl bg-accent inline-flex mb-5 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ProblemSection;
