import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import siteContent from "@/data/siteContent";

const FooterSection = () => {
  const { footer } = siteContent;

  return (
    <footer className="bg-slate-950 text-white" id="contact">
      <div className="container-wide px-6 md:px-10 py-16 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div className="space-y-4 lg:col-span-1">
            <p className="font-extrabold text-2xl tracking-tight font-display">
              {footer.brand}
              <span className="gradient-text">{footer.brandHighlight}</span>
            </p>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              {footer.tagline}
            </p>
            <div className="flex gap-3 pt-2">
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
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <p className="font-semibold text-sm text-white/80 uppercase tracking-wider">
              Quick Links
            </p>
            <div className="flex flex-col gap-3">
              {footer.quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/40 hover:text-white transition-colors w-fit group flex items-center gap-1"
                >
                  {link.label}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <p className="font-semibold text-sm text-white/80 uppercase tracking-wider">
              Services
            </p>
            <div className="flex flex-col gap-3">
              {footer.services.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/40 hover:text-white transition-colors w-fit group flex items-center gap-1"
                >
                  {link.label}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <p className="font-semibold text-sm text-white/80 uppercase tracking-wider">
              Contact
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${footer.contact.email}`}
                className="flex items-center gap-2.5 text-sm text-white/40 hover:text-white transition-colors w-fit"
              >
                <Mail className="w-4 h-4 text-primary shrink-0" />
                {footer.contact.email}
              </a>
              <a
                href={`tel:${footer.contact.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2.5 text-sm text-white/40 hover:text-white transition-colors w-fit"
              >
                <Phone className="w-4 h-4 text-primary shrink-0" />
                {footer.contact.phone}
              </a>
              <span className="flex items-center gap-2.5 text-sm text-white/40">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                {footer.contact.location}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">{footer.copyright}</p>
          <div className="flex gap-6 text-xs text-white/25">
            <a href="#" className="hover:text-white/50 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white/50 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
