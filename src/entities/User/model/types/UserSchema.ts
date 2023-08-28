export interface User {
  id: string;
  avatar: string;
  firstName: string;
  lastName: string;
  about: string;
  hobbies: string[];
  want: string[];
  dwant: string[];
}

export interface UserSchema {
  authData?: User;

  _inited: boolean;
}
