import { useState, useEffect } from "react";
import { Menu, X, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";

interface NavbarProps {
  variant?: "home" | "insurance";
}

const homeLinks = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#services" },
  { label: "Content", href: "#content" },
  { label: "Insurance", href: "/insurance", isRoute: true },
  { label: "Book Call", href: "#booking" },
  { label: "Contact", href: "#contact" },
];

const insuranceLinks = [
  { label: "About Insurance", href: "#insurance-hero", isRoute: false as const },
  { label: "Insurance Types", href: "#insurance-types", isRoute: false as const },
  { label: "Book Consultation", href: "#insurance-booking", isRoute: false as const },
  { label: "Contact", href: "#insurance-footer", isRoute: false as const },
];

const Navbar = ({ variant = "home" }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();

  const navLinks = variant === "insurance" ? insuranceLinks : homeLinks;

  useEffect(() => {
    const hashLinks = navLinks.filter((l) => !l.isRoute);
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
  }, [variant]);

  const handleClick = (link: typeof navLinks[0]) => {
    setMobileOpen(false);
    if (link.isRoute) {
      navigate(link.href);
    }
  };

  const bookingHref = variant === "insurance" ? "#insurance-booking" : "#booking";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide flex items-center justify-between h-16 md:h-[4.5rem] px-5 md:px-8">
        {/* Logo */}
        <a
          href={variant === "insurance" ? "/" : "#hero"}
          onClick={(e) => {
            if (variant === "insurance") {
              e.preventDefault();
              navigate("/");
            }
          }}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center group-hover:scale-105 transition-transform">
            <TrendingUp className="w-4.5 h-4.5 text-primary-foreground" />
          </div>
          <span className="font-heading font-bold text-base md:text-lg text-foreground tracking-tight">
            SmartSpend<span className="text-muted-foreground font-normal text-sm"> with Madhan</span>
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.isRoute ? link.href : link.href}
              onClick={(e) => {
                if (link.isRoute) {
                  e.preventDefault();
                  handleClick(link);
                }
              }}
              className={`text-sm font-medium transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 ${
                !link.isRoute && activeSection === link.href
                  ? "text-foreground after:w-full"
                  : "text-muted-foreground hover:text-foreground after:w-0 hover:after:w-full"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button size="sm" className="rounded-lg px-5 ml-1 hover:scale-[1.02] transition-all" asChild>
            <a href={bookingHref}>Book Consultation</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border animate-fade-in">
          <div className="flex flex-col gap-1 px-5 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.isRoute ? link.href : link.href}
                onClick={(e) => {
                  if (link.isRoute) {
                    e.preventDefault();
                  }
                  handleClick(link);
                }}
                className={`text-sm font-medium py-2.5 px-3 rounded-lg transition-colors ${
                  !link.isRoute && activeSection === link.href
                    ? "text-foreground bg-accent"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </a>
            ))}
            <Button size="sm" className="mt-2 rounded-lg" asChild>
              <a href={bookingHref} onClick={() => setMobileOpen(false)}>Book Consultation</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
