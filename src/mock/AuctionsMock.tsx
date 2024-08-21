import { AuctionResponse } from '../models/ResponseModels/AuctionResponse';

export const auctionsMock: AuctionResponse[] = [
  {
    id: 1,
    owner: { id: 1 },
    card: { id: 'xy5-1' },
    cardName: 'xy5-1',
    createdAt: '2024-08-20 15:00:00',
    startPrice: 1.0,
    currentPrice: 1.0,
    activeTime: 24,
    minStep: 0.1,
    isAborted: false,
    isFinished: true,
  },
  {
    id: 2,
    owner: { id: 1 },
    card: { id: 'dv1-1' },
    cardName: 'dv1-1',
    createdAt: '2024-08-21 15:00:00',
    startPrice: 2.34,
    currentPrice: 1.0,
    activeTime: 24,
    minStep: 0.12,
    isAborted: false,
    isFinished: false,
  },
  {
    id: 3,
    owner: { id: 2 },
    card: { id: 'dp3-1' },
    cardName: 'dp3-1',
    createdAt: '2024-08-12 16:00:00',
    startPrice: 0.46,
    currentPrice: 1.0,
    activeTime: 24,
    minStep: 0.21,
    isAborted: true,
    isFinished: false,
  },
  {
    id: 4,
    owner: { id: 2 },
    card: { id: 'dp3-1' },
    cardName: 'dp3-1',
    createdAt: '2024-08-21 16:00:00',
    startPrice: 5.46,
    currentPrice: 1.0,
    activeTime: 48,
    minStep: 0.21,
    isAborted: false,
    isFinished: false,
  },
];
