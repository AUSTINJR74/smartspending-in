import { Instagram, Twitter, Linkedin, Youtube, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const socials = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com/smartspending.in",
    color: "bg-pink-500/10 text-pink-600 hover:bg-pink-500/20",
  },
  {
    icon: Twitter,
    label: "X (Twitter)",
    href: "https://x.com/smartspendingin",
    color: "bg-foreground/5 text-foreground hover:bg-foreground/10",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/madhan",
    color: "bg-primary/10 text-primary hover:bg-primary/20",
  },
  {
    icon: Youtube,
    label: "YouTube",
    href: "https://youtube.com/@smartspendingin",
    color: "bg-red-500/10 text-red-600 hover:bg-red-500/20",
  },
];

const ContentSection = () => {
  return (
    <section className="section-padding bg-card/50" id="content">
      <div className="container-wide">
        <div className="text-center mb-16">
          <p className="section-label">Content</p>
          <h2 className="section-title">Latest Content</h2>
          <p className="section-subtitle">
            Watch reels, listen to podcasts, and stay updated with the latest
            finance tips.
          </p>
        </div>

        {/* Embeds Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-14">
          {/* Instagram Embed Placeholder */}
          <div className="rounded-2xl border border-border bg-background overflow-hidden card-elevated">
            <div className="aspect-[9/16] max-h-[520px] w-full bg-muted/50 flex flex-col items-center justify-center gap-4 p-8 text-center">
              <Instagram className="w-12 h-12 text-muted-foreground/50" />
              <div>
                <p className="font-heading font-semibold text-foreground mb-1">
                  Instagram Reels
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  Quick finance tips in 60 seconds
                </p>
                <Button variant="outline" size="sm" className="rounded-lg gap-2" asChild>
                  <a
                    href="https://instagram.com/smartspending.in"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    View on Instagram
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* YouTube Embed Placeholder */}
          <div className="rounded-2xl border border-border bg-background overflow-hidden card-elevated">
            <div className="aspect-[9/16] max-h-[520px] w-full bg-muted/50 flex flex-col items-center justify-center gap-4 p-8 text-center">
              <Youtube className="w-12 h-12 text-muted-foreground/50" />
              <div>
                <p className="font-heading font-semibold text-foreground mb-1">
                  Podcast Clips
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  Deep dives into finance topics
                </p>
                <Button variant="outline" size="sm" className="rounded-lg gap-2" asChild>
                  <a
                    href="https://youtube.com/@smartspendingin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Watch on YouTube
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${s.color}`}
            >
              <s.icon className="w-5 h-5" />
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
