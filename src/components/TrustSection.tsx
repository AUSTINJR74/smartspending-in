import { Instagram, Mic, BookOpen, Users, Headphones, FileText } from "lucide-react";
import { StaggerContainer, StaggerItem } from "./AnimatedSection";
import { motion } from "framer-motion";

const stats = [
  {
    icon: Users,
    value: "10K+",
    label: "Community Members",
    description: "Growing community of financially-aware Indians.",
  },
  {
    icon: Headphones,
    value: "50+",
    label: "Podcast Episodes",
    description: "Deep-dive conversations on smart money moves.",
  },
  {
    icon: FileText,
    value: "200+",
    label: "Educational Posts",
    description: "Reels, guides, and breakdowns published.",
  },
];

const TrustSection = () => {
  return (
    <section className="section-padding bg-background relative">
      <div className="container-wide">
        <StaggerContainer className="grid sm:grid-cols-3 gap-6 md:gap-8">
          {stats.map((item, i) => (
            <StaggerItem key={i}>
              <div className="group text-center p-8 rounded-2xl bg-card border border-border card-elevated gradient-border h-full">
                <div className="inline-flex p-3.5 rounded-2xl bg-accent mb-5 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-3xl md:text-4xl font-bold gradient-text mb-1">{item.value}</p>
                <p className="font-semibold text-foreground text-sm mb-1.5">{item.label}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default TrustSection;
