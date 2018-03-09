// config.dev.spec.js
import config from '../../../src/constants/config.dev'

describe('Config DEV constants', function () {
  test('exist', () => {
    expect(config).toMatchSnapshot()
  })
})
