import { call, put, takeEvery } from 'redux-saga/effects'
import addBeerService from '../services/addBeer'
import fetchBeerService from '../services/fetchBeer'
import removeBeerService from '../services/removeBeer'
import beerActions from '../actions/beer'
import beerActionTypes from '../constants/actions/beer'

export function * fetchBeer () {
  try {
    const response = yield call(fetchBeerService)
    yield put(beerActions.fetchBeerSuccess(response))
  } catch (error) {
    yield put(beerActions.beerError(error))
  }
}

export function * watchFetchBeer () {
  yield takeEvery(beerActionTypes.FETCH_BEER, fetchBeer)
}

export function * addBeer (beer) {
  try {
    const response = yield call(addBeerService, beer)
    yield put(beerActions.addBeerSuccess(response))
  } catch (error) {
    yield put(beerActions.beerError(error))
  }
}

export function * watchAddBeer () {
  yield takeEvery(beerActionTypes.ADD_BEER, addBeer)
}

export function * removeBeer (beerId) {
  try {
    yield call(removeBeerService, beerId)
    yield put(beerActions.removeBeerSuccess(beerId))
  } catch (error) {
    yield put(beerActions.beerError(error))
  }
}

export function * watchRemoveBeer () {
  yield takeEvery(beerActionTypes.REMOVE_BEER, removeBeer)
}
