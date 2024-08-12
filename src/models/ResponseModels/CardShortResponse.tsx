export interface CardShortResponse {
  id: string;
  name?: string;
  images?: {
    small: string;
    large: string;
  };
  rarity?: string;
}
