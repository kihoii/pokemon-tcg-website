import { UserLinkTypes } from '../../enums/UserLinkTypes';

export interface UserLinkResponse {
  type: UserLinkTypes;
  link: string;
}
