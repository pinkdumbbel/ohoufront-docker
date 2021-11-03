export interface SignUpFormData {
  email: string;
  password: string;
  passwordConfirm: string;
  nickName: string;
}

export interface SignUpResponseData {
  isSignedUp: boolean;
}

export interface SignUpPayload {
  key: 'isSignedUp';
  value: boolean;
}
