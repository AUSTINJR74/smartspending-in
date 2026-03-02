import { User, BookOpen, Shield, TrendingUp } from "lucide-react";

const points = [
  { icon: User, text: "Software Professional & Finance Educator" },
  { icon: BookOpen, text: "Simplifies finance for everyday users" },
  { icon: TrendingUp, text: "Focus on awareness and smart usage" },
  { icon: Shield, text: "Helps avoid costly mistakes with cards" },
];

const AboutSection = () => {
  return (
    <section className="section-padding bg-card" id="about">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground text-center mb-12">
          About Madhan
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {points.map((point, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-5 rounded-xl bg-background card-elevated"
            >
              <div className="p-2.5 rounded-lg bg-accent text-accent-foreground shrink-0">
                <point.icon className="w-5 h-5" />
              </div>
              <p className="text-foreground/90 font-medium">{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
