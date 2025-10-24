export interface DevCard {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  isFavorite: boolean;
  imageUrl: string;
}

export interface CategorySectionProps {
  category: string;
  cards: DevCard[];
  onToggleFavorite: (id: string) => void;
}
