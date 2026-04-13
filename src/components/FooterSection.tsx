import { Instagram, Twitter, Linkedin, Youtube, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import logoLight from "@/assets/brand/SS_LOGO_LIGHT.png";

const socials = [
  { icon: Instagram, href: "https://instagram.com/smartspending.in", label: "Instagram" },
  { icon: Twitter, href: "https://x.com/smartspendingin", label: "X" },
  { icon: Linkedin, href: "https://linkedin.com/in/madhan", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com/@smartspendingin", label: "YouTube" },
];

const FooterSection = () => {
  const location = useLocation();
  return (
    <footer className="bg-foreground text-background" id="contact">
      {/* CTA Banner */}
      <AnimatedSection>
        <div className="px-6 md:px-10 py-20">
          <div className="container-narrow text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-display">
              Ready to Make Smarter Financial Decisions?
            </h2>
            <p className="text-background/55 max-w-md mx-auto text-lg">
              Book your free consultation and take the first step toward financial clarity.
            </p>
            <Button
              size="lg"
              className="gradient-bg-white text-foreground hover:bg-white/90 rounded-xl gap-2 h-13 px-9 text-base shadow-lg hover:scale-[1.03] transition-all duration-300 border-0"
              asChild
            >
              <a href={location.pathname !== "/" ? "/#booking" : "#booking"}>
                Get Free Guidance
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      <div className="border-t border-background/10">
        <div className="container-wide px-6 md:px-10 py-12">
          <div className="grid sm:grid-cols-3 gap-10 mb-10">
            <div className="space-y-3">
              <img
                src={logoLight}
                alt="SmartSpending Logo"
                className="h-10 w-auto"
              />
              <p className="text-background/50 text-sm leading-relaxed">Madhan — Finance Educator<br />Helping Indians master their money.</p>
            </div>
            <div className="space-y-3">
              <p className="font-semibold text-sm">Quick Links</p>
              <div className="flex flex-col gap-2 text-sm text-background/50">
                <a href={location.pathname !== "/" ? "/#about" : "#about"} className="hover:text-background transition-colors w-fit">About</a>
                <a href={location.pathname !== "/" ? "/#services" : "#services"} className="hover:text-background transition-colors w-fit">Expertise</a>
                <a href={location.pathname !== "/" ? "/#booking" : "#booking"} className="hover:text-background transition-colors w-fit">Get Guidance</a>
                <a href={location.pathname !== "/" ? "/#faq" : "#faq"} className="hover:text-background transition-colors w-fit">FAQ</a>
              </div>
            </div>
            <div className="space-y-3">
              <p className="font-semibold text-sm">Contact</p>
              <a href="mailto:contact@smartspending.in" className="flex items-center gap-2 text-sm text-background/50 hover:text-background transition-colors w-fit">
                <Mail className="w-4 h-4" /> contact@smartspending.in
              </a>
            </div>
          </div>

          <div className="border-t border-background/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-2.5 rounded-xl bg-background/5 hover:bg-background/15 transition-all duration-200 hover:scale-110"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="text-xs text-background/30">© {new Date().getFullYear()} SmartSpending with Madhan</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
