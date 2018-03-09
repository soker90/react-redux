import {mapStateToProps, mapDispatchToProps} from '../../../src/containers/AppPage'
import { initialState } from '../../../src/reducers/modal'

describe('Containers', () => {
  test('should map AppPage state to props', () => {
    const state = {
      modal: initialState()
    }

    expect(mapStateToProps(state)).toMatchSnapshot()
  })

  test('should map AppPage actions to props', () => {
    expect(mapDispatchToProps()).toMatchSnapshot()
  })
})
