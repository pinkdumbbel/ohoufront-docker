import { RootState } from '@/store/store';
import { UserManageState } from '@/types/userManage';
import { createSlice } from '@reduxjs/toolkit';

const ROOT_SLICE_NAME = 'admin';
const SLICE_NAME = 'userManage';

const initialState: UserManageState = {
  userList: [],
};

const sagaAction = {};

const reducers = {
  initState: () => initialState,
};

const slice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers,
});

export const getState = (state: RootState): UserManageState => state[ROOT_SLICE_NAME][SLICE_NAME];
export const actions = {
  ...slice.actions,
  ...sagaAction,
};

export default slice.reducer;
