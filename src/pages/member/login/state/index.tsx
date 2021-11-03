import { RootState } from '@/store/store';
import { LoginFormData, LoginPayload, LoginPayloadAction, LoginResponseData } from '@/types/login';
import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit';

const ROOT_SLICE_NAME = 'member';
const SLICE_NAME = 'login';

const initialState: LoginResponseData = {
  userToken: 'test',
  certifyYn: false,
};

const sagaAction = {
  fetchLogin: createAction<LoginFormData>(`${SLICE_NAME}/fetchLogin`),
};

const reducers = {
  initState: () => initialState,
  setValue: {
    reducer: (state: any, action: PayloadAction<LoginPayloadAction>) => {
      state[action.payload.key] = action.payload.value;
    },
    prepare: (key: 'userToken' | 'certifyYn', value: string | boolean) => {
      return { payload: { key, value } };
    },
  },
  setUserState: (state: LoginResponseData, { payload: { userToken, certifyYn } }: LoginPayload) => {
    state.userToken = userToken;
    state.certifyYn = certifyYn;
  },
};

const slice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers,
});

export const getState = (state: RootState): LoginResponseData => state[ROOT_SLICE_NAME][SLICE_NAME];
export const actions = {
  ...slice.actions,
  ...sagaAction,
};

export default slice.reducer;
