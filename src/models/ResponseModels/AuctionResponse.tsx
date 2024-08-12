import { CardShortResponse } from './CardShortResponse';
import { UserResponse } from './UserResponse';

export interface AuctionResponse {
  id: number;
  owner?: UserResponse; // id + name
  card?: CardShortResponse;
  createdAt?: string;
  startPrice?: number;
  timeActive?: number; //hours
  minStep?: number;
  isAborted?: boolean;
  isFinished?: boolean;
}
