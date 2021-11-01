import { createSlice, createAction } from '@reduxjs/toolkit';

const ROOT_SLICE_NAME = 'member';
const SLICE_NAME = 'login';

const initialState = {
  userToken: 'test',
  certifyYn: false,
};

const sagaAction = {
  fetchLogin: createAction<unknown>(`${SLICE_NAME}/fetchLogin`),
};

const reducers = {
  initState: () => initialState,
  setValue: {
    reducer: (state: any, { payload: { key, value } }: any) => {
      state[key] = value;
    },
    prepare: (key: any, value: any) => {
      return { payload: { key, value } };
    },
  },
  setUserState: (state: any, { payload: { userToken, certifyYn } }: any) => {
    state.userToken = userToken;
    state.certifyYn = certifyYn;
  },
};

const slice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers,
});

export const getState = (state: any) => state[ROOT_SLICE_NAME][SLICE_NAME];
export const actions = {
  ...slice.actions,
  ...sagaAction,
};

export default slice.reducer;
