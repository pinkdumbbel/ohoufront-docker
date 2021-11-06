import { RootState } from '@/store/store';
import { MyPageFormData, MyPagePayload, MyPageState } from '@/types/myPage';
import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

const ROOT_SLICE_NAME = 'member';
const SLICE_NAME = 'myPage';

const initialState: MyPageState = {
  isEditProfile: false,
};

const sagaAction = {
  editProfileSubmit: createAction<MyPageFormData>(`${SLICE_NAME}/editProfileSubmit`),
};

const reducers = {
  initState: () => initialState,
  setValue: {
    reducer: (state: MyPageState, { payload: { key, value } }: PayloadAction<MyPagePayload>) => {
      state[key] = value;
    },
    prepare: (key: 'isEditProfile', value: boolean) => {
      return { payload: { key, value } };
    },
  },
};

const slice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers,
});

export const getState = (state: RootState): MyPageState => state[ROOT_SLICE_NAME][SLICE_NAME];
export const actions = {
  ...slice.actions,
  ...sagaAction,
};

export default slice.reducer;
