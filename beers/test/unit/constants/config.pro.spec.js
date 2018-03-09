// config.pro.spec.js
import config from '../../../src/constants/config.pro'

describe('Config PRO constants', function () {
  test('exist', () => {
    expect(config).toMatchSnapshot()
  })
})
