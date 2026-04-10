import { ArrowRight, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import siteContent from "@/data/siteContent";

const FinalCtaBanner = () => {
  const { finalCta } = siteContent;

  return (
    <section className="relative overflow-hidden hero-gradient" id="final-cta">
      <div className="absolute inset-0 grid-pattern-dark pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/8 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-500/8 blur-[100px]" />
      </div>

      <div className="container-narrow relative z-10 px-6 md:px-10 py-24 md:py-32 text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-display text-balance"
        >
          {finalCta.headline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white/60 text-lg max-w-xl mx-auto leading-relaxed"
        >
          {finalCta.subtext}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center gap-5 pt-2"
        >
          <Button
            size="lg"
            className="rounded-full px-12 h-16 text-lg font-bold bg-white text-foreground hover:bg-white/90 hover:scale-[1.03] transition-all duration-300 shadow-2xl shadow-white/10 gap-2.5 cta-glow"
            asChild
          >
            <a href={finalCta.buttonHref}>
              {finalCta.buttonLabel}
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>

          {finalCta.urgencyText && (
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-2 text-sm text-white/50 font-medium"
            >
              <Flame className="w-4 h-4 text-orange-400" />
              {finalCta.urgencyText}
            </motion.span>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCtaBanner;
