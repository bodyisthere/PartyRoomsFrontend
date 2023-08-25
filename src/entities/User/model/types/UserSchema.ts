export interface User {
  id: string;
  avatar: string;
  firstName: string;
  lastName: string;
}

export interface UserSchema {
  authData?: User;

  _inited: boolean;
}
