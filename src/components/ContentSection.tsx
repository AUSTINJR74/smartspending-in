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
          <div className="text-center mb-14">
            <p className="section-label">Content</p>
            <h2 className="section-title">Latest Content</h2>
            <p className="section-subtitle">
              Watch reels, listen to podcasts, and stay updated with the latest finance tips.
            </p>
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 gap-6 mb-12">
          <StaggerItem>
            <div className="rounded-xl border border-border bg-card p-8 text-center space-y-4 card-elevated h-full">
              <Instagram className="w-10 h-10 text-muted-foreground/40 mx-auto" />
              <div>
                <p className="font-semibold text-foreground mb-1">Instagram Reels</p>
                <p className="text-sm text-muted-foreground mb-4">Quick finance tips in 60 seconds</p>
                <Button variant="outline" size="sm" className="rounded-lg gap-2" asChild>
                  <a href="https://instagram.com/smartspending.in" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3.5 h-3.5" />
                    View on Instagram
                  </a>
                </Button>
              </div>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="rounded-xl border border-border bg-card p-8 text-center space-y-4 card-elevated h-full">
              <Youtube className="w-10 h-10 text-muted-foreground/40 mx-auto" />
              <div>
                <p className="font-semibold text-foreground mb-1">Podcast Clips</p>
                <p className="text-sm text-muted-foreground mb-4">Deep dives into finance topics</p>
                <Button variant="outline" size="sm" className="rounded-lg gap-2" asChild>
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
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border bg-card text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
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
