import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { actions, getState } from '.';
import callApi from '@/api/callApi';

interface payloadType {
  payload: unknown;
}

function* signUpSubmit({ payload }: payloadType) {
  const { status, data } = yield call(callApi, {
    url: '/join',
    method: 'post',
    data: payload,
  });
  if (status === 201 && data) {
    yield put(actions.setValue('isSignedUp', true));
  }
}

export function* watchUnsplach() {
  yield all([takeLatest(actions.signUpSubmit, signUpSubmit)]);
}
