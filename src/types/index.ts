// export type ApiResponseKeys = 'isSignedUp';

//export type ApiResponseValues = boolean | string;

export interface SignUpFormData {
  email: string;
  nickName: string;
  password: string;
  passwordConfirm: string;
}

/* export interface Payload {
  payload: {
    key: ApiResponseKeys;
    value: ApiResponseValues;
  };
} */

/* export type ApiResponseState = {
  [key in ApiResponseKeys]: ApiResponseValues;
}; */

export interface LoginFormData {
  email: string;
  password: string;
}

export interface LoginPayload {
  payload: {
    email: string;
    password: string;
  };
}

export type LoginResponseKeys = 'userToken' | 'certifyYn';

/* export interface LoginResponseState {
  userToken: string;
  certifyYn: boolean;
} */

/* export interface LoginResponsePayload {
  payload: LoginResponseState;
} */
