import { Instagram, Twitter, Linkedin, Youtube, Mail, MessageCircle, TrendingUp, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const socials = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Twitter, href: "https://x.com", label: "X" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

const InsuranceFooter = () => {
  return (
    <footer className="bg-foreground text-background" id="insurance-footer">
      {/* Disclaimer */}
      <div className="px-5 md:px-8 py-10 border-b border-background/10">
        <div className="container-narrow">
          <div className="flex items-start gap-3 p-5 rounded-2xl bg-background/5 border border-background/10">
            <AlertTriangle className="w-5 h-5 text-background/50 shrink-0 mt-0.5" />
            <div className="space-y-2">
              <p className="font-heading font-semibold text-sm">Disclaimer</p>
              <p className="text-xs text-background/40 leading-relaxed">
                The information provided on this website is for general awareness and educational purposes only. It does not constitute financial, insurance, or investment advice. Insurance plans and their benefits are subject to policy terms and conditions of respective insurance companies. We recommend consulting with a qualified insurance advisor before making any decisions. SmartSpend with Madhan is not an insurance company and does not underwrite policies.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 md:px-8 py-10">
        <div className="container-wide">
          <div className="grid sm:grid-cols-3 gap-8 mb-10">
            <div className="space-y-3">
              <a href="/" className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-md bg-background/10 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <span className="font-heading font-bold text-base">
                  SmartSpend<span className="text-background/50 font-normal text-sm"> with Madhan</span>
                </span>
              </a>
              <p className="text-background/50 text-sm leading-relaxed">
                Helping individuals and families make informed financial and insurance decisions with honest, no-pressure guidance.
              </p>
            </div>

            <div className="space-y-3">
              <p className="font-heading font-semibold text-sm">Quick Links</p>
              <div className="flex flex-col gap-2 text-sm text-background/50">
                <a href="/" className="hover:text-background transition-colors w-fit">Home</a>
                <a href="#insurance-types" className="hover:text-background transition-colors w-fit">Insurance Types</a>
                <a href="#insurance-booking" className="hover:text-background transition-colors w-fit">Book Consultation</a>
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
              © {new Date().getFullYear()} SmartSpend with Madhan — All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default InsuranceFooter;
