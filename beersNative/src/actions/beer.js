import beerAction from '../constants/actions/beer'

export default {
  fetchBeer: () => ({type: beerAction.FETCH_BEER}),
  fetchBeerSuccess: beers => ({type: beerAction.FETCH_BEER_SUCCESS, beers}),
  addBeer: (name, graduation, price) => ({type: beerAction.ADD_BEER, name, graduation, price}),
  addBeerSuccess: beer => ({type: beerAction.ADD_BEER_SUCCESS, beer}),
  removeBeer: beerId => ({type: beerAction.REMOVE_BEER, beerId}),
  removeBeerSuccess: beerId => ({type: beerAction.REMOVE_BEER_SUCCESS, beerId}),
  beerError: error => ({type: beerAction.BEER_ERROR, error})
}
