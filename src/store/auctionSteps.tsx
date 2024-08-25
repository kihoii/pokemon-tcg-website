import { AuctionStepEnum } from '../enums/AuctionStepEnum';

export const auctionSteps = [
  {
    title: AuctionStepEnum[AuctionStepEnum.Started],
    description: 'Auction is started. There are no bets yet',
  },
  {
    title: AuctionStepEnum[AuctionStepEnum.InProgress],
    description: 'Make your bets',
  },
  {
    title: AuctionStepEnum[AuctionStepEnum.Finished],
    description: 'Auction is finished',
  },
];
