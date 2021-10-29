import { createSlice, createAction } from '@reduxjs/toolkit';

const ROOT_SLICE_NAME = 'member';
const SLICE_NAME = 'signUp';

const initialState = {
  userData: {},
};

const sagaAction = {
  signUpSubmit: createAction<unknown>(`${SLICE_NAME}/signUpSubmit`),
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

export const getState = (state: any) => state[ROOT_SLICE_NAME][SLICE_NAME];
export const actions = {
  ...slice.actions,
  ...sagaAction,
};

export default slice.reducer;