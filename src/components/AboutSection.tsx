import { CheckCircle } from "lucide-react";
import profileImg from "@/assets/madhan-profile.png";

const points = [
  "Software professional turned finance educator",
  "Simplifies cards, rewards & insurance for everyday people",
  "Helps you understand benefits and avoid costly mistakes",
  "No jargon, no hype — just practical guidance",
];

const AboutSection = () => {
  return (
    <section className="section-padding bg-card/50" id="about">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative mx-auto md:mx-0">
            <div className="w-72 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden shadow-lg">
              <img
                src={profileImg}
                alt="Madhan - Finance Educator"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <p className="section-label">About Me</p>
              <h2 className="section-title">
                About <span className="text-primary">Madhan</span>
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              Madhan is a software professional and passionate finance educator
              who believes everyone deserves to understand their money better. He
              simplifies complex financial topics — from credit card rewards and
              debit card perks to insurance and EMI traps — making them
              accessible and actionable for everyday Indians.
            </p>
            <div className="space-y-3 pt-2">
              {points.map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-foreground/90 font-medium text-sm">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
