import { call, put, takeEvery } from 'redux-saga/effects'
import addCoinService from '../services/addCoin'
import fetchCoinService from '../services/fetchCoin'
import removeCoinService from '../services/removeCoin'
import coinActions from '../actions/coin'
import coinActionTypes from '../constants/actions/coin'

export function * fetchCoin () {
  try {
    const response = yield call(fetchCoinService)
    yield put(coinActions.fetchCoinSuccess(response))
  } catch (error) {
    yield put(coinActions.coinError(error))
  }
}

export function * watchFetchCoin () {
  yield takeEvery(coinActionTypes.FETCH_COIN, fetchCoin)
}

export function * addCoin (coin) {
  try {
    const response = yield call(addCoinService, coin)
    yield put(coinActions.addCoinSuccess(response))
  } catch (error) {
    yield put(coinActions.coinError(error))
  }
}

export function * watchAddCoin () {
  yield takeEvery(coinActionTypes.ADD_COIN, addCoin)
}

export function * removeCoin (coinId) {
  try {
    yield call(removeCoinService, coinId)
    yield put(coinActions.removeCoinSuccess(coinId))
  } catch (error) {
    yield put(coinActions.coinError(error))
  }
}

export function * watchRemoveCoin () {
  yield takeEvery(coinActionTypes.REMOVE_COIN, removeCoin)
}
