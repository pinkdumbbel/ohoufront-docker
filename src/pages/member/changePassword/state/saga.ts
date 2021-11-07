import callApi from '@/api/callApi';
import { ChangePasswordFormData } from '@/types/changePassword';
import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { actions } from '.';

function* changePasswordSubmit({ payload }: PayloadAction<ChangePasswordFormData>) {
  const { status } = yield call(callApi, {
    url: '',
    method: 'post',
    data: payload,
  });

  if (status === 200) {
    yield put(actions.setValue('isPasswordChanged', true));
  }
}

export function* watchUnsplach() {
  yield all([takeLatest(actions.changePasswordSubmit, changePasswordSubmit)]);
}

export {};
