import { UserResponse } from './UserResponse';

export interface BetResponse {
  id: number;
  auctionId: number;
  amount: number;
  createdAt: string;
  user: UserResponse;
}
