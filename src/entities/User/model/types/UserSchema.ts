export interface User {
  id: string;
}

export interface UserSchema {
  authData?: User;

  _inited: boolean;
}
