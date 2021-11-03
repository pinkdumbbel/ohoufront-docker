export interface LoginFormData {
  email: string;
  password: string;
}

export interface LoginResponseData {
  userToken: string;
  certifyYn: boolean;
}

export interface LoginPayload {
  payload: LoginResponseData;
}

export interface LoginPayloadAction {
  key: 'userToken' | 'certifyYn';
  value: string | boolean;
}
