import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { actions, getState } from '.';
import callApi from '@/api/callApi';

interface payloadType {
  payload: unknown;
}

function* getCategoryTree({ payload }: payloadType) {
  const { status, data } = yield call(callApi, {
    url: '/category',
    method: 'get',
    data: payload,
  });

  if (status === 200 && data) {
    yield put(actions.setValue('categoryTree', data.data.category));
  }
}

function* getStoreItmes({ payload }: payloadType) {
  const { status, data } = yield call(callApi, {
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
