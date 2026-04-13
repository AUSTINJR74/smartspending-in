import { useState, useMemo, useEffect } from "react";
import { SlidersHorizontal, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import LandingNavbar from "@/components/landing/LandingNavbar";
import FooterSection from "@/components/landing/FooterSection";
import CreditCardsHero from "@/components/credit-cards/CreditCardsHero";
import CreditCardItem from "@/components/credit-cards/CreditCardItem";
import FilterSidebar, { Filters } from "@/components/credit-cards/FilterSidebar";
import { applyFilters, sortCards, useCardMeta } from "@/hooks/use-card-filters";
import siteContent from "@/data/siteContent";
import type { CreditCard } from "@/types/creditCard";
import { useFetchCards } from "@/hooks/useFetchCards";
import Loader from "@/components/loader";

const { topPage, sortOptions } = siteContent.creditCards;
const emptyFilters: Filters = { banks: [], categories: [], feeRange: [], cardTypes: [] };

const CreditCardsTop = () => {
  const [filters, setFilters] = useState<Filters>(emptyFilters);
  const [sortBy, setSortBy] = useState("popular");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { cardsData, loading } = useFetchCards();
  const topCards = cardsData.filter((c) => c.tags.includes("Top Card"));
  const { banks, categories, cardTypes } = useCardMeta(topCards);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const filtered = useMemo(
    () => sortCards(applyFilters(topCards, filters), sortBy),
    [filters, sortBy]
  );

  const activeCount =
    filters.banks.length + filters.categories.length + filters.feeRange.length + filters.cardTypes.length;

  return (
    <div className="min-h-screen bg-background">
      <LandingNavbar />
      <CreditCardsHero
        badge={topPage.badge}
        headline={topPage.headline}
        headlineHighlight={topPage.headlineHighlight}
        subtitle={topPage.subtitle}
      />

      {!loading ? (<section className="py-10 md:py-14">
        <div className="container-wide px-6 md:px-10">
          <div className="flex items-center justify-between mb-8 gap-4">
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                className="lg:hidden rounded-lg gap-2 text-sm font-semibold"
                onClick={() => setDrawerOpen(true)}
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
                {activeCount > 0 && (
                  <span className="ml-1 w-5 h-5 rounded-full gradient-bg text-primary-foreground text-[10px] font-bold flex items-center justify-center">
                    {activeCount}
                  </span>
                )}
              </Button>
              <p className="text-sm text-muted-foreground hidden sm:block">
                Showing <span className="font-semibold text-foreground">{filtered.length}</span> top cards
              </p>
            </div>

            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-4 h-4 text-muted-foreground" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm font-medium bg-white border border-border/60 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex gap-8">
            <FilterSidebar
              filters={filters}
              onFiltersChange={setFilters}
              availableBanks={banks}
              availableCategories={categories}
              availableCardTypes={cardTypes}
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
            />

            <div className="flex-1 min-w-0">
              {filtered.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-lg text-muted-foreground">No top cards match your filters.</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4 rounded-full"
                    onClick={() => setFilters(emptyFilters)}
                  >
                    Clear All Filters
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filtered.map((card, i) => (
                    <CreditCardItem key={card.id} card={card} index={i} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>) : <Loader />}

      <FooterSection />
    </div>
  );
};

export default CreditCardsTop;
