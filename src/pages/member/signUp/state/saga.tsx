import { all, call, put, takeLatest } from 'redux-saga/effects';
import { actions } from '.';
import callApi from '@/api/callApi';
import { PayloadAction } from '@reduxjs/toolkit';
import { SignUpFormData, SignUpResponseData } from '@/types/signUp';

function* signUpSubmit({ payload }: PayloadAction<SignUpFormData>) {
  const { status }: SignUpResponseData = yield call(callApi, {
    url: '/join',
    method: 'post',
    data: payload,
  });
  if (status === 201) {
    yield put(actions.setValue('isSignedUp', true));
  }
}

export function* watchUnsplach() {
  yield all([takeLatest(actions.signUpSubmit, signUpSubmit)]);
}
