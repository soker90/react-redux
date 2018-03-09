// Beer.spec.js
import React from 'react'
import renderer from 'react-test-renderer'

import Beer from '../../../src/components/Beer'
import mockData from '../mockData'

describe('Beer component', () => {
  test('render Beer component without crashing', () => {
    const beerList = []
    const loading = false
    const error = null
    const fetchBeer = jest.fn()

    const tree = renderer.create(
      <Beer beerList={beerList} loading={loading} error={error} fetchBeer={fetchBeer}/>
    )
    expect(tree.toJSON()).toMatchSnapshot()
  })

  test('render Beer component with beers', () => {
    const beerList = mockData.beers
    const loading = false
    const error = null
    const fetchBeer = jest.fn()

    const tree = renderer.create(
      <Beer beerList={beerList} loading={loading} error={error} fetchBeer={fetchBeer}/>
    )
    expect(tree.toJSON()).toMatchSnapshot()
  })

  test('render Beer component with loading true', () => {
    const beerList = []
    const loading = true
    const error = null
    const fetchBeer = jest.fn()

    const tree = renderer.create(
      <Beer beerList={beerList} loading={loading} error={error} fetchBeer={fetchBeer}/>
    )
    expect(tree.toJSON()).toMatchSnapshot()
  })

  test('render Beer component with error', () => {
    const beerList = []
    const loading = false
    const error = {
      status: 401,
      statusText: 'Unauthorized'
    }
    const fetchBeer = jest.fn()

    const tree = renderer.create(
      <Beer beerList={beerList} loading={loading} error={error} fetchBeer={fetchBeer}/>
    )
    expect(tree.toJSON()).toMatchSnapshot()
  })

})
