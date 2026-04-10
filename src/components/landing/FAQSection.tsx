import { motion } from "framer-motion";
import siteContent from "@/data/siteContent";

const FAQSection = () => {
  const { faq } = siteContent;

  return (
    <section className="section-padding bg-white relative" id="faq">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-purple-50 blur-[100px] pointer-events-none" />

      <div className="container-narrow max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-label">{faq.sectionLabel}</p>
          <h2 className="section-title">
            {faq.sectionTitle}{" "}
            <span className="gradient-text">{faq.sectionTitleHighlight}</span>
          </h2>
          <p className="section-subtitle">{faq.sectionSubtitle}</p>
        </motion.div>

        <div className="space-y-4">
          {faq.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <details className="group bg-background/60 border border-border/60 rounded-2xl px-7 py-5 cursor-pointer transition-all hover:border-primary/20 hover:shadow-md hover:shadow-primary/5">
                <summary className="font-semibold text-foreground list-none flex items-center justify-between gap-4">
                  <span>{item.question}</span>
                  <span className="text-primary text-xl leading-none transition-transform duration-300 group-open:rotate-45 shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-primary/5">
                    +
                  </span>
                </summary>
                <p className="text-muted-foreground leading-relaxed mt-4 pt-4 border-t border-border/60">
                  {item.answer}
                </p>
              </details>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
