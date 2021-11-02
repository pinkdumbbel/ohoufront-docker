import { all, call, put, takeLatest } from 'redux-saga/effects';
import { actions } from '.';
import callApi from '@/api/callApi';

interface payloadType {
  payload: unknown;
}

function* fetchLogin({ payload }: payloadType) {
  const { status, data } = yield call(callApi, {
    url: '/auth/login',
    method: 'post',
    data: payload,
  });

  if (status === 200 && data) {
    yield put(actions.setUserState({ userToken: data.data.AccessToken, certifyYn: true }));
  }
}

export function* watchUnsplach() {
  yield all([takeLatest(actions.fetchLogin, fetchLogin)]);
}
