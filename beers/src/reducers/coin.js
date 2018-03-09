import coinAction from '../constants/actions/coin'

export function initialState () {
  return {
    coinList: [],
    coin: {},
    loading: false,
    error: null
  }
}

function fetchCoin(state) {
  return {
    ...state,
    coinList: [],
    loading: true,
    error: null
  }
}

function fetchCoinSuccess(state, {coins}) {
  return {
    ...state,
    coinList: coins.coins,
    loading: false,
    error: null
  }
}

function addCoin(state) {
  return {
    ...state,
    loading: true,
    error: null
  }
}

function addCoinSuccess(state, {coin}) {
  return {
    ...state,
    coinList: [coin, ...state.coinList],
    loading: false,
    error: null
  }
}

function removeCoin(state) {
  return {
    ...state,
    loading: true,
    error: null
  }
}

function removeCoinSuccess(state, {coinId}) {
  return {
    ...state,
    coinList: state.coinList.filter((coin) => coin.id !== coinId.coinId),
    loading: false,
    error: null
  }
}

function coinError(state, {error}) {
  return {
    ...state,
    loading: false,
    error: error
  }
}

export default function (state = initialState(), action) {
  switch (action.type) {
    case coinAction.FETCH_COIN:
      return fetchCoin(state, action)
    case coinAction.FETCH_COIN_SUCCESS:
      return fetchCoinSuccess(state, action)
    case coinAction.ADD_COIN:
      return addCoin(state, action)
    case coinAction.ADD_COIN_SUCCESS:
      return addCoinSuccess(state, action)
    case coinAction.REMOVE_COIN:
      return removeCoin(state, action)
    case coinAction.REMOVE_COIN_SUCCESS:
      return removeCoinSuccess(state, action)
    case coinAction.COIN_ERROR:
      return coinError(state, action)
    default:
      return state
  }
}
