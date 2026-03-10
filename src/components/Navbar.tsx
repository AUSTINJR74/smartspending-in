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
          ? "bg-background/90 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide flex items-center justify-between h-16 px-5 md:px-8">
        <a
          href={variant === "insurance" ? "/" : "#hero"}
          onClick={(e) => {
            if (variant === "insurance") {
              e.preventDefault();
              navigate("/");
            }
          }}
          className="font-bold text-lg text-foreground tracking-tight"
        >
          SmartSpend
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
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
              className={`text-sm font-medium transition-colors ${
                !link.isRoute && activeSection === link.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button size="sm" className="rounded-lg px-5" asChild>
            <a href={bookingHref}>Get Free Guidance</a>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-background border-b border-border">
          <div className="flex flex-col gap-1 px-5 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.isRoute ? link.href : link.href}
                onClick={(e) => {
                  if (link.isRoute) e.preventDefault();
                  handleClick(link);
                }}
                className="text-sm font-medium py-2.5 px-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button size="sm" className="mt-2 rounded-lg" asChild>
              <a href={bookingHref} onClick={() => setMobileOpen(false)}>Get Free Guidance</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
