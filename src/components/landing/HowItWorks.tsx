import { motion } from "framer-motion";
import siteContent from "@/data/siteContent";

const HowItWorks = () => {
  const { howItWorks } = siteContent;

  return (
    <section
      className="section-padding relative overflow-hidden bg-background"
      id="how-it-works"
    >
      {/* <div className="absolute inset-0 grid-pattern pointer-events-none" />
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[100px] pointer-events-none" /> */}

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label">{howItWorks.sectionLabel}</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
            {howItWorks.sectionTitle}{" "}
            <span className="gradient-text">{howItWorks.sectionTitleHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mt-5 leading-relaxed">
            {howItWorks.sectionSubtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          {/* <div className="hidden md:block absolute top-[4.5rem] left-[16.66%] right-[16.66%] h-[2px] bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-emerald-500/30" /> */}

          {howItWorks.steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="relative z-10 inline-flex flex-col items-center">
                {/* Step Number */}
                <div className="w-[5.5rem] h-[5.5rem] rounded-2xl glass-card flex items-center justify-center mb-6 group hover:scale-105 transition-transform duration-300">
                  <div className="relative">
                    <step.icon className="w-8 h-8 text-blue-400" />
                    <span className="absolute -top-2 -right-3 text-xs font-bold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-full">
                      {step.step}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 font-display">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
