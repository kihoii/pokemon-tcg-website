import { UserCardResponse } from './UserCardResponse';
import { UserFollowerResponse } from './UserFollowerResponse';
import { UserLinkResponse } from './UserLinkResponse';

export interface UserResponse {
  id: number;
  name?: string;
  bio?: string;
  avatar?: string;
  links?: UserLinkResponse[];
  followers?: UserFollowerResponse[];
  cards?: UserCardResponse[]; //owned + wished
}
