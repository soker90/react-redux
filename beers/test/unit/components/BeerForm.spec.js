// BeerForm.spec.js
import React from 'react'
import renderer from 'react-test-renderer'

import BeerForm from '../../../src/components/BeerForm'

describe('BeerForm component', () => {
  test('render BeerForm component without crashing', () => {
    const loading = false

    const tree = renderer.create(
      <BeerForm loading={loading}/>
    )
    expect(tree.toJSON()).toMatchSnapshot()
  })

  test('render BeerForm component with loading true', () => {
    const loading = true

    const tree = renderer.create(
      <BeerForm loading={loading}/>
    )
    expect(tree.toJSON()).toMatchSnapshot()
  })

})
