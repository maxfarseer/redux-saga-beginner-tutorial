import { incrementAsync } from './sagas'
import { put, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'

describe('incrementAsync Saga test', () => {
  const gen = incrementAsync()

  it('incrementAsync Saga must call delay(1000)', () => {
    expect(gen.next().value).toEqual(call(delay, 1000))
  })

  it('incrementAsync Saga must dispatch an INCREMENT action', () => {
    expect(gen.next().value).toEqual(put({ type: 'INCREMENT' }))
  })

  it('incrementAsync Saga must be done', () => {
    expect(gen.next()).toEqual({ done: true, value: undefined })
  })
})
