import { all, call, put, takeLatest } from 'redux-saga/effects';
import { actions } from '.';
import { callApiNoAuth } from '@/api/callApi';
import { PayloadAction } from '@reduxjs/toolkit';
import { LoginFormData, LoginResponseData } from '@/types/login';

function* fetchLogin({ payload }: PayloadAction<LoginFormData>) {
  const { status, data }: LoginResponseData = yield call(callApiNoAuth, {
    url: '/auth/login',
    method: 'post',
    data: payload,
  });

  if (status === 200 && data) {
    yield localStorage.setItem('token', data.data.AccessToken);
    yield localStorage.setItem('certifyYn', 'true');
    yield put(actions.setUserState({ userToken: data.data.AccessToken, certifyYn: true }));
  }
}

export function* watchUnsplach() {
  yield all([takeLatest(actions.fetchLogin, fetchLogin)]);
}
