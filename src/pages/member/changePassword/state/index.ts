import { RootState } from '@/store/store';
import { ChangePassowrdState, ChangePasswordFormData, ChangePasswordPayload } from '@/types/changePassword';
import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

const ROOT_SLICE_NAME = 'member';
const SLICE_NAME = 'changePassword';

const initialState: ChangePassowrdState = {
  isPasswordChanged: false,
};

const sagaAction = {
  changePasswordSubmit: createAction<ChangePasswordFormData>(`${ROOT_SLICE_NAME}/changePasswordSubmit`),
};
const reducers = {
  initState: () => initialState,
  setValue: {
    reducer: (state: ChangePassowrdState, { payload: { key, value } }: PayloadAction<ChangePasswordPayload>) => {
      state[key] = value;
    },
    prepare: (key: 'isPasswordChanged', value: boolean) => {
      return { payload: { key, value } };
    },
  },
};

const slice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers,
});

//export getState = (state: RootState) =>

export const actions = {
  ...slice.actions,
  ...sagaAction,
};

export default slice.reducer;
