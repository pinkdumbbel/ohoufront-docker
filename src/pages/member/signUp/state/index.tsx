import { RootState } from '@/store/store';
import { SignUpFormData, SignUpPayload, SignUpState } from '@/types/signUp';
import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit';

const ROOT_SLICE_NAME = 'member';
const SLICE_NAME = 'signUp';

const initialState: SignUpState = {
  isSignedUp: false,
};

const sagaAction = {
  signUpSubmit: createAction<SignUpFormData>(`${SLICE_NAME}/signUpSubmit`),
};

const reducers = {
  initState: () => initialState,
  setValue: {
    reducer: (state: SignUpState, { payload: { key, value } }: PayloadAction<SignUpPayload>) => {
      state[key] = value;
    },
    prepare: (key: 'isSignedUp', value: boolean) => {
      return { payload: { key, value } };
    },
  },
};

const slice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers,
});

export const getState = (state: RootState): SignUpState => state[ROOT_SLICE_NAME][SLICE_NAME];
export const actions = {
  ...slice.actions,
  ...sagaAction,
};

export default slice.reducer;
