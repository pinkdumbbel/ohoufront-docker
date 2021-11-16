import createSagaMiddleware from '@redux-saga/core';
import { all } from 'redux-saga/effects';
import { rootSagaMember } from '../pages/member/state/rootSaga';
import { rootSagaMarket } from '../pages/market/state/rootSaga';
import { rootSagaAdmin } from '../pages/admin/state/rootSaga';

export const sagaMiddleware = createSagaMiddleware();
export function* rootSaga() {
  yield all([...rootSagaMember, ...rootSagaMarket, ...rootSagaAdmin]);
}
