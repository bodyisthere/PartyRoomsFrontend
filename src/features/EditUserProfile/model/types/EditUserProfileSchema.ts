export type Want = {
  title: string;
};

export type TagInfo = {
  content: string;
  id: string;
  important: boolean;
};

export type DWant = {
  title: string;
};

export type Hobby = {
  title: string;
};

export interface EditUserProfileSchema {
  about: string;
  want: Want[];
  dwant: DWant[];
  hobby: Hobby[];
}
