import { Mail, MessageCircle, AlertTriangle, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import siteContent from "@/data/siteContent";

const { footer } = siteContent.insurance;

const InsuranceFooter = () => {
  return (
    <footer className="bg-slate-950 text-white" id="insurance-footer">
      {/* Disclaimer */}
      <div className="px-6 md:px-10 py-10 border-b border-white/10">
        <div className="container-narrow">
          <div className="flex items-start gap-3 p-5 rounded-2xl bg-white/5 border border-white/10">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-2">
              <p className="font-display font-semibold text-sm text-white/80">{footer.disclaimer.title}</p>
              <p className="text-xs text-white/40 leading-relaxed">{footer.disclaimer.text}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-10 py-16">
        <div className="container-wide">
          <div className="grid sm:grid-cols-3 gap-10 mb-12">
            <div className="space-y-4">
              <a href="/" className="font-extrabold text-2xl tracking-tight font-display">
                {footer.brand}<span className="gradient-text">{footer.brandHighlight}</span>
              </a>
              <p className="text-white/40 text-sm leading-relaxed max-w-xs">{footer.tagline}</p>
            </div>

            <div className="space-y-4">
              <p className="font-semibold text-sm text-white/80 uppercase tracking-wider">Quick Links</p>
              <div className="flex flex-col gap-3 text-sm text-white/40">
                {footer.quickLinks.map((link) => (
                  <a key={link.label} href={link.href} className="hover:text-white transition-colors w-fit group flex items-center gap-1">
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p className="font-semibold text-sm text-white/80 uppercase tracking-wider">Contact</p>
              <a href={`mailto:${footer.contact.email}`} className="flex items-center gap-2.5 text-sm text-white/40 hover:text-white transition-colors w-fit">
                <Mail className="w-4 h-4 text-primary shrink-0" /> {footer.contact.email}
              </a>
              <Button size="sm" variant="outline" className="gap-2 border-white/20 text-white hover:bg-white/10 rounded-full" asChild>
                <a href={footer.contact.whatsappHref} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </Button>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex gap-3">
              {footer.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-200 hover:scale-110 hover:-translate-y-0.5"
                >
                  <s.icon className="w-4 h-4 text-white/60" />
                </a>
              ))}
            </div>
            <p className="text-xs text-white/25">{footer.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default InsuranceFooter;
