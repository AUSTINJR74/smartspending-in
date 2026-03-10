import { Instagram, Mic, BookOpen } from "lucide-react";
import AnimatedSection, { StaggerContainer, StaggerItem } from "./AnimatedSection";

const items = [
  {
    icon: Instagram,
    title: "Growing Instagram Community",
    description: "Sharing daily finance tips and card insights with thousands of followers.",
  },
  {
    icon: Mic,
    title: "Finance Podcast Discussions",
    description: "Deep-dive conversations on credit, rewards, and smart money moves.",
  },
  {
    icon: BookOpen,
    title: "Educational Content Creator",
    description: "Creating simple, jargon-free content that makes finance accessible to everyone.",
  },
];

const TrustSection = () => {
  return (
    <section className="px-5 py-16 md:px-8 md:py-20 bg-background">
      <div className="container-wide">
        <StaggerContainer className="grid sm:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <StaggerItem key={i}>
              <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border card-elevated h-full">
                <div className="p-2.5 rounded-lg bg-accent shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default TrustSection;
