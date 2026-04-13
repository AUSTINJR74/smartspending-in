import { motion } from "framer-motion";
import siteContent from "@/data/siteContent";

const BenefitsSection = () => {
  const { benefits } = siteContent;

  return (
    <section className="section-padding bg-white relative overflow-hidden" id="services">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-50 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-50 blur-[100px] pointer-events-none" />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label">{benefits.sectionLabel}</p>
          <h2 className="section-title">
            {benefits.sectionTitle}{" "}
            <span className="gradient-text">{benefits.sectionTitleHighlight}</span>
          </h2>
          <p className="section-subtitle">{benefits.sectionSubtitle}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {benefits.cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="group relative p-8 md:p-10 rounded-3xl bg-white border border-border/60 card-elevated h-full">
                {/* Icon */}
                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${card.gradient} mb-6 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-400`}
                >
                  <card.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="font-bold text-foreground text-xl mb-3 font-display">
                  {card.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {card.description}
                </p>

                {/* Hover accent line */}
                {/* <div
                  className={`absolute bottom-0 left-8 right-8 h-1 rounded-full bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-400`}
                /> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
