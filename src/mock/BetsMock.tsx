import { BetResponse } from '../models/ResponseModels/BetResponse';

export const betsMock: BetResponse[] = [
  {
    id: 1,
    auction: { id: 1 },
    amount: 1.1,
    createdAt: '2024-08-12 16:10:00',
    user: { id: 6 },
  },
  {
    id: 2,
    auction: { id: 1 },
    amount: 1.3,
    createdAt: '2024-08-12 16:15:00',
    user: { id: 7 },
  },
  {
    id: 3,
    auction: { id: 1 },
    amount: 1.7,
    createdAt: '2024-08-12 16:20:00',
    user: { id: 6 },
  },
  {
    id: 4,
    auction: { id: 2 },
    amount: 2.54,
    createdAt: '2024-08-12 16:10:00',
    user: { id: 8 },
  },
  {
    id: 5,
    auction: { id: 2 },
    amount: 3.0,
    createdAt: '2024-08-12 16:15:00',
    user: { id: 9 },
  },
  {
    id: 6,
    auction: { id: 2 },
    amount: 3.2,
    createdAt: '2024-08-12 16:20:00',
    user: { id: 6 },
  },
  {
    id: 7,
    auction: { id: 3 },
    amount: 1.0,
    createdAt: '2024-08-12 16:20:00',
    user: { id: 6 },
  },
  {
    id: 8,
    auction: { id: 4 },
    amount: 5.7,
    createdAt: '2024-08-12 16:20:00',
    user: { id: 6 },
  },
  {
    id: 9,
    auction: { id: 4 },
    amount: 6.3,
    createdAt: '2024-08-12 16:40:00',
    user: { id: 8 },
  },
];
