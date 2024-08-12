import { BetResponse } from '../models/ResponseModels/BetResponse';

export const betsMock: BetResponse[] = [
  {
    id: 1,
    auctionId: 1,
    amount: 1.1,
    createdAt: '2024-08-12 16:10:00',
    user: { id: 6 },
  },
  {
    id: 2,
    auctionId: 1,
    amount: 1.3,
    createdAt: '2024-08-12 16:15:00',
    user: { id: 7 },
  },
  {
    id: 3,
    auctionId: 1,
    amount: 1.7,
    createdAt: '2024-08-12 16:20:00',
    user: { id: 6 },
  },
  {
    id: 4,
    auctionId: 2,
    amount: 2.54,
    createdAt: '2024-08-12 16:10:00',
    user: { id: 8 },
  },
  {
    id: 5,
    auctionId: 2,
    amount: 3.0,
    createdAt: '2024-08-12 16:15:00',
    user: { id: 9 },
  },
  {
    id: 6,
    auctionId: 2,
    amount: 3.2,
    createdAt: '2024-08-12 16:20:00',
    user: { id: 6 },
  },
  {
    id: 7,
    auctionId: 3,
    amount: 1.0,
    createdAt: '2024-08-12 16:20:00',
    user: { id: 6 },
  },
  {
    id: 8,
    auctionId: 4,
    amount: 5.7,
    createdAt: '2024-08-12 16:20:00',
    user: { id: 6 },
  },
  {
    id: 9,
    auctionId: 4,
    amount: 6.3,
    createdAt: '2024-08-12 16:40:00',
    user: { id: 8 },
  },
];
