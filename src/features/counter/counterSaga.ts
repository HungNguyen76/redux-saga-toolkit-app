import { PayloadAction } from '@reduxjs/toolkit';
import { takeEvery } from 'redux-saga/effects';
import { increment } from './counterSlice';

export function* log(action: PayloadAction) {}

export default function* counterSaga() {
    yield takeEvery(increment().type, log)
}