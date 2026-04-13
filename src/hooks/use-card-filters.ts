import { useMemo } from "react";
import type { CreditCard } from "@/types/creditCard";
import type { Filters } from "@/components/credit-cards/FilterSidebar";

export function matchesFeeRange(fee: number, range: string): boolean {
  switch (range) {
    case "free":
      return fee === 0;
    case "under500":
      return fee > 0 && fee < 500;
    case "under1000":
      return fee > 0 && fee < 1000;
    case "mid":
      return fee >= 1000 && fee <= 5000;
    case "premium":
      return fee > 5000;
    default:
      return true;
  }
}

export function applyFilters(cards: CreditCard[], filters: Filters): CreditCard[] {
  return cards.filter((card) => {
    if (filters.banks.length > 0 && !filters.banks.includes(card.bank)) return false;
    if (
      filters.categories.length > 0 &&
      !card.category.some((c) => filters.categories.includes(c))
    )
      return false;
    if (
      filters.feeRange.length > 0 &&
      !filters.feeRange.some((r) => matchesFeeRange(card.annual_fee, r))
    )
      return false;
    if (filters.cardTypes.length > 0 && !filters.cardTypes.includes(card.type))
      return false;
    return true;
  });
}

export function sortCards(cards: CreditCard[], sortBy: string): CreditCard[] {
  const sorted = [...cards];
  switch (sortBy) {
    case "rating":
      return sorted.sort((a, b) => b.rating - a.rating);
    case "fee_asc":
      return sorted.sort((a, b) => a.annual_fee - b.annual_fee);
    case "rewards":
      return sorted.sort((a, b) => b.rating - a.rating);
    case "popular":
    default:
      return sorted.sort(
        (a, b) =>
          (b.tags.includes("Top Card") ? 1 : 0) - (a.tags.includes("Top Card") ? 1 : 0) ||
          b.rating - a.rating
      );
  }
}

export function useCardMeta(cards: CreditCard[]) {
  return useMemo(() => {
    const banks = [...new Set(cards.map((c) => c.bank))].sort();
    const categories = [...new Set(cards.flatMap((c) => c.category))].sort();
    const cardTypes = [...new Set(cards.map((c) => c.type))].sort();
    return { banks, categories, cardTypes };
  }, [cards]);
}
