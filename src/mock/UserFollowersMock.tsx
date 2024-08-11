import { UserFollowerResponse } from '../models/ResponseModels/UserFollowerResponse';

export const userFollowersMock: UserFollowerResponse[] = [
  {
    followerId: { id: 1 },
    followingId: { id: 2 },
  },
  {
    followerId: { id: 1 },
    followingId: { id: 3 },
  },
  {
    followerId: { id: 1 },
    followingId: { id: 4 },
  },
  {
    followerId: { id: 2 },
    followingId: { id: 1 },
  },
  {
    followerId: { id: 2 },
    followingId: { id: 4 },
  },
  {
    followerId: { id: 3 },
    followingId: { id: 1 },
  },
  {
    followerId: { id: 3 },
    followingId: { id: 5 },
  },
  {
    followerId: { id: 4 },
    followingId: { id: 2 },
  },
  {
    followerId: { id: 5 },
    followingId: { id: 2 },
  },
  {
    followerId: { id: 5 },
    followingId: { id: 1 },
  },
  {
    followerId: { id: 6 },
    followingId: { id: 1 },
  },
  {
    followerId: { id: 7 },
    followingId: { id: 1 },
  },
  {
    followerId: { id: 8 },
    followingId: { id: 1 },
  },
  {
    followerId: { id: 9 },
    followingId: { id: 2 },
  },
];
