import {mapStateToProps, mapDispatchToProps} from '../../../src/containers/ModalPage'
import { initialState } from '../../../src/reducers/modal'

describe('Containers', () => {
  test('should map ModalPage state to props', () => {
    const state = {
      modal: initialState()
    }

    expect(mapStateToProps(state)).toMatchSnapshot()
  })

  test('should map ModalPage actions to props', () => {
    expect(mapDispatchToProps()).toMatchSnapshot()
  })
})
