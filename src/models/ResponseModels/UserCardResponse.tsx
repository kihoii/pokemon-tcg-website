import { UserCardTypeResponse } from './UserCardTypeResponse';

export interface UserCardResponse {
  userId: number;
  cardId: string;
  type: UserCardTypeResponse;
}
