// beer.spec.js
import {
  watchFetchBeer, fetchBeer,
  watchAddBeer, addBeer,
  watchRemoveBeer, removeBeer
} from '../../../src/sagas/beer'

import mockData from '../mockData'

describe('Beer saga', () => {
  test('should trigger on every BEER_FETCH action', () => {
    const generator = watchFetchBeer()
    expect(generator.next().value).toMatchSnapshot()
  })

  test('fetchBeer success', () => {
    const generator = fetchBeer()
    const beers = mockData.beers

    expect(generator.next().value).toMatchSnapshot()
    expect(generator.next(beers).value).toMatchSnapshot()
    expect(generator.next().done).toMatchSnapshot()
  })

  test('fetchBeer error', () => {
    const generator = fetchBeer()
    const error = {message: 'error'}

    expect(generator.next().value).toMatchSnapshot()
    expect(generator.throw(error).value).toMatchSnapshot()
    expect(generator.next().done).toMatchSnapshot()
  })

  test('should trigger on every ADD_BEER action', () => {
    const generator = watchAddBeer()
    expect(generator.next().value).toMatchSnapshot()
  })

  test('addBeer success', () => {
    const generator = addBeer(mockData.beer)

    expect(generator.next().value).toMatchSnapshot()
    expect(generator.next().value).toMatchSnapshot()
    expect(generator.next().done).toMatchSnapshot()
  })

  test('addBeer error', () => {
    const generator = addBeer(mockData.beer)
    const error = {message: 'error'}

    expect(generator.next().value).toMatchSnapshot()
    expect(generator.throw(error).value).toMatchSnapshot()
    expect(generator.next().done).toMatchSnapshot()
  })

  test('should trigger on every REMOVE_BEER action', () => {
    const generator = watchRemoveBeer()
    expect(generator.next().value).toMatchSnapshot()
  })

  test('removeBeer success', () => {
    const generator = removeBeer(mockData.beerId)

    expect(generator.next().value).toMatchSnapshot()
    expect(generator.next().value).toMatchSnapshot()
    expect(generator.next().done).toMatchSnapshot()
  })

  test('removeBeer error', () => {
    const generator = removeBeer(mockData.beerId)
    const error = {message: 'error'}

    expect(generator.next().value).toMatchSnapshot()
    expect(generator.throw(error).value).toMatchSnapshot()
    expect(generator.next().done).toMatchSnapshot()
  })

})
