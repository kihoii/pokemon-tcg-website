import { UserLinkRequest } from './UserLinkRequest';

export interface UserRequest {
  id: number;
  name?: string;
  bio?: string;
  avatar?: string;
  links?: UserLinkRequest[];
}
