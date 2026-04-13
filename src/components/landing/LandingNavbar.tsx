import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import siteContent from "@/data/siteContent";
import logoLight from "@/assets/brand/SS_LOGO_LIGHT.png";
import logoDark from "@/assets/brand/SS_LOGO_DARK.png";

const creditCardSubLinks = [
  { label: "All Cards", href: "/credit-cards" },
  { label: "Top Cards", href: "/credit-cards/top" },
  { label: "Fuel", href: "/credit-cards/fuel" },
  { label: "Cashback", href: "/credit-cards/cashback" },
  { label: "Rewards", href: "/credit-cards/rewards" },
  { label: "Travel", href: "/credit-cards/travel" },
  { label: "Best for You", href: "/credit-cards/best-for-you" },
];

const LandingNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [ccDropdownOpen, setCcDropdownOpen] = useState(false);
  const [ccMobileOpen, setCcMobileOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
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
    } else if (location.pathname !== "/") {
      navigate(`/${link.href}`);
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
          className="flex items-center"
        >
          <img
            src={scrolled ? logoDark : logoLight}
            alt="SmartSpending Logo"
            className="h-20 md:h-[100px] w-auto"
          />
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {nav.links.map((link) => {
            if (link.label === "Credit Cards") {
              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => {
                    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
                    setCcDropdownOpen(true);
                  }}
                  onMouseLeave={() => {
                    dropdownTimeout.current = setTimeout(() => setCcDropdownOpen(false), 150);
                  }}
                >
                  <button
                    onClick={() => navigate("/credit-cards")}
                    className={`flex items-center gap-1 text-sm font-medium transition-all duration-200 ${
                      scrolled
                        ? "text-muted-foreground hover:text-foreground"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${ccDropdownOpen ? "rotate-180" : ""}`} />
                  </button>
                  {ccDropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                      <div className="bg-white/95 backdrop-blur-2xl rounded-xl border border-border/60 shadow-xl shadow-black/[0.08] py-2 min-w-[180px]">
                        {creditCardSubLinks.map((sub) => (
                          <button
                            key={sub.href}
                            onClick={() => {
                              navigate(sub.href);
                              setCcDropdownOpen(false);
                            }}
                            className="w-full text-left px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors font-medium"
                          >
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            return (
              <a
                key={link.href}
                href={link.isRoute ? link.href : (location.pathname !== "/" ? `/${link.href}` : link.href)}
                onClick={(e) => {
                  if (link.isRoute || location.pathname !== "/") {
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
            );
          })}
          <Button
            size="sm"
            className="rounded-full px-6 gradient-bg-white text-foreground border border-primary/30 hover:bg-white/90 hover:scale-[1.03] transition-all duration-300 gap-2 font-semibold"
            asChild
          >
            <a href={location.pathname !== "/" && nav.ctaHref.startsWith("#") ? `/${nav.ctaHref}` : nav.ctaHref}>
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
            {nav.links.map((link) => {
              if (link.label === "Credit Cards") {
                return (
                  <div key={link.href}>
                    <button
                      onClick={() => {
                        navigate("/credit-cards");
                        setCcMobileOpen(!ccMobileOpen);
                      }}
                      className="w-full flex items-center justify-between text-sm font-medium py-3 px-4 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${ccMobileOpen ? "rotate-180" : ""}`} />
                    </button>
                    {ccMobileOpen && (
                      <div className="pl-8 space-y-0.5">
                        {creditCardSubLinks.map((sub) => (
                          <button
                            key={sub.href}
                            onClick={() => {
                              navigate(sub.href);
                              setMobileOpen(false);
                            }}
                            className="w-full text-left text-sm py-2.5 px-4 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
                          >
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <a
                  key={link.href}
                  href={link.isRoute ? link.href : (location.pathname !== "/" ? `/${link.href}` : link.href)}
                  onClick={(e) => {
                    if (link.isRoute || location.pathname !== "/") {
                      e.preventDefault();
                      handleClick(link);
                    }
                  }}
                  className="text-sm font-medium py-3 px-4 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
                >
                  {link.label}
                </a>
              );
            })}
            <Button
              size="sm"
              className="mt-3 rounded-full gradient-bg-white text-foreground border-0 gap-2 hover:bg-white/90"
              asChild
            >
              <a href={location.pathname !== "/" && nav.ctaHref.startsWith("#") ? `/${nav.ctaHref}` : nav.ctaHref} onClick={() => setMobileOpen(false)}>
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
