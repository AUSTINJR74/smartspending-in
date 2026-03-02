import { Instagram, Twitter, Linkedin, Youtube, Mail } from "lucide-react";

const socials = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Twitter, href: "https://x.com", label: "X" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

const FooterSection = () => {
  return (
    <footer className="bg-foreground text-background py-10 px-4">
      <div className="container-narrow text-center space-y-5">
        <p className="font-heading font-semibold text-lg">Madhan | Finance Educator</p>
        <div className="flex justify-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
            >
              <s.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
        <a
          href="mailto:contact@madhan.com"
          className="inline-flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors"
        >
          <Mail className="w-4 h-4" />
          contact@madhan.com
        </a>
        <p className="text-xs text-background/50">
          © {new Date().getFullYear()} Madhan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
