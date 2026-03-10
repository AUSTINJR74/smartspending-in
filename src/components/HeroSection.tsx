import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/madhan-profile.png";

const tags = ["Credit Cards", "Debit Cards", "Rewards", "Insurance", "Travel Deals"];

const HeroSection = () => {
  return (
    <section id="hero" className="px-5 pt-28 pb-20 md:px-8 md:pt-36 md:pb-28">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left - Text */}
          <div className="text-center md:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-foreground tracking-tight leading-[1.15]">
              Helping Indians use Credit & Debit Cards the{" "}
              <span className="text-primary">Smart Way</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Simple finance guidance for everyday users. No jargon, no product selling — just practical education.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-2">
              <Button size="lg" className="rounded-lg gap-2 px-7" asChild>
                <a href="#booking">
                  Get Free Guidance
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-lg px-7" asChild>
                <a href="#content">View Latest Content</a>
              </Button>
            </div>
          </div>

          {/* Right - Profile Photo */}
          <div className="flex justify-center md:justify-end">
            <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={profileImg}
                alt="Madhan - Finance Educator"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
