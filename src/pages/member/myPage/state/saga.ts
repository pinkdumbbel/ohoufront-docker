import callApi from '@/api/callApi';
import { all, AllEffect, call, ForkEffect, put, takeLatest } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { actions } from '@/pages/member/myPage/state';
import { MyPageFormData } from '@/types/myPage';

function* myPageSubmit({ payload }: PayloadAction<MyPageFormData>) {
  const { status } = yield call(callApi, {
    url: '/members',
    method: 'post',
    data: payload,
  });

  if (status === 200) {
    console.log('status', status);
    yield put(actions.setValue('isEditProfile', true));
  }
}

export function* watchUnsplach(): Generator<AllEffect<ForkEffect<never>>, void, unknown> {
  yield all([takeLatest(actions.editProfileSubmit, myPageSubmit)]);
}
