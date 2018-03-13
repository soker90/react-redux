import beerAction from '../constants/actions/beer'

export function initialState () {
  return {
    beerList: [],
    beer: {},
    loading: false,
    error: null
  }
}

function fetchBeer(state) {
  return {
    ...state,
    beerList: [],
    loading: true,
    error: null
  }
}

function fetchBeerSuccess(state, {beers}) {
  return {
    ...state,
    beerList: beers.beers,
    loading: false,
    error: null
  }
}

function addBeer(state) {
  return {
    ...state,
    loading: true,
    error: null
  }
}

function addBeerSuccess(state, {beer}) {
  return {
    ...state,
    beerList: [beer, ...state.beerList],
    loading: false,
    error: null
  }
}

function removeBeer(state) {
  return {
    ...state,
    loading: true,
    error: null
  }
}

function removeBeerSuccess(state, {beerId}) {
  return {
    ...state,
    beerList: state.beerList.filter((beer) => beer.id !== beerId.beerId),
    loading: false,
    error: null
  }
}

function beerError(state, {error}) {
  return {
    ...state,
    loading: false,
    error: error
  }
}

export default function (state = initialState(), action) {
  switch (action.type) {
    case beerAction.FETCH_BEER:
      return fetchBeer(state, action)
    case beerAction.FETCH_BEER_SUCCESS:
      return fetchBeerSuccess(state, action)
    case beerAction.ADD_BEER:
      return addBeer(state, action)
    case beerAction.ADD_BEER_SUCCESS:
      return addBeerSuccess(state, action)
    case beerAction.REMOVE_BEER:
      return removeBeer(state, action)
    case beerAction.REMOVE_BEER_SUCCESS:
      return removeBeerSuccess(state, action)
    case beerAction.BEER_ERROR:
      return beerError(state, action)
    default:
      return state
  }
}
