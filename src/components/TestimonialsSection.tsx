import { Star, Quote } from "lucide-react";
import AnimatedSection, { StaggerContainer, StaggerItem } from "./AnimatedSection";
import testimonialsImg from "@/assets/testimonials-illustration.png";

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
          <div className="text-center mb-16">
            <p className="section-label">Testimonials</p>
            <h2 className="section-title">Trusted by Hundreds</h2>
            <p className="section-subtitle">
              Hear from people who've transformed their financial approach.
            </p>
            <div className="flex justify-center mt-10">
              <img src={testimonialsImg} alt="Happy customers giving reviews" className="w-40 md:w-52 object-contain" />
            </div>
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <StaggerItem key={i}>
              <div className="p-8 rounded-2xl bg-card border border-border card-elevated gradient-border flex flex-col h-full">
                <Quote className="w-8 h-8 text-primary/15 mb-5" />
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed flex-1 mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-5 border-t border-border">
                  <div className="w-10 h-10 rounded-full gradient-bg text-primary-foreground flex items-center justify-center font-semibold text-xs">
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
