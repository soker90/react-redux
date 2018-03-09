// modal.spec.js
import modalAction from '../../../src/actions/modal'
import modalReducer from '../../../src/reducers/modal'
import { initialState } from '../../../src/reducers/modal'

describe('Modal reducer', () => {

  test('should handle initial state', () => {
    expect(initialState()).toMatchSnapshot()
  })

  test('openModal method should handle open modal and set params', () => {
    const result = modalReducer(initialState(), modalAction.openModal({
          title: 'Hey a modal title',
          body: 'This is the modal body text',
          callback: jest.fn()
      }))

    expect(result).toMatchSnapshot()
  })

  test('closeModal method should handle close modal and reset params', () => {
    const result = modalReducer(initialState(), modalAction.closeModal())

    expect(result).toMatchSnapshot()
  })

})
