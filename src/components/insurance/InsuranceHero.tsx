import { Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const InsuranceHero = () => {
  return (
    <section id="insurance-hero" className="relative min-h-[85vh] flex items-center justify-center px-5 pt-24 pb-20 md:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/3 -translate-x-1/4" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/30 rounded-full blur-3xl translate-y-1/4 translate-x-1/4" />

      <div className="container-narrow relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/10 text-accent-foreground text-sm font-medium animate-fade-in-up">
          <Shield className="w-4 h-4" />
          Insurance & Protection
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-foreground tracking-tight leading-[1.1] animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Insuring the Future of{" "}
          <span className="text-primary">Your Loved Ones</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Insurance is financial protection that helps reduce risk and secure your family's future. Let me help you find the right coverage.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <Button size="lg" className="text-base px-8 h-13 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 gap-2" asChild>
            <a href="#insurance-booking">
              Book Insurance Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8 h-13 rounded-xl gap-2 hover:scale-[1.02] transition-all duration-300" asChild>
            <a href="#insurance-types">
              Explore Insurance Types
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InsuranceHero;
