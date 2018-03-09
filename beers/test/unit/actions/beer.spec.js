// beer.spec.js
import beer from '../../../src/actions/beer'

describe('Beer action', () => {
  test('fetchBeer', () => {
    expect(beer.fetchBeer()).toMatchSnapshot()
  })
  test('fetchBeerSuccess', () => {
    expect(beer.fetchBeerSuccess()).toMatchSnapshot()
  })
  test('addBeer', () => {
    expect(beer.addBeer()).toMatchSnapshot()
  })
  test('addBeerSuccess', () => {
    expect(beer.addBeerSuccess()).toMatchSnapshot()
  })
  test('removeBeer', () => {
    expect(beer.removeBeer()).toMatchSnapshot()
  })
  test('removeBeerSuccess', () => {
    expect(beer.removeBeerSuccess()).toMatchSnapshot()
  })
  test('beerError', () => {
    expect(beer.beerError()).toMatchSnapshot()
  })
})
