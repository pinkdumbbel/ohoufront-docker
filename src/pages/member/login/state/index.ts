import { RootState } from '@/store/store';
import { LoginFormData, LoginState } from '@/types/login';
import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit';

const ROOT_SLICE_NAME = 'member';
const SLICE_NAME = 'login';

const initialState: LoginState = {
  userToken: 'test',
  certifyYn: false,
};

const sagaAction = {
  fetchLogin: createAction<LoginFormData>(`${SLICE_NAME}/fetchLogin`),
};

const reducers = {
  initState: () => initialState,
  setUserState: (state: LoginState, { payload: { userToken, certifyYn } }: PayloadAction<LoginState>) => {
    state.userToken = userToken;
    state.certifyYn = certifyYn;
  },
};

const slice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers,
});

export const getState = (state: RootState): LoginState => state[ROOT_SLICE_NAME][SLICE_NAME];
export const actions = {
  ...slice.actions,
  ...sagaAction,
};

export default slice.reducer;
