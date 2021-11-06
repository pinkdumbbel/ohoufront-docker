export interface SignUpResponseData {
  status: number;
}

export interface SignUpFormData {
  email: string;
  password: string;
  passwordConfirm: string;
  nickName: string;
}

export interface SignUpState {
  isSignedUp: boolean;
}

export interface SignUpPayload {
  key: 'isSignedUp';
  value: boolean;
}
