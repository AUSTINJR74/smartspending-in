import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CheckCircle,
  ArrowRight,
  Shield,
  CreditCard,
  BookOpen,
  Home,
  Sparkles,
  CalendarCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FooterSection from "@/components/landing/FooterSection";
import siteContent from "@/data/siteContent";

const { thankYou: content } = siteContent;
const blogPosts = siteContent.blog.posts;

const serviceIcons = [Shield, CreditCard];
const serviceGradients = [
  { bg: "from-emerald-50 to-green-50", border: "border-emerald-100", iconBg: "bg-emerald-100 text-emerald-600", text: "text-emerald-600", hoverText: "group-hover:text-emerald-700", shadow: "hover:shadow-emerald-500/10" },
  { bg: "from-blue-50 to-indigo-50", border: "border-blue-100", iconBg: "bg-blue-100 text-blue-600", text: "text-blue-600", hoverText: "group-hover:text-blue-700", shadow: "hover:shadow-blue-500/10" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const ThankYou = () => {
  const [searchParams] = useSearchParams();
  const userName = searchParams.get("name") || "";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero Success Section */}
      <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-green-50 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-50 blur-[100px]" />
        </div>

        <div className="container-narrow max-w-2xl text-center relative z-10 px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="inline-flex p-6 rounded-full bg-green-100 text-green-600 mb-6"
          >
            <CheckCircle className="w-16 h-16" />
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="text-3xl md:text-5xl font-extrabold font-heading text-foreground mb-4"
          >
            {userName
              ? content.hero.headlineWithName.replace("{name}", userName)
              : content.hero.headlineFallback}
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto"
          >
            {content.hero.subtitle}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              asChild
              className="gap-2 text-lg font-bold px-10 h-14 rounded-full gradient-bg text-primary-foreground border-0 hover:scale-[1.02] transition-all duration-300"
            >
              <Link to={content.hero.primaryButton.href}>
                <Home className="w-5 h-5" />
                {content.hero.primaryButton.label}
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="gap-2 h-14 rounded-full px-8 text-base font-semibold border-border/80 hover:text-black/90"
            >
              <Link to={content.hero.secondaryButton.href}>
                <Shield className="w-4 h-4" />
                {content.hero.secondaryButton.label}
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={4}
            variants={fadeUp}
            className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-6"
          >
            <Shield className="w-4 h-4 text-green-500" />
            {content.hero.securityNote}
          </motion.div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16 bg-muted/30">
        <div className="container-narrow max-w-3xl px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="text-2xl md:text-3xl font-bold font-heading text-center mb-10"
          >
            {content.nextSteps.title}
          </motion.h2>

          <div className="grid sm:grid-cols-3 gap-6">
            {content.nextSteps.steps.map((item, i) => (
              <motion.div
                key={item.step}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 1}
                variants={fadeUp}
                className="bg-white rounded-2xl p-6 border border-border/60 shadow-sm text-center space-y-3"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full gradient-bg text-primary-foreground font-bold text-sm">
                  {item.step}
                </div>
                <h3 className="font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Our Services */}
      <section className="py-16">
        <div className="container-narrow max-w-4xl px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="text-2xl md:text-3xl font-bold font-heading text-center mb-3"
          >
            {content.services.title}
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
            className="text-muted-foreground text-center mb-10 max-w-md mx-auto"
          >
            {content.services.subtitle}
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-6">
            {content.services.cards.map((card, idx) => {
              const Icon = serviceIcons[idx] || Shield;
              const style = serviceGradients[idx] || serviceGradients[0];
              return (
                <motion.div
                  key={card.href}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={idx + 2}
                  variants={fadeUp}
                >
                  <Link
                    to={card.href}
                    className={`group block bg-gradient-to-br ${style.bg} rounded-2xl p-7 border ${style.border} hover:shadow-lg ${style.shadow} transition-all duration-300 hover:-translate-y-1`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl ${style.iconBg} shrink-0`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="space-y-2">
                        <h3 className={`font-bold text-lg text-foreground ${style.hoverText} transition-colors`}>
                          {card.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {card.description}
                        </p>
                        <span className={`inline-flex items-center gap-1.5 text-sm font-semibold ${style.text} group-hover:gap-2.5 transition-all`}>
                          {card.linkLabel} <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-muted/30">
        <div className="container-narrow max-w-4xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <BookOpen className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              {content.blogSection.label}
            </span>
          </motion.div>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
            className="text-2xl md:text-3xl font-bold font-heading text-center mb-3"
          >
            {content.blogSection.title}
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeUp}
            className="text-muted-foreground text-center mb-10 max-w-md mx-auto"
          >
            {content.blogSection.subtitle}
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-6">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 3}
                variants={fadeUp}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden border border-border/60 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-[16/9] overflow-hidden bg-muted">
                    <img
                      src={post.heroImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 space-y-2.5">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                        {post.tag}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                      {content.blogSection.readArticleLabel} <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="container-narrow max-w-2xl px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 md:p-14 text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-blue-500/10 blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full bg-purple-500/10 blur-[60px]" />
            </div>
            <div className="relative z-10 space-y-5">
              <CalendarCheck className="w-10 h-10 text-green-400 mx-auto" />
              <h2 className="text-2xl md:text-3xl font-extrabold font-heading">
                {content.finalCta.title}
              </h2>
              <p className="text-white/60 max-w-md mx-auto">
                {content.finalCta.subtitle}
              </p>
              <Button
                size="lg"
                asChild
                className="gap-2 text-lg font-bold px-10 h-14 rounded-full gradient-bg-white text-foreground border-0 hover:bg-white/90 hover:scale-[1.02] transition-all duration-300"
              >
                <Link to={content.finalCta.buttonHref}>
                  <Sparkles className="w-5 h-5" />
                  {content.finalCta.buttonLabel}
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default ThankYou;
