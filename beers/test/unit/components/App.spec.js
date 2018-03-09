// App.spec.js
import React from 'react'
import renderer from 'react-test-renderer'

import App from '../../../src/components/App'

describe('App component', () => {
  test('render App component without crashing', () => {
    const modal = {
      open:false
    }

    const tree = renderer.create(
      <App modal={modal}/>
    )
    expect(tree.toJSON()).toMatchSnapshot()
  })

})
