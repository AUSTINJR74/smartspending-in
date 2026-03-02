import { Instagram, Twitter, Linkedin, Youtube, Mail, MessageCircle, ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const socials = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Twitter, href: "https://x.com", label: "X" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

const FooterSection = () => {
  return (
    <footer className="bg-foreground text-background" id="contact">
      {/* CTA Banner */}
      <div className="px-5 md:px-8 py-16">
        <div className="container-narrow text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold font-heading">
            Ready to Make Smarter Decisions?
          </h2>
          <p className="text-background/60 max-w-lg mx-auto">
            Book your free consultation today and take the first step toward clarity.
          </p>
          <Button size="lg" className="bg-background text-foreground hover:bg-background/90 rounded-xl gap-2 h-13 px-8 text-base hover:scale-[1.02] transition-all" asChild>
            <a href="#booking">
              Book Your Call
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container-wide px-5 md:px-8 py-10">
          <div className="grid sm:grid-cols-3 gap-8 mb-10">
            <div className="space-y-3">
              <a href="#hero" className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-md bg-background/10 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <span className="font-heading font-bold text-lg">
                  Smart<span className="text-primary">Spending</span><span className="text-background/50 text-sm">.in</span>
                </span>
              </a>
              <p className="text-background/50 text-sm leading-relaxed">
                Professional consultation services for smarter financial decisions.
              </p>
            </div>

            <div className="space-y-3">
              <p className="font-heading font-semibold text-sm">Quick Links</p>
              <div className="flex flex-col gap-2 text-sm text-background/50">
                <a href="#about" className="hover:text-background transition-colors w-fit">About</a>
                <a href="#services" className="hover:text-background transition-colors w-fit">Services</a>
                <a href="#booking" className="hover:text-background transition-colors w-fit">Book a Call</a>
                <a href="#faq" className="hover:text-background transition-colors w-fit">FAQ</a>
              </div>
            </div>

            <div className="space-y-3">
              <p className="font-heading font-semibold text-sm">Contact</p>
              <a href="mailto:contact@smartspending.in" className="flex items-center gap-2 text-sm text-background/50 hover:text-background transition-colors w-fit">
                <Mail className="w-4 h-4" /> contact@smartspending.in
              </a>
              <Button size="sm" variant="outline" className="gap-2 border-background/20 text-background hover:bg-background/10 rounded-lg" asChild>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </Button>
            </div>
          </div>

          <div className="border-t border-background/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-2.5 rounded-lg bg-background/5 hover:bg-background/15 transition-colors"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="text-xs text-background/30">
              © {new Date().getFullYear()} SmartSpending.in — All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
