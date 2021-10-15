import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { actions, getState } from '.';
// import callApi from '../../../../api/callApi';

function* fetchPostLogin() {
  console.log('test')
  // const userData = yield select((state) => getState(state).userData);

  // const { isSuccess, data } = yield call(callApi, {
  //   url: '/',
  //   method: 'post',
  //   data: userData,
  // });

  // if(isSuccess && data) {
  //   yield put(actions.setValue('userData', data.list));
  // }
}

export function* watchUnsplach() {
  yield all([
    takeLatest(actions.fetchPostLogin,fetchPostLogin),
  ])
}