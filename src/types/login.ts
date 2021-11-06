export interface LoginResponseData {
  status: number;
  data: {
    data: {
      AccessToken: string;
    };
  };
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface LoginState {
  userToken: string;
  certifyYn: boolean;
}

export interface LoginPayloadAction {
  key: 'userToken' | 'certifyYn';
  value: string | boolean;
}
