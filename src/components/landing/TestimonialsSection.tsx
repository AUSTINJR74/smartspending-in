import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import siteContent from "@/data/siteContent";

const TestimonialsSection = () => {
  const { testimonials } = siteContent;

  return (
    <section className="section-padding bg-background relative" id="testimonials">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-50 blur-[120px] pointer-events-none" />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label">{testimonials.sectionLabel}</p>
          <h2 className="section-title">
            {testimonials.sectionTitle}{" "}
            <span className="gradient-text">{testimonials.sectionTitleHighlight}</span>
          </h2>
          <p className="section-subtitle">{testimonials.sectionSubtitle}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.items.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="group p-8 rounded-3xl bg-white border border-border/60 card-elevated gradient-border flex flex-col h-full relative overflow-hidden">
                {/* Subtle gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-purple-50/0 group-hover:from-blue-50/50 group-hover:to-purple-50/50 transition-all duration-500 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full">
                  <Quote className="w-10 h-10 text-primary/10 mb-4" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star
                        key={j}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  <p className="text-foreground/80 leading-relaxed flex-1 mb-6">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  <div className="flex items-center gap-3 pt-5 border-t border-border/60">
                    <div className="w-11 h-11 rounded-full gradient-bg text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-primary/20">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">
                        {t.name}
                      </p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
