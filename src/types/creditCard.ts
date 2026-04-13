export interface CreditCard {
  id: string;
  bank: string;
  name: string;
  category: string[];
  type: string;
  joining_fee: number;
  annual_fee: number;
  reward_rate: string;
  benefits: string[];
  image: string;
  tags: string[];
  eligibility: {
    min_salary: number;
    recommended_for: string[];
  };
  apply_url: string;
  rating: number;
}
