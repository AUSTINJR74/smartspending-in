import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import siteContent from "@/data/siteContent";

const HeroSection = () => {
  const { hero } = siteContent;

  return (
    <section
      id="hero"
      className="relative min-h-[100vh] flex items-center overflow-hidden bg-black"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern-dark pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[1200px] h-[600px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[1200px] h-[600px] rounded-full bg-purple-500/10 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] rounded-full bg-indigo-500/5 blur-[150px]" />
      </div>

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 right-[15%] w-3 h-3 rounded-full bg-blue-400/40"
        animate={{ y: [0, -20, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[40%] left-[10%] w-2 h-2 rounded-full bg-purple-400/40"
        animate={{ y: [0, -15, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute bottom-[30%] right-[20%] w-4 h-4 rounded-full bg-emerald-400/30"
        animate={{ y: [0, -25, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="container-wide relative z-10 px-4 md:px-10 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-card-dark text-white/80 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {hero.badge}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] font-display text-balance"
          >
            {hero.headline}{" "}
            <span className="gradient-text">{hero.headlineHighlight}</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
          >
            {hero.subheading}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-2"
          >
            <Button
              size="lg"
              className="rounded-full gap-2.5 px-10 h-14 text-lg gradient-bg-white text-foreground border-0 shadow-2xl shadow-primary/25 hover:bg-white/90 hover:shadow-primary/40 hover:scale-[1.03] transition-all duration-300 font-bold"
              asChild
            >
              <a href={hero.primaryCta.href}>
                {hero.primaryCta.label}
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-10 h-14 text-lg font-bold gap-2 border-white/20 text-white bg-white/5 hover:bg-white/10 hover:border-white/30 hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm"
              asChild
            >
              <a href={hero.secondaryCta.href}>
                {hero.secondaryCta.label}
                <ChevronRight className="w-5 h-5" />
              </a>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-x-6 gap-y-3 justify-center pt-6"
          >
            {hero.trustIndicators.map((indicator, i) => (
              <span
                key={i}
                className="text-sm text-white/50 font-medium"
              >
                {indicator}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" /> */}
    </section>
  );
};

export default HeroSection;
