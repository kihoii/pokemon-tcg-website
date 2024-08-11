import { CardShortResponse } from './CardShortResponse';
import { UserCardTypeResponse } from './UserCardTypeResponse';
import { UserResponse } from './UserResponse';

export interface UserCardResponse {
  user: UserResponse;
  card: CardShortResponse;
  type: UserCardTypeResponse;
}
