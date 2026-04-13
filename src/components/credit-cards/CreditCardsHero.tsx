import { CreditCard as CreditCardIcon, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface CreditCardsHeroProps {
  badge: string;
  headline: string;
  headlineHighlight: string;
  subtitle: string;
}

const CreditCardsHero = ({
  badge,
  headline,
  headlineHighlight,
  subtitle,
}: CreditCardsHeroProps) => (
  <section className="relative overflow-hidden hero-gradient">
    <div className="absolute inset-0 grid-pattern-dark pointer-events-none" />
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-blue-500/8 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-500/8 blur-[120px]" />
    </div>

    <div className="container-wide relative z-10 px-6 md:px-10 pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-card-dark text-white/80 text-sm font-medium">
            <CreditCardIcon className="w-4 h-4 text-blue-400" />
            {badge}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-display text-balance"
        >
          {headline}{" "}
          <span className="gradient-text">{headlineHighlight}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      </div>
    </div>

    {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" /> */}
  </section>
);

export default CreditCardsHero;
