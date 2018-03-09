// modal.spec.js
import modalConstants from '../../../../src/constants/actions/modal'

describe('Modal constants', function () {
  test('exist', () => {
    expect(modalConstants).toMatchSnapshot()
  })
})
