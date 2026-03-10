import { Star, Quote } from "lucide-react";
import AnimatedSection, { StaggerContainer, StaggerItem } from "./AnimatedSection";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Small Business Owner",
    text: "The guidance was incredibly insightful. I learned how to maximize my credit card rewards without paying extra fees.",
    avatar: "PS",
  },
  {
    name: "Rahul Verma",
    role: "IT Professional",
    text: "Clear, practical, and no-nonsense. The session helped me pick the right card for my spending habits.",
    avatar: "RV",
  },
  {
    name: "Anita Desai",
    role: "Freelance Designer",
    text: "Best financial guidance I've received. I now understand insurance and card benefits so much better.",
    avatar: "AD",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-background" id="testimonials">
      <div className="container-wide">
        <AnimatedSection>
          <div className="text-center mb-14">
            <p className="section-label">Testimonials</p>
            <h2 className="section-title">Trusted by Hundreds</h2>
            <p className="section-subtitle">
              Hear from people who've transformed their financial approach.
            </p>
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <StaggerItem key={i}>
              <div className="p-7 rounded-xl bg-card border border-border card-elevated flex flex-col h-full">
                <Quote className="w-7 h-7 text-primary/20 mb-4" />
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed flex-1 mb-5">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-9 h-9 rounded-full bg-accent text-primary flex items-center justify-center font-semibold text-xs">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default TestimonialsSection;
