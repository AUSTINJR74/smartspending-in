import { Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com", color: "hover:text-pink-500" },
  { icon: Twitter, label: "X (Twitter)", href: "https://x.com", color: "hover:text-foreground" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com", color: "hover:text-blue-600" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com", color: "hover:text-red-500" },
];

const ContentSection = () => {
  return (
    <section className="section-padding bg-card" id="content">
      <div className="container-narrow text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
          Latest Content
        </h2>
        <p className="text-muted-foreground mb-10 max-w-md mx-auto">
          Follow along for daily tips on cards, cashback, and smart finance.
        </p>

        {/* Placeholder for embeds */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          <div className="aspect-[9/16] max-h-[420px] rounded-xl bg-muted flex items-center justify-center border border-border">
            <p className="text-muted-foreground text-sm">Instagram Reel Embed</p>
          </div>
          <div className="aspect-video rounded-xl bg-muted flex items-center justify-center border border-border sm:self-center">
            <p className="text-muted-foreground text-sm">YouTube Podcast Highlight</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {socials.map((s) => (
            <Button key={s.label} variant="outline" size="lg" className="gap-2" asChild>
              <a href={s.href} target="_blank" rel="noopener noreferrer">
                <s.icon className={`w-5 h-5 transition-colors ${s.color}`} />
                {s.label}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
