import coinAction from '../constants/actions/coin'

export default {
  fetchCoin: () => ({type: coinAction.FETCH_COIN}),
  fetchCoinSuccess: coins => ({type: coinAction.FETCH_COIN_SUCCESS, coins}),
  addCoin: (name, value) => ({type: coinAction.ADD_COIN, name, value}),
  addCoinSuccess: coin => ({type: coinAction.ADD_COIN_SUCCESS, coin}),
  removeCoin: coinId => ({type: coinAction.REMOVE_COIN, coinId}),
  removeCoinSuccess: coinId => ({type: coinAction.REMOVE_COIN_SUCCESS, coinId}),
  coinError: error => ({type: coinAction.COIN_ERROR, error})
}
