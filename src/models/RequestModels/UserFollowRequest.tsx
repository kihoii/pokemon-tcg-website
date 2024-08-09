import { UserRequest } from './UserRequest';

export interface UserFollowRequest {
  user: UserRequest;
  following: UserRequest;
}
