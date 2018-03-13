import React, { Component } from 'react'

import BeerItem from './BeerItem'
import { View } from 'react-native'

class BeerList extends Component {

  render() {
    const {beerList, removeBeer, loading} = this.props

    return (
      <View>
        {beerList.map((beer, idx) => <BeerItem key={idx} beer={beer} loading={loading} onRemove={() => removeBeer(beer.id)} />)}
      </View>
    )
  }
}


export default BeerList
