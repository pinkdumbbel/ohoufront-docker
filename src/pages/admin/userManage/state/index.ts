import { RootState } from '@/store/store';
import { UserManageState } from '@/types/userManage';
import { createSlice } from '@reduxjs/toolkit';

const ROOT_SLICE_NAME = 'admin';
const SLICE_NAME = 'userManage';

const initialState: UserManageState = {
  userList: [
    {
      key: '1',
      email: 'abcdef1234@naver.com',
      nickname: '닉네임1',
    },
    {
      key: '2',
      email: 'abcdef1234@naver.com',
      nickname: '닉네임2',
    },
    {
      key: '3',
      email: 'abcdef1234@naver.com',
      nickname: '닉네임3',
    },
    {
      key: '4',
      email: 'abcdef1234@naver.com',
      nickname: '닉네임4',
    },
    {
      key: '5',
      email: 'abcdef1234@naver.com',
      nickname: '닉네임5',
    },
    {
      key: '6',
      email: 'abcdef1234@naver.com',
      nickname: '닉네임6',
    },
    {
      key: '7',
      email: 'abcdef1234@naver.com',
      nickname: '닉네임7',
    },
    {
      key: '8',
      email: 'abcdef1234@naver.com',
      nickname: '닉네임8',
    },
    {
      key: '9',
      email: 'abcdef1234@naver.com',
      nickname: '닉네임9',
    },
    {
      key: '10',
      email: 'abcdef1234@naver.com',
      nickname: '닉네임10',
    },
    {
      key: '11',
      email: 'abcdef1234@naver.com',
      nickname: '닉네임11',
    },
  ],
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

export const getState = (state: any): UserManageState => state[ROOT_SLICE_NAME][SLICE_NAME];
export const actions = {
  ...slice.actions,
  ...sagaAction,
};

export default slice.reducer;
