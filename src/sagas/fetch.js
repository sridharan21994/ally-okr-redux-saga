import { all, call, put, takeEvery } from 'redux-saga/effects';
import { LOAD_OKR_LIST_ASYNC, LOAD_OKR_LIST } from '../actions';
import { getOkrList } from '../utils/api'


export function* fetchOkrList() {
  const response = yield call(getOkrList);
  yield put({ type: LOAD_OKR_LIST, OkrList: response });
}

export function* loadOkrList() {
  yield takeEvery(LOAD_OKR_LIST_ASYNC, fetchOkrList);
}

export default function* root()  {
    yield all([loadOkrList()]);
}
