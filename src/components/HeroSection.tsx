import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import profileImg from "@/assets/madhan-profile.png";
import cardsImg from "@/assets/hero-cards-illustration.png";

const tags = ["Credit Cards", "Debit Cards", "Rewards", "Insurance", "Travel Deals"];

const HeroSection = () => {
  return (
    <section id="hero" className="px-5 pt-28 pb-20 md:px-8 md:pt-36 md:pb-28 overflow-hidden">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left - Text */}
          <div className="text-center md:text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Free financial guidance for everyone
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-foreground tracking-tight leading-[1.15]"
            >
              Helping Indians use Credit & Debit Cards the{" "}
              <span className="text-primary">Smart Way</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-lg text-muted-foreground max-w-lg leading-relaxed"
            >
              Simple finance guidance for everyday users. No jargon, no product selling — just practical education.
            </motion.p>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-2 justify-center md:justify-start"
            >
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-2"
            >
              <Button
                size="lg"
                className="rounded-xl gap-2 px-8 h-12 text-base shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] transition-all duration-300"
                asChild
              >
                <a href="#booking">
                  Get Free Guidance
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-xl px-8 h-12 text-base hover:scale-[1.02] transition-all duration-300" asChild>
                <a href="#content">View Latest Content</a>
              </Button>
            </motion.div>
          </div>

          {/* Right - Profile + Floating card illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center md:justify-end relative"
          >
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={profileImg}
                  alt="Madhan - Finance Educator"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating illustration badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-10 md:-left-16 w-28 md:w-36 bg-background rounded-xl shadow-lg border border-border p-2"
              >
                <img src={cardsImg} alt="Finance tools" className="w-full h-auto" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
