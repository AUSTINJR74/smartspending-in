import { Instagram, Twitter, Linkedin, Youtube, Mail } from "lucide-react";

const socials = [
  { icon: Instagram, href: "https://instagram.com/smartspending.in", label: "Instagram" },
  { icon: Twitter, href: "https://x.com/smartspendingin", label: "X" },
  { icon: Linkedin, href: "https://linkedin.com/in/madhan", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com/@smartspendingin", label: "YouTube" },
];

const FooterSection = () => {
  return (
    <footer className="bg-foreground text-background" id="contact">
      <div className="container-wide px-5 md:px-8 py-10">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div className="space-y-2">
            <p className="font-bold text-lg">SmartSpend</p>
            <p className="text-background/50 text-sm">
              Madhan — Finance Educator
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-semibold text-sm">Quick Links</p>
            <div className="flex flex-col gap-1.5 text-sm text-background/50">
              <a href="#about" className="hover:text-background transition-colors w-fit">About</a>
              <a href="#services" className="hover:text-background transition-colors w-fit">Expertise</a>
              <a href="#booking" className="hover:text-background transition-colors w-fit">Get Guidance</a>
              <a href="#faq" className="hover:text-background transition-colors w-fit">FAQ</a>
            </div>
          </div>

          <div className="space-y-2">
            <p className="font-semibold text-sm">Contact</p>
            <a href="mailto:contact@smartspending.in" className="flex items-center gap-2 text-sm text-background/50 hover:text-background transition-colors w-fit">
              <Mail className="w-4 h-4" /> contact@smartspending.in
            </a>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="p-2 rounded-lg bg-background/5 hover:bg-background/15 transition-colors"
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
          <p className="text-xs text-background/30">
            © {new Date().getFullYear()} SmartSpend with Madhan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
