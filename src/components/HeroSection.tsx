import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import profileImg from "@/assets/madhan-profile.png";
import cardsImg from "@/assets/hero-cards-illustration.png";

const tags = ["Credit Cards", "Debit Cards", "Rewards", "Insurance", "Travel Deals"];

const HeroSection = () => {
  return (
    <section id="hero" className="px-6 pt-32 pb-24 md:px-10 md:pt-40 md:pb-32 overflow-hidden relative">
      {/* Grid pattern + gradient overlay */}
      <div className="absolute inset-0 grid-pattern pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/50 blur-3xl translate-y-1/3 -translate-x-1/4" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">
          {/* Left - Text */}
          <div className="text-center md:text-left space-y-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium border border-primary/10"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Free financial guidance for everyone
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-foreground tracking-tight leading-[1.12]"
            >
              Helping Indians Use Credit & Debit Cards the{" "}
              <span className="gradient-text">Smart Way</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-lg text-muted-foreground max-w-lg leading-relaxed"
            >
              Simple finance guidance on credit cards, rewards, EMIs, insurance, and travel deals. No jargon — just practical education.
            </motion.p>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-2.5 justify-center md:justify-start"
            >
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full bg-background border border-border text-foreground text-sm font-medium hover:border-primary/30 hover:bg-accent transition-all duration-200 cursor-default"
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
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-3"
            >
              <Button
                size="lg"
                className="gradient-bg rounded-xl gap-2 px-8 h-13 text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:scale-[1.03] transition-all duration-300 border-0"
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
                className="rounded-xl px-8 h-13 text-base gap-2 hover:bg-accent hover:border-primary/20 hover:scale-[1.02] transition-all duration-300"
                asChild
              >
                <a href="#content">
                  <Play className="w-4 h-4" />
                  Watch Latest Content
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Right - Profile + Floating card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center md:justify-end relative"
          >
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-4 rounded-3xl gradient-bg opacity-[0.08] blur-2xl" />
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-border">
                <img
                  src={profileImg}
                  alt="Madhan - Finance Educator"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-5 -left-8 md:-left-14 w-28 md:w-36 bg-background rounded-2xl shadow-xl border border-border/80 p-3"
              >
                <img src={cardsImg} alt="Finance tools" className="w-full h-auto" />
              </motion.div>
              {/* Decorative dots */}
              <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full gradient-bg opacity-60" />
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/4 -right-6 w-4 h-4 rounded-full bg-primary/20"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
