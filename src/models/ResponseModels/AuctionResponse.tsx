import { CardShortResponse } from './CardShortResponse';
import { UserResponse } from './UserResponse';

export interface AuctionResponse {
  id: number;
  owner?: UserResponse; // id + name
  card?: CardShortResponse;
  cardName?: string;
  createdAt?: string;
  startPrice?: number;
  currentPrice: number;
  activeTime: number; //hours
  minStep: number;
  isAborted?: boolean;
  isFinished?: boolean;
}
