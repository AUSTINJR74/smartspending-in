import { ArrowRight, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/madhan-profile.png";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center px-5 pt-24 pb-20 md:px-8 overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="container-wide relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Profile Photo */}
          <div className="flex justify-center animate-fade-in-up">
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
              <img
                src={profileImg}
                alt="Madhan - Finance Educator"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-foreground tracking-tight leading-[1.1] animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Madhan
          </h1>

          {/* Tagline */}
          <p
            className="text-lg md:text-xl text-foreground/80 max-w-xl mx-auto leading-relaxed font-medium animate-fade-in-up"
            style={{ animationDelay: "0.15s" }}
          >
            Helping everyday Indians use Credit & Debit Cards the{" "}
            <span className="text-primary font-semibold">smart way</span>.
          </p>

          {/* Subtitle */}
          <p
            className="text-base md:text-lg text-muted-foreground max-w-md mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Simple finance. Real guidance. No hype.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-2 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
