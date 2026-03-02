import { Mail, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/madhan-profile.png";

const HeroSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow flex flex-col items-center text-center gap-8">
        <div className="relative">
          <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-lg">
            <img
              src={profileImg}
              alt="Madhan - Finance Educator"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
            Finance Educator
          </div>
        </div>

        <div className="space-y-4 max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground tracking-tight">
            Madhan
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 font-medium leading-relaxed">
            Helping everyday Indians use Credit & Debit Cards the smart way — and make informed decisions on Health & Term Insurance.
          </p>
          <p className="text-muted-foreground text-base md:text-lg">
            Simple finance. Real guidance. No hype.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Button size="lg" className="gap-2 text-base px-6" asChild>
            <a href="#lead-form">
              <Mail className="w-4 h-4" />
              Get Free Guidance
            </a>
          </Button>
          <Button size="lg" variant="outline" className="gap-2 text-base px-6" asChild>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-4 h-4" />
              Follow on Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
