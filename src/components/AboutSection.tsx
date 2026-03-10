import { CheckCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import profileImg from "@/assets/madhan-profile.png";

const points = [
  "Software professional turned finance educator",
  "Simplifies cards, rewards & insurance for everyday people",
  "Helps you understand benefits and avoid costly mistakes",
  "No jargon, no hype — just practical guidance",
];

const AboutSection = () => {
  return (
    <section className="section-padding bg-background" id="about">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
          <AnimatedSection>
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <div className="w-64 h-72 md:w-72 md:h-80 rounded-3xl overflow-hidden shadow-lg ring-1 ring-border">
                  <img src={profileImg} alt="Madhan - Finance Educator" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-2xl gradient-bg opacity-10" />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="space-y-6">
              <div>
                <p className="section-label">About</p>
                <h2 className="section-title">About Madhan</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-base">
                Madhan is a software professional and passionate finance educator
                who believes everyone deserves to understand their money better. He
                simplifies complex financial topics — from credit card rewards to
                insurance and EMI traps — making them accessible for everyday Indians.
              </p>
              <div className="space-y-3 pt-1">
                {points.map((point, i) => (
                  <div key={i} className="flex items-center gap-3.5 group">
                    <div className="p-1 rounded-full bg-accent group-hover:bg-primary/10 transition-colors">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground text-sm font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
