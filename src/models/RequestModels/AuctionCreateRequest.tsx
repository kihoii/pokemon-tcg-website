export interface AuctionCreateRequest {
  ownerId: number;
  cardId: string;
  cardName: string;
  createdAt: string;
  startPrice: number;
  currentPrice: number;
  activeTime: number; //hours
  minStep: number;
  isAborted: boolean;
  isFinished: boolean;
}
