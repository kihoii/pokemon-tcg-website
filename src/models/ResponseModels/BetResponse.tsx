import { AuctionResponse } from './AuctionResponse';
import { UserResponse } from './UserResponse';

export interface BetResponse {
  id: number;
  auction: AuctionResponse;
  amount: number;
  createdAt: string;
  user: UserResponse;
}
