export interface CardShortResponse {
  id: string;
  name?: string;
  images?: {
    small: string;
    large: string;
  };
  artist?: string;
  rarity?: string;
  flavorText?: string;
}
