import { useState, useMemo, useEffect } from "react";
import { Sparkles, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import LandingNavbar from "@/components/landing/LandingNavbar";
import FooterSection from "@/components/landing/FooterSection";
import CreditCardsHero from "@/components/credit-cards/CreditCardsHero";
import CreditCardItem from "@/components/credit-cards/CreditCardItem";
import siteContent from "@/data/siteContent";
import { useFetchCards } from "@/hooks/useFetchCards";
import type { CreditCard } from "@/types/creditCard";
import Loader from "@/components/loader";

const { bestForYou } = siteContent.creditCards;

const spendingToCategoryMap: Record<string, string[]> = {
  Travel: ["Travel"],
  Fuel: ["Fuel"],
  Cashback: ["Cashback"],
  "Online Shopping": ["Cashback", "Rewards"],
  Groceries: ["Groceries"],
  UPI: ["UPI"],
  Dining: ["Rewards"],
  Entertainment: ["Rewards"],
};

const CreditCardsBestForYou = () => {
  const [salary, setSalary] = useState<number | null>(null);
  const [spending, setSpending] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const toggleSpending = (item: string) =>
    setSpending((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );

  const { cardsData, loading } = useFetchCards();
  
  const recommended = useMemo(() => {
    if (!submitted || salary === null) return [];
    const targetCategories = spending.flatMap((s) => spendingToCategoryMap[s] || []);
    const uniqueCats = [...new Set(targetCategories)];

    return cardsData
      ?.filter((card) => {
        if (card.eligibility.min_salary > salary) return false;
        if (uniqueCats.length > 0 && !card.category.some((c) => uniqueCats.includes(c)))
          return false;
        return true;
      })
      .sort((a, b) => b.rating - a.rating);
  }, [submitted, salary, spending, cardsData]);

  const handleSubmit = () => {
    if (salary !== null) setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <LandingNavbar />
      <CreditCardsHero
        badge={bestForYou.badge}
        headline={bestForYou.headline}
        headlineHighlight={bestForYou.headlineHighlight}
        subtitle={bestForYou.subtitle}
      />
      
      {!loading ? <>
      {/* Recommendation Form */}
      <section className="py-12 md:py-16">
        <div className="container-narrow max-w-2xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl border border-border/60 shadow-sm p-6 md:p-8 space-y-8"
          >
            {/* Salary */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-foreground">
                {bestForYou.salaryLabel}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {bestForYou.salaryOptions.map((opt) => (
                  <button
                    key={opt.min}
                    onClick={() => {
                      setSalary(opt.min);
                      setSubmitted(false);
                    }}
                    className={`px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                      salary === opt.min
                        ? "border-primary bg-primary/5 text-primary ring-2 ring-primary/20"
                        : "border-border/60 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Spending Categories */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-foreground">
                {bestForYou.spendingLabel}
              </label>
              <div className="flex flex-wrap gap-2.5">
                {bestForYou.spendingOptions.map((item) => {
                  const active = spending.includes(item);
                  return (
                    <button
                      key={item}
                      onClick={() => {
                        toggleSpending(item);
                        setSubmitted(false);
                      }}
                      className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border text-sm font-medium transition-all ${
                        active
                          ? "border-primary bg-primary/5 text-primary ring-2 ring-primary/20"
                          : "border-border/60 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                      }`}
                    >
                      {active && <Check className="w-3.5 h-3.5" />}
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>

            <Button
              size="lg"
              className="w-full rounded-xl h-13 text-base font-bold gradient-bg text-primary-foreground border-0 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:scale-[1.01] transition-all duration-300 gap-2"
              onClick={handleSubmit}
              disabled={salary === null}
            >
              <Sparkles className="w-5 h-5" />
              {bestForYou.ctaLabel}
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      {submitted && (
        <section className="pb-16">
          <div className="container-wide px-6 md:px-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl md:text-3xl font-bold font-heading text-center mb-10"
            >
              {bestForYou.resultTitle}
            </motion.h2>

            {recommended.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground">
                  {bestForYou.noResultText}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {recommended.map((card, i) => (
                  <CreditCardItem key={card.id} card={card} index={i} />
                ))}
              </div>
            )}
          </div>
        </section>
      )}
      </> : <Loader />}

      <FooterSection />
    </div>
  );
};

export default CreditCardsBestForYou;
