export async function fetchCardData() {
  try {
    const response = await fetch('/api/cards');
    if (!response.ok) {
      throw new Error('Failed to fetch cards');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching card data:', error);
    return [];
  }
}