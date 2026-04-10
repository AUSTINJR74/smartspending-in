import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import LandingNavbar from "./landing/LandingNavbar";
import FooterSection from "./landing/FooterSection";
import BookingFormSection from "./BookingFormSection";
import siteContent from "@/data/siteContent";
import type { BlogContentBlock } from "@/data/siteContent";

const renderBlock = (block: BlogContentBlock, index: number) => {
  switch (block.type) {
    case "h2":
      return <h2 key={index}>{block.text}</h2>;
    case "h3":
      return <h3 key={index}>{block.text}</h3>;
    case "p":
      return <p key={index}>{block.text}</p>;
    case "ul":
      return (
        <ul key={index}>
          {block.items?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    default:
      return null;
  }
};

interface BlogLayoutProps {
  title: string;
  tag: string;
  readTime: string;
  date: string;
  heroImage: string;
  body: BlogContentBlock[];
}

const BlogLayout = ({ title, tag, readTime, date, heroImage, body }: BlogLayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <LandingNavbar />

      {/* Hero */}
      <section className="relative hero-gradient overflow-hidden">
        <div className="absolute inset-0 grid-pattern-dark pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/8 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full bg-purple-500/8 blur-[100px]" />
        </div>

        <div className="relative z-10 pt-28 pb-16 md:pt-36 md:pb-20">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <button
                onClick={() => navigate("/")}
                className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                {siteContent.blog.backLabel}
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="inline-block text-xs font-bold uppercase tracking-[0.15em] gradient-text bg-clip-text px-0 py-1 mb-4">
                {tag}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6 font-display tracking-tight">
                {title}
              </h1>
              <div className="flex items-center gap-5 text-sm text-white/40">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {readTime}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Hero Image */}
      <section className="-mt-10 relative z-10 pb-8">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={heroImage}
              alt={title}
              className="w-full rounded-3xl object-cover aspect-video shadow-2xl shadow-black/10 border border-border/40"
            />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <article className="prose prose-lg max-w-none
              prose-headings:text-foreground prose-headings:font-display prose-headings:font-extrabold prose-headings:tracking-tight
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-li:text-muted-foreground
              prose-strong:text-foreground
              prose-ul:space-y-1
            ">
              {body.map(renderBlock)}
            </article>
          </motion.div>
        </div>
      </section>

      {/* Lead Form */}
      <BookingFormSection />

      <FooterSection />
    </div>
  );
};

export default BlogLayout;
