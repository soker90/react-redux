import React, { Component } from 'react'
import CoinItem from './CoinItem'
import { View } from 'react-native'


class CoinList extends Component {

  render() {
    const {coinList, removeCoin, loading} = this.props

    return (
      <View>
        {coinList.map((coin, idx) => <CoinItem key={idx} coin={coin} loading={loading} onRemove={() => removeCoin(coin.id)} />)}
      </View>
    )
  }
}


export default CoinList
