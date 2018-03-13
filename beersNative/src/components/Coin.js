import React, { Component } from "react"
import CoinForm from "./CoinForm"
import CoinList from "./CoinList"
import { Text, View } from 'react-native'

class Coin extends Component {
  constructor(props) {
    super(props)

    this.onRemove = this.onRemove.bind(this)

  }

  componentDidMount() {
    this.props.fetchCoin()
  }

  onRemove(coinId) {
	  this.props.removeCoin(coinId)
  }

  render() {
    const {coinList, error, loading} = this.props
  console.log(coinList)
    return (
      <View className="beer">

        <CoinForm addCoin={this.props.addCoin} loading={loading}/>
        {error && <Text className="beer-error"> An coin error occurred: {error.statusText}: {error.status}</Text>}
        {coinList.length
          ? <CoinList coinList={coinList} removeCoin={this.onRemove} loading={loading}/>
          : <Text>The coin list is empty</Text>}
      </View>
    )
  }

}

export default Coin
