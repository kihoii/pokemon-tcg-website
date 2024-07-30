export interface IPokemon {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  hp: string;
  types: string[];
  evolvesTo: string[];
  rules: string[];
  convertedRetreatCost: number;
  number: string;
  artist: string;
  rarity: string;
  flavorText: string;
  images: {
    large: string;
    small: string;
  };
}
