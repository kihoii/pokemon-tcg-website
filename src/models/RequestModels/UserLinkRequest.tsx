import { UserLinkTypesRequest } from './UserLinkTypesRequest';

export interface UserLinkRequest {
  type: UserLinkTypesRequest;
  link: string;
}
