import { CardShortResponse } from './CardShortResponse';
import { UserLinkResponse } from './UserLinkResponse';

export interface UserResponse {
  id: number;
  name: string;
  bio?: string;
  avatar?: string;
  links?: UserLinkResponse[];
  followersTotal?: number;
  cards?: CardShortResponse[];
  wishlist?: CardShortResponse[];
}
