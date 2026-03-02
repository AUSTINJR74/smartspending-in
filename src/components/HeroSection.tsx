import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center section-padding bg-background overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }} />
      
      <div className="container-narrow text-center space-y-8 relative z-10">
        <div className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-2 animate-fade-in-up">
          Professional Consultation Services
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading text-foreground tracking-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Book a Smart
          <span className="block text-primary">Consultation Call</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Get personalized expert guidance tailored to your needs. One call can change your financial future — let's make it count.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <Button size="lg" className="text-base px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all" asChild>
            <a href="#booking">Schedule Your Call</a>
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8 py-6 text-lg rounded-xl" asChild>
            <a href="#about">Learn More</a>
          </Button>
        </div>

        <div className="pt-12 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <a href="#about" className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
