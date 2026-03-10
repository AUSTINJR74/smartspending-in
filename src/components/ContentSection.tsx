import { Instagram, Youtube, ExternalLink, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection, { StaggerContainer, StaggerItem } from "./AnimatedSection";

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/smartspending.in" },
  { icon: Twitter, label: "X (Twitter)", href: "https://x.com/smartspendingin" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/madhan" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com/@smartspendingin" },
];

const ContentSection = () => {
  return (
    <section className="section-padding bg-background" id="content">
      <div className="container-wide">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="section-label">Content</p>
            <h2 className="section-title">Latest Content</h2>
            <p className="section-subtitle">
              Watch reels, listen to podcasts, and stay updated with the latest finance tips.
            </p>
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 gap-6 md:gap-8 mb-14">
          <StaggerItem>
            <div className="rounded-2xl border border-border bg-card p-10 text-center space-y-5 card-elevated gradient-border h-full">
              <div className="inline-flex p-4 rounded-2xl bg-accent">
                <Instagram className="w-8 h-8 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-lg mb-1.5">Instagram Reels</p>
                <p className="text-sm text-muted-foreground mb-5">Quick finance tips in 60 seconds</p>
                <Button variant="outline" className="rounded-xl gap-2 hover:bg-accent hover:border-primary/20 transition-all" asChild>
                  <a href="https://instagram.com/smartspending.in" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3.5 h-3.5" />
                    View on Instagram
                  </a>
                </Button>
              </div>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="rounded-2xl border border-border bg-card p-10 text-center space-y-5 card-elevated gradient-border h-full">
              <div className="inline-flex p-4 rounded-2xl bg-accent">
                <Youtube className="w-8 h-8 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-lg mb-1.5">Podcast Clips</p>
                <p className="text-sm text-muted-foreground mb-5">Deep dives into finance topics</p>
                <Button variant="outline" className="rounded-xl gap-2 hover:bg-accent hover:border-primary/20 transition-all" asChild>
                  <a href="https://youtube.com/@smartspendingin" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3.5 h-3.5" />
                    Watch on YouTube
                  </a>
                </Button>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

        <AnimatedSection>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl border border-border bg-card text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-accent hover:scale-[1.02] transition-all duration-200"
              >
                <s.icon className="w-4 h-4" />
                {s.label}
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContentSection;
