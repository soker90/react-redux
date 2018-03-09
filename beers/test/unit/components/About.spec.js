// About.spec.js
import React from 'react'
import renderer from 'react-test-renderer'

import About from '../../../src/components/About'

describe('About component', () => {
  test('render About component without crashing', () => {

    const tree = renderer.create(
      <About />
    )
    expect(tree.toJSON()).toMatchSnapshot()
  })

})
