import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { actions, getState } from '.';
import callApi from '@/api/callApi';

interface payloadType {
  payload: unknown;
}

function* login({ payload }: payloadType) {
  const { status, data } = yield call(callApi, {
    url: '/auth/login',
    method: 'post',
    data: payload,
  });

  if (status === 200 && data) {
    yield put(actions.setValue('userData', data.list));
  }
}

export function* watchUnsplach() {
  yield all([takeLatest(actions.login, login)]);
}
