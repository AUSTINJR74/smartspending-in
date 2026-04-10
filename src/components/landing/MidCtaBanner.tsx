import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import siteContent from "@/data/siteContent";

const MidCtaBanner = () => {
  const { midCta } = siteContent;

  return (
    <section className="relative overflow-hidden">
      <div className="gradient-bg py-20 md:py-24 px-6 md:px-10 relative">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-white/5 blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-white/5 blur-[80px]" />
        </div>
        <div className="absolute inset-0 grid-pattern-dark pointer-events-none" />

        <div className="container-narrow relative z-10 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-display text-balance">
              {midCta.headline}
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/70 text-lg max-w-xl mx-auto leading-relaxed"
          >
            {midCta.subtext}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center gap-4 pt-2"
          >
            <Button
              size="lg"
              className="rounded-full px-10 h-14 text-lg font-bold bg-white text-foreground hover:bg-white/90 hover:scale-[1.03] transition-all duration-300 shadow-2xl gap-2.5"
              asChild
            >
              <a href={midCta.buttonHref}>
                {midCta.buttonLabel}
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>

            {midCta.urgencyText && (
              <span className="inline-flex items-center gap-2 text-sm text-white/60 font-medium">
                <Zap className="w-4 h-4 text-yellow-300" />
                {midCta.urgencyText}
              </span>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MidCtaBanner;
