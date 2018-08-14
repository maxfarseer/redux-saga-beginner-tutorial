import { delay } from 'redux-saga'
import { call, put, takeEvery, all } from 'redux-saga/effects'

//eslint-disable-next-line require-yield
export function* helloSaga() {
  console.log('Hello Sagas!')
}

export function* incrementAsync() {
  yield call(delay, 1000)
  yield put({ type: 'INCREMENT' })
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()])
}
