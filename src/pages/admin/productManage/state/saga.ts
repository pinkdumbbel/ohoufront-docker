import { all, call, put, takeLatest } from 'redux-saga/effects';
import { actions } from '.';
import { callApiNoAuth } from '@/api/callApi';
import { PayloadAction } from '@reduxjs/toolkit';

export function* watchUnsplach() {
  yield all([]);
}
