import { useState, useEffect } from 'react';
import { fetchCardData } from '@/utils/fetchCardData';
import type { CreditCard } from '@/types/creditCard';

export function useFetchCards() {
  const [cardsData, setCardsData] = useState<CreditCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const data = await fetchCardData();
        setCardsData(data);
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
