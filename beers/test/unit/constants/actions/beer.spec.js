// beer.spec.js
import beersConstants from '../../../../src/constants/actions/beer'

describe('Beer constants', function () {
  test('exist', () => {
    expect(beersConstants).toMatchSnapshot()
  })
})
