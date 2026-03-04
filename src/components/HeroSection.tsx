import { ArrowRight, Instagram, CreditCard, Gift, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-illustration.png";

const floatingItems = [
  { icon: CreditCard, label: "Smart Cards", position: "top-8 left-4 md:left-12" },
  { icon: Gift, label: "Rewards", position: "top-20 right-4 md:right-16" },
  { icon: Shield, label: "Insurance", position: "bottom-32 left-8 md:left-20" },
  { icon: TrendingUp, label: "Growth", position: "bottom-24 right-8 md:right-12" },
];

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center px-5 pt-24 pb-20 md:px-8 overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-primary/3 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />

      {/* Floating icon badges */}
      {floatingItems.map((item, i) => (
        <div
          key={i}
          className={`absolute ${item.position} hidden md:flex items-center gap-2 px-3 py-2 rounded-xl bg-background/80 backdrop-blur-sm border border-border/50 shadow-md animate-float`}
          style={{ animationDelay: `${i * 0.5}s` }}
        >
          <item.icon className="w-4 h-4 text-primary" />
          <span className="text-xs font-medium text-foreground/70">{item.label}</span>
        </div>
      ))}

      <div className="container-wide relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div className="text-center md:text-left space-y-7">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/10 text-accent-foreground text-sm font-medium animate-fade-in-up"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Free financial guidance for everyone
            </div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground tracking-tight leading-[1.1] animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              Use Your Cards the{" "}
              <span className="text-primary relative">
                Smart Way
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M1 5.5Q50 1 100 4T199 3" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
                </svg>
              </span>
            </h1>

            <p
              className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.15s" }}
            >
              Helping everyday Indians master credit cards, debit cards, rewards, insurance & more.{" "}
              <span className="text-foreground font-medium">Simple finance. Real guidance. No hype.</span>
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2 animate-fade-in-up"
              style={{ animationDelay: "0.25s" }}
            >
              <Button
                size="lg"
                className="text-base px-8 h-13 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 gap-2"
                asChild
              >
                <a href="#booking">
                  Get Free Guidance
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 h-13 rounded-xl gap-2 hover:scale-[1.02] transition-all duration-300"
                asChild
              >
                <a
                  href="https://instagram.com/smartspending.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-4 h-4" />
                  Follow on Instagram
                </a>
              </Button>
            </div>

            {/* Trust badges */}
            <div
              className="flex flex-wrap items-center gap-6 justify-center md:justify-start pt-4 animate-fade-in-up"
              style={{ animationDelay: "0.35s" }}
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                  <CreditCard className="w-4 h-4 text-primary" />
                </div>
                <span className="font-medium">Card Expertise</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                  <Shield className="w-4 h-4 text-primary" />
                </div>
                <span className="font-medium">Insurance Guidance</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                  <Gift className="w-4 h-4 text-primary" />
                </div>
                <span className="font-medium">Rewards Tips</span>
              </div>
            </div>
          </div>

          {/* Right - Illustration */}
          <div
            className="flex justify-center animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <img
              src={heroImg}
              alt="Smart financial planning illustration"
              className="w-full max-w-md md:max-w-lg object-contain drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
