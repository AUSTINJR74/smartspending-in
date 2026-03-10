import { TrendingUp, CreditCard, Shield, Percent, Bookmark, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection, { StaggerContainer, StaggerItem } from "./AnimatedSection";
import topicsImg from "@/assets/topics-illustration.png";

const topics = [
  {
    icon: CreditCard,
    tag: "Credit Cards",
    title: "Best Credit Cards for Beginners in 2025",
    excerpt: "A simple breakdown of which card suits your lifestyle — whether you're a student, salaried, or self-employed.",
    readTime: "4 min read",
    slug: "/blog/best-credit-cards-beginners-2025",
  },
  {
    icon: Shield,
    tag: "Insurance",
    title: "5 Insurance Myths That Cost You Money",
    excerpt: "From 'I'm too young for insurance' to 'employer cover is enough' — myths debunked with real examples.",
    readTime: "5 min read",
    slug: "/blog/insurance-myths",
  },
  {
    icon: Percent,
    tag: "EMI Traps",
    title: "The Truth About No-Cost EMI",
    excerpt: "It sounds free, but hidden charges can add up. Learn how to spot the real cost before you click 'Buy Now'.",
    readTime: "3 min read",
    slug: "/blog/truth-about-no-cost-emi",
  },
  {
    icon: TrendingUp,
    tag: "Rewards",
    title: "How to Maximize Credit Card Rewards",
    excerpt: "Most people leave rewards on the table. Simple strategies to earn 2-5x more from your everyday spending.",
    readTime: "4 min read",
    slug: "/blog/maximize-credit-card-rewards",
  },
];

const FeaturedTopicsSection = () => {
  return (
    <section className="section-padding bg-secondary/50" id="topics">
      <div className="container-wide">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="section-label">Featured Topics</p>
            <h2 className="section-title">Popular Reads</h2>
            <p className="section-subtitle">
              Explore the most-read topics that help you make smarter financial decisions.
            </p>
            <div className="flex justify-center mt-10">
              <img src={topicsImg} alt="Featured financial topics" className="w-40 md:w-52 object-contain" />
            </div>
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {topics.map((topic, i) => (
            <StaggerItem key={i}>
              <Link to={topic.slug} className="group block p-7 md:p-8 rounded-2xl bg-background border border-border card-elevated gradient-border h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-accent group-hover:scale-110 transition-transform duration-300">
                    <topic.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">{topic.tag}</span>
                  <span className="ml-auto text-xs text-muted-foreground flex items-center gap-1">
                    <Bookmark className="w-3 h-3" />
                    {topic.readTime}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2.5 group-hover:text-primary transition-colors">
                  {topic.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {topic.excerpt}
                </p>
                <div className="mt-5 pt-4 border-t border-border">
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all">
                    Read more
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default FeaturedTopicsSection;
