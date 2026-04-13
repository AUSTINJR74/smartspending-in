import { useState, useEffect } from 'react';
import type { CreditCard } from '@/types/creditCard';
import cards from '@/data/cards.json';

export function useFetchCards() {
  const [cardsData, setCardsData] = useState<CreditCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 500));
        setCardsData(cards);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch cards:', err);
        setError(err instanceof Error ? err : new Error('Failed to fetch cards'));
      } finally {
        setLoading(false);
      }
    };
    fetchCards();
  }, []);

  return { cardsData, loading, error, setCardsData };
}
