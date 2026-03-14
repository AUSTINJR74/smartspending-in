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

      {/* Lead Form */}
      <BookingFormSection />

      <FooterSection />
    </div>
  );
};

export default BlogLayout;
