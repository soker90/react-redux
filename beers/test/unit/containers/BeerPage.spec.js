import {mapStateToProps, mapDispatchToProps} from '../../../src/containers/BeerPage'
import { initialState } from '../../../src/reducers/modal'
import { initialState as beersInitialState } from '../../../src/reducers/beer'

describe('Containers', () => {
  test('should map BeerPage state to props', () => {
    const state = {
      modal: initialState(),
      beers: beersInitialState(),
    }

    expect(mapStateToProps(state)).toMatchSnapshot()
  })

  test('should map BeerPage actions to props', () => {
    expect(mapDispatchToProps()).toMatchSnapshot()
  })
})
