export interface AuctionCardActiveResponse {
  id: number;
  name: string;
  owner: string;
  lastBet: number; //или хотим сюда массив ставок
  timeEnd: string;
  date: string;
}
