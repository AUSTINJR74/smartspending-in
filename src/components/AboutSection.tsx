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
    <section className="section-padding bg-card" id="about">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <AnimatedSection>
            <div className="flex justify-center md:justify-start">
              <div className="w-64 h-72 md:w-72 md:h-80 rounded-2xl overflow-hidden shadow-md">
                <img src={profileImg} alt="Madhan - Finance Educator" className="w-full h-full object-cover" />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="space-y-5">
              <div>
                <p className="section-label">About</p>
                <h2 className="section-title">About Madhan</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Madhan is a software professional and passionate finance educator
                who believes everyone deserves to understand their money better. He
                simplifies complex financial topics — from credit card rewards to
                insurance and EMI traps — making them accessible for everyday Indians.
              </p>
              <div className="space-y-2.5">
                {points.map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
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
