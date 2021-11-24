import { all, call, put, takeLatest } from 'redux-saga/effects';
import { actions } from '.';
import { callApiNoAuth } from '@/api/callApi';

interface payloadType {
  payload: unknown;
}

function* getCategoryTree({ payload }: payloadType) {
  const { status, data } = yield call(callApiNoAuth, {
    url: '/category?page=1&category=0',
    method: 'get',
    data: payload,
  });

  if (status === 200 && data) {
    yield put(actions.setValue('categoryTree', data.data.category));
  }
}

function* getStoreItmes({ payload }: payloadType) {
  const { status, data } = yield call(callApiNoAuth, {
    url: '/store',
    method: 'get',
    data: payload,
  });

  if (status === 200 && data) {
    console.log('getStoreItmes', data);
    // yield put(actions.setValue('categoryTree', data.data.category));
  }
}

export function* watchUnsplach() {
  yield all([takeLatest(actions.getCategoryTree, getCategoryTree)]);
  yield all([takeLatest(actions.getStoreItmes, getStoreItmes)]);
}
