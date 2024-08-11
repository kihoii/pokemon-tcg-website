import { UserResponse } from './UserResponse';

export interface UserFollowerResponse {
  followerId: UserResponse;
  followingId: UserResponse;
}
