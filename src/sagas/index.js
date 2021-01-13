import { all, fork } from 'redux-saga/effects';

import fetch from './fetch';

export default function* rootSaga() {
  yield all([fork(fetch)]);
}
