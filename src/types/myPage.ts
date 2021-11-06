/* export interface MyPageFormData {
  email: string;
  nickname: string;
  hompage: string;
  gender: string;
  profile?: string;
}
 */

export interface MyPageFormData {
  email: string;
  name: string;
}

export interface MyPageState {
  isEditProfile: boolean;
}

export interface MyPagePayload {
  key: 'isEditProfile';
  value: boolean;
}
