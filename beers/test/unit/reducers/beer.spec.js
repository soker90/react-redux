// beer.spec.js
import beerAction from '../../../src/actions/beer'
import beerReducer from '../../../src/reducers/beer'
import { initialState } from '../../../src/reducers/beer'
import mockData from '../mockData'

describe('Beer reducer', () => {

  test('should handle initial state', () => {
    expect(initialState()).toMatchSnapshot()
  })

  test('fetchBeer method should handle show loading', () => {
    const result = beerReducer({}, beerAction.fetchBeer())

    expect(result).toMatchSnapshot()
  })

  test('fetchBeerSuccess method should handle hide loading and load beers', () => {
    const result = beerReducer(initialState(), beerAction.fetchBeerSuccess(mockData.beers))

    expect(result).toMatchSnapshot()
  })

  test('addBeer method should handle show loading', () => {
    const result = beerReducer(initialState(), beerAction.addBeer())

    expect(result).toMatchSnapshot()
  })

  test('addBeerSuccess method should handle hide loading and add beer', () => {
    const result = beerReducer(initialState(), beerAction.addBeerSuccess(mockData.beer))

    expect(result).toMatchSnapshot()
  })

  test('removeBeer method should handle show loading', () => {
    const result = beerReducer(initialState(), beerAction.removeBeer())

    expect(result).toMatchSnapshot()
  })

  test('removeBeerSuccess method should handle hide loading and remove beer', () => {
    const state = {
      beerList: mockData.beers,
      error: null,
      loading: false
    }
    const result = beerReducer(state, beerAction.removeBeerSuccess(mockData.beerId))

    expect(result).toMatchSnapshot()
  })
})
