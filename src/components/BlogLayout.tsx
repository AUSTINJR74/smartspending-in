import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import FooterSection from "./FooterSection";
import AnimatedSection from "./AnimatedSection";
import BookingFormSection from "./BookingFormSection";

interface BlogLayoutProps {
  title: string;
  tag: string;
  readTime: string;
  date: string;
  heroImage: string;
  children: React.ReactNode;
}

const BlogLayout = ({ title, tag, readTime, date, heroImage, children }: BlogLayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </button>

            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary bg-accent px-3 py-1 rounded-full mb-4">
              {tag}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 font-display">
              {title}
            </h1>
            <div className="flex items-center gap-5 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {readTime}
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <img
              src={heroImage}
              alt={title}
              className="w-full rounded-2xl object-cover aspect-video mb-12 shadow-lg"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection delay={0.15}>
            <article className="prose prose-lg max-w-none
              prose-headings:text-foreground prose-headings:font-display
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-li:text-muted-foreground
              prose-strong:text-foreground
              prose-ul:space-y-1
            ">
              {children}
            </article>
          </AnimatedSection>
        </div>
      </section>

      {/* Lead CTA */}
      <section className="py-16 md:py-20 bg-accent/50">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-display">
              Confused about credit cards or rewards?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Get simple, no-cost guidance from Madhan — personalized to your needs.
            </p>
            <Button
              size="lg"
              className="h-14 px-10 rounded-xl gap-2 text-lg font-bold gradient-bg border-0 shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:scale-[1.02] transition-all duration-300 ring-2 ring-primary/20 ring-offset-2 ring-offset-background cta-glow"
              asChild
            >
              <a href="/#booking">
                Get Free Guidance
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default BlogLayout;
