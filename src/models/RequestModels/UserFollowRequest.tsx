import { UserRequest } from './UserRequest';

export interface UserFollowRequest {
  userId: number;
  followingId: number;
}
