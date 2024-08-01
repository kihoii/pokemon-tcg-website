import { UserLinkTypes } from '../../enums/UserLinkTypes';

export interface UserLinkRequest {
  type: UserLinkTypes;
  link: string;
}
