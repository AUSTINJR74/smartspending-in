import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  variant?: "home" | "insurance";
}

const homeLinks = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#services" },
  { label: "Content", href: "#content" },
  { label: "Insurance", href: "/insurance", isRoute: true },
  { label: "FAQ", href: "#faq" },
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
          ? "bg-background/85 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide flex items-center justify-between h-[4.5rem] px-6 md:px-10">
        <a
          href={variant === "insurance" ? "/" : "#hero"}
          onClick={(e) => {
            if (variant === "insurance") {
              e.preventDefault();
              navigate("/");
            }
          }}
          className="font-bold text-xl text-foreground tracking-tight hover:opacity-80 transition-opacity"
        >
          Smart<span className="gradient-text">Spend</span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-9">
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
              className={`text-sm font-medium transition-all duration-200 ${
                !link.isRoute && activeSection === link.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button size="sm" className="rounded-xl px-6 gradient-bg border-0 shadow-md shadow-primary/15 hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02] transition-all duration-300" asChild>
            <a href={bookingHref}>Get Free Guidance</a>
          </Button>
        </div>

        <button
          className="lg:hidden p-2.5 text-foreground hover:bg-muted rounded-xl transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border">
          <div className="flex flex-col gap-1.5 px-6 py-5">
            {navLinks.map((link) => (
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
            <Button size="sm" className="mt-3 rounded-xl gradient-bg border-0" asChild>
              <a href={bookingHref} onClick={() => setMobileOpen(false)}>Get Free Guidance</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
