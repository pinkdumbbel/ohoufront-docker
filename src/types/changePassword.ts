export interface ChangePasswordFormData {
  password: string;
  password_confirm: string;
}

export interface ChangePassowrdState {
  isPasswordChanged: boolean;
}

export interface ChangePasswordPayload {
  key: 'isPasswordChanged';
  value: boolean;
}
