export type TagInfo = {
  content: string;
  id: string;
  important: boolean;
};

export interface EditUserProfileSchema {
  about: string;
  want: TagInfo[];
  dwant: TagInfo[];
  hobby: TagInfo[];
}
