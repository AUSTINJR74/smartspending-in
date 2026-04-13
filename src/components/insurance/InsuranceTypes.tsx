import { motion } from "framer-motion";
import siteContent from "@/data/siteContent";

const { types } = siteContent.insurance;
const { lifeInsurance, generalInsurance } = types;

const InsuranceTypes = () => {
  return (
    <section id="insurance-types" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-emerald-50 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-50 blur-[100px] pointer-events-none" />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label">{types.sectionLabel}</p>
          <h2 className="section-title">
            {types.sectionTitle}{" "}
            <span className="gradient-text">{types.sectionTitleHighlight}</span>
          </h2>
          <p className="section-subtitle">{types.sectionSubtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="group relative p-8 md:p-10 rounded-3xl bg-white border border-border/60 card-elevated overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-40 h-40 bg-rose-50 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-rose-100 transition-colors duration-500" />
              <div className="relative">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-400 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <lifeInsurance.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-3">{lifeInsurance.title}</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">{lifeInsurance.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {lifeInsurance.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-background border border-border/50 group-hover:border-rose-200 transition-colors">
                      <f.icon className="w-5 h-5 text-rose-500 shrink-0" />
                      <span className="text-sm font-medium text-foreground">{f.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="group relative p-8 md:p-10 rounded-3xl bg-white border border-border/60 card-elevated overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-50 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-100 transition-colors duration-500" />
              <div className="relative">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-400 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <generalInsurance.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-3">{generalInsurance.title}</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">{generalInsurance.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {generalInsurance.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-background border border-border/50 group-hover:border-emerald-200 transition-colors">
                      <f.icon className="w-5 h-5 text-emerald-500 shrink-0" />
                      <span className="text-sm font-medium text-foreground">{f.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceTypes;
