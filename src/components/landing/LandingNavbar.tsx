import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import siteContent from "@/data/siteContent";

const LandingNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();
  const { nav } = siteContent;

  useEffect(() => {
    const hashLinks = nav.links.filter((l) => !l.isRoute);
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = hashLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [nav.links]);

  const handleClick = (link: (typeof nav.links)[0]) => {
    setMobileOpen(false);
    if (link.isRoute) {
      navigate(link.href);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-2xl border-b border-border/50 shadow-lg shadow-black/[0.03]"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide flex items-center justify-between h-[4.5rem] px-6 md:px-10">
        <a
          href="#hero"
          className="font-extrabold text-xl tracking-tight font-display"
        >
          <span className={scrolled ? "text-foreground" : "text-white"}>
            {nav.brand}
          </span>
          <span className="gradient-text">{nav.brandHighlight}</span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.isRoute ? link.href : link.href}
              onClick={(e) => {
                if (link.isRoute) {
                  e.preventDefault();
                  handleClick(link);
                }
              }}
              className={`text-sm font-medium transition-all duration-200 ${
                !link.isRoute && activeSection === link.href
                  ? "text-primary"
                  : scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button
            size="sm"
            className="rounded-full px-6 gradient-bg text-white border-0 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:scale-[1.03] transition-all duration-300 gap-2 font-semibold"
            asChild
          >
            <a href={nav.ctaHref}>
              {nav.ctaLabel}
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>

        <button
          className={`lg:hidden p-2.5 rounded-xl transition-colors ${
            scrolled
              ? "text-foreground hover:bg-muted"
              : "text-white hover:bg-white/10"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-2xl border-b border-border shadow-xl">
          <div className="flex flex-col gap-1.5 px-6 py-5">
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.isRoute ? link.href : link.href}
                onClick={(e) => {
                  if (link.isRoute) e.preventDefault();
                  handleClick(link);
                }}
                className="text-sm font-medium py-3 px-4 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
              >
                {link.label}
              </a>
            ))}
            <Button
              size="sm"
              className="mt-3 rounded-full gradient-bg text-white border-0 gap-2"
              asChild
            >
              <a href={nav.ctaHref} onClick={() => setMobileOpen(false)}>
                {nav.ctaLabel}
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default LandingNavbar;
