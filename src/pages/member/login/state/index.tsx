import { createSlice, createAction } from '@reduxjs/toolkit';

const SLICE_NAME = 'login';

const initialState = {
  authData: {},
};

const sagaAction = {
  fetchPostLogin: createAction(`${SLICE_NAME}/fetchPostLogin`),
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
};

const slice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers,
});

export const getState = (state: any) => state[SLICE_NAME];
export const actions = {
  ...slice.actions,
  ...sagaAction,
};

export default slice.reducer;
