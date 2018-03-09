import React, { Component } from 'react'

import BeerItem from './BeerItem'

class BeerList extends Component {

  render() {
    const {beerList, removeBeer, loading} = this.props

    return (
      <div>
        {beerList.map((beer, idx) => <BeerItem key={idx} beer={beer} loading={loading} onRemove={() => removeBeer(beer.id)} />)}
      </div>
    )
  }
}


export default BeerList
