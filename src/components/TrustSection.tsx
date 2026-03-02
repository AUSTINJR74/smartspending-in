import { Check } from "lucide-react";

const points = [
  "Simple language explanations",
  "Real experiences",
  "Awareness-focused",
  "No marketing push",
  "Beginner friendly",
];

const TrustSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-narrow text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-10">
          Why Follow This Page?
        </h2>
        <div className="inline-flex flex-col gap-4 text-left">
          {points.map((point, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="p-1 rounded-full bg-primary text-primary-foreground shrink-0">
                <Check className="w-4 h-4" />
              </div>
              <span className="text-foreground/90 font-medium">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
