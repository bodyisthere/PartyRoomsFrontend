export type UserProfileCondition = 'edit' | 'view';

export interface UserProfileSchema {
  condition: UserProfileCondition;
}
