export interface ChangePasswordFormData {
  password: string;
  passwordConfirm: string;
}

export interface ChangePassowrdState {
  isPasswordChanged: boolean;
}

export interface ChangePasswordPayload {
  key: 'isPasswordChanged';
  value: boolean;
}

export interface ChangePasswordFormItemProps {
  title: '새 비밀번호' | '새 비밀번호 확인';
  subTitle: boolean;
  name: 'password' | 'passwordConfirm';
}

export interface ChangePasswordValidateRules {
  pattern: RegExp;
  message: '영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.';
}
