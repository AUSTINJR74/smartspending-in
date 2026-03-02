import { Award, Target, Users, CheckCircle } from "lucide-react";
import profileImg from "@/assets/madhan-profile.png";

const points = [
  "Certified financial strategy expert",
  "Personalized, goal-driven sessions",
  "Trusted by 500+ satisfied clients",
  "Simple, actionable advice — no jargon",
];

const AboutSection = () => {
  return (
    <section className="section-padding bg-card/50" id="about">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative mx-auto md:mx-0">
            <div className="relative">
              <div className="w-72 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden shadow-lg">
                <img
                  src={profileImg}
                  alt="Professional Consultant"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-background p-4 rounded-2xl shadow-lg border border-border animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                    <Award className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-sm text-foreground">Top Rated</p>
                    <p className="text-xs text-muted-foreground">4.9/5 rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <p className="section-label">About Me</p>
              <h2 className="section-title">
                Your Trusted Partner for{" "}
                <span className="text-primary">Smarter Decisions</span>
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              I help individuals and businesses navigate complex financial decisions with clarity and confidence. My approach is simple — cut the noise, focus on what matters, and deliver results.
            </p>
            <div className="space-y-3 pt-2">
              {points.map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-foreground/90 font-medium text-sm">{point}</span>
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
