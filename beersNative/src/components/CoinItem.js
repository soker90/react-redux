import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

class CoinItem extends Component {
  render() {
    const {coin, onRemove} = this.props
    const btnText = this.props.loading ? 'Loading...' : 'Remove Coin'

    return (
      <View>
        <Text>
          {coin.name} ({coin.value}€) {coin.id}
        </Text>
        <View>
          <TouchableOpacity onPress={onRemove} disabled={this.props.loading}><Text>{btnText}</Text></TouchableOpacity>
        </View>
      </View>
    )
  }
}


export default CoinItem
