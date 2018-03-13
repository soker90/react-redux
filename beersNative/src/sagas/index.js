import { fork } from 'redux-saga/effects'
import * as beerSagas from './beer'
import * as coinSagas from './coin'

export default function * root () {
  yield [
    fork(beerSagas.watchFetchBeer),
    fork(beerSagas.watchAddBeer),
    fork(beerSagas.watchRemoveBeer),
    fork(coinSagas.watchFetchCoin),
    fork(coinSagas.watchAddCoin),
    fork(coinSagas.watchRemoveCoin)
  ]
}
