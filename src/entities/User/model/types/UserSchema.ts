import { TagInfo } from '@/features/EditUserProfile/model/types/EditUserProfileSchema';

export interface User {
  id: string;
  avatar: string;
  firstName: string;
  lastName: string;
  about: string;
  hobbies: TagInfo[];
  want: TagInfo[];
  dwant: TagInfo[];
}

export interface UserSchema {
  authData?: User;

  _inited: boolean;
}
