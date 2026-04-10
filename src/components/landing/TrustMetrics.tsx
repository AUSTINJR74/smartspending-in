import { motion } from "framer-motion";
import useCountUp from "@/hooks/useCountUp";
import siteContent from "@/data/siteContent";
import type { MetricItem } from "@/data/siteContent";

const MetricCard = ({ metric }: { metric: MetricItem }) => {
  const { count, ref } = useCountUp({ end: metric.value, duration: 2200 });

  return (
    <div ref={ref} className="text-center space-y-3">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-flex p-4 rounded-2xl bg-white shadow-lg shadow-primary/5 mb-2"
      >
        <metric.icon className="w-7 h-7 text-primary" />
      </motion.div>
      <p className="text-4xl md:text-5xl font-extrabold gradient-text font-display">
        {metric.prefix}{count}{metric.suffix}
      </p>
      <p className="text-muted-foreground font-medium text-sm uppercase tracking-wider">
        {metric.label}
      </p>
    </div>
  );
};

const TrustMetrics = () => {
  const { metrics } = siteContent;

  return (
    <section className="section-padding bg-background relative" id="metrics">
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <MetricCard metric={metric} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustMetrics;
