// BeerList.spec.js
import React from 'react'
import renderer from 'react-test-renderer'

import BeerList from '../../../src/components/BeerList'
import mockData from '../mockData'

describe('BeerList component', () => {
  test('render BeerItem component without crashing', () => {
    const beerList = mockData.beers
    const loading = false
    const onRemove = jest.fn()

    const tree = renderer.create(
      <BeerList beerList={beerList} onRemove={onRemove} loading={loading}/>
    )
    expect(tree.toJSON()).toMatchSnapshot()
  })

  test('render BeerItem component with loading true', () => {
    const beerList = mockData.beers
    const loading = true
    const onRemove = jest.fn()

    const tree = renderer.create(
      <BeerList beerList={beerList} onRemove={onRemove} loading={loading}/>
    )
    expect(tree.toJSON()).toMatchSnapshot()
  })

})
