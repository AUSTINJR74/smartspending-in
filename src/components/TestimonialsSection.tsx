import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Small Business Owner",
    text: "The consultation was incredibly insightful. I got actionable advice that helped me save significantly on my business expenses.",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "IT Professional",
    text: "Clear, practical, and no-nonsense guidance. The session helped me understand my finances much better and plan ahead confidently.",
    rating: 5,
  },
  {
    name: "Anita Desai",
    role: "Freelance Designer",
    text: "Best consultation I've ever had. The advice was personalized and I left the call knowing exactly what steps to take next.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-card" id="testimonials">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
            What Clients Say
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="p-6 rounded-2xl bg-background border border-border card-elevated flex flex-col">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/90 text-sm leading-relaxed flex-1 mb-5">"{t.text}"</p>
              <div>
                <p className="font-heading font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
