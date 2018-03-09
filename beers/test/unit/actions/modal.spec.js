// modal.spec.js
import modal from '../../../src/actions/modal'

describe('modal actions', () => {
  test('openModal', () => {
    expect(modal.openModal()).toMatchSnapshot()
  })
  test('closeModal', () => {
    expect(modal.closeModal()).toMatchSnapshot()
  })
})
