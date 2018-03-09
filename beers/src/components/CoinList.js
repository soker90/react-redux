import React, { Component } from 'react'
import CoinItem from './CoinItem'


class CoinList extends Component {

  render() {
    const {coinList, removeCoin, loading} = this.props

    return (
      <div>
        {coinList.map((coin, idx) => <CoinItem key={idx} coin={coin} loading={loading} onRemove={() => removeCoin(coin.id)} />)}
      </div>
    )
  }
}


export default CoinList
