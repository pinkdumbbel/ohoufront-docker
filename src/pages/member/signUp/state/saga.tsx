import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { actions, getState } from '.';
// import callApi from '../../../../api/callApi';
import callApi from '@/api/callApi';
import { ResponseType } from 'axios';

interface payloadType {
  payload: unknown;
}

function* join({ payload }: payloadType) {
  const { isSuccess, data } = yield call(callApi, {
    url: '/join',
    method: 'post',
    params: '',
    data: payload,
  });

  if (isSuccess && data) {
    yield put(actions.setValue('userData', data.list));
  }
}

export function* watchUnsplach() {
  yield all([takeLatest(actions.join, join)]);
}
