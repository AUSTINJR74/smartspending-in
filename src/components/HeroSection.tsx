import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "24h", label: "Response Time" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-5 pt-24 pb-20 md:px-8 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="container-wide relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/10 text-accent-foreground text-sm font-medium animate-fade-in-up"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Now accepting new clients
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-foreground tracking-tight leading-[1.1] animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Book a Smart{" "}
            <span className="text-primary relative">
              Consultation
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M1 5.5Q50 1 100 4T199 3" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
              </svg>
            </span>{" "}
            Call
          </h1>

          <p
            className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Get personalized expert guidance that cuts through the noise. One focused session to transform your strategy.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-2 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button size="lg" className="text-base px-8 h-13 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 gap-2" asChild>
              <a href="#booking">
                Schedule Your Call
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 h-13 rounded-xl gap-2 hover:scale-[1.02] transition-all duration-300" asChild>
              <a href="#how-it-works">
                <Play className="w-4 h-4" />
                See How It Works
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div
            className="flex items-center justify-center gap-8 md:gap-12 pt-8 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl md:text-3xl font-bold font-heading text-foreground">{stat.value}</p>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
