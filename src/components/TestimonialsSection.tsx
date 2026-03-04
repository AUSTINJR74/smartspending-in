import { Star, Quote } from "lucide-react";
import testimonialsImg from "@/assets/testimonials-illustration.png";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Small Business Owner",
    text: "The consultation was incredibly insightful. I got actionable advice that helped me save significantly on my business expenses.",
    avatar: "PS",
  },
  {
    name: "Rahul Verma",
    role: "IT Professional",
    text: "Clear, practical, and no-nonsense guidance. The session helped me understand my finances much better and plan ahead confidently.",
    avatar: "RV",
  },
  {
    name: "Anita Desai",
    role: "Freelance Designer",
    text: "Best consultation I've ever had. The advice was personalized and I left the call knowing exactly what steps to take next.",
    avatar: "AD",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-card/50" id="testimonials">
      <div className="container-wide">
        <div className="text-center mb-16">
          <p className="section-label">Testimonials</p>
          <h2 className="section-title">Trusted by Hundreds</h2>
          <p className="section-subtitle">
            Don't just take my word for it — hear from clients who've transformed their approach.
          </p>
          {/* Illustration */}
          <div className="flex justify-center mt-8">
            <img
              src={testimonialsImg}
              alt="Client testimonials illustration"
              className="w-full max-w-sm md:max-w-md object-contain opacity-85 rounded-xl"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="relative p-7 rounded-2xl bg-background border border-border card-elevated flex flex-col">
              <Quote className="w-8 h-8 text-primary/15 mb-4" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed flex-1 mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-heading font-semibold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
