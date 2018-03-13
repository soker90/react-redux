import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

class BeerItem extends Component {
  render() {
    const {beer, onRemove} = this.props
    const btnText = this.props.loading ? 'Loading...' : 'Remove Beer'


    return (
      <View>
        <Text>
          {beer.name} ({beer.graduation}%) - {beer.price}€ - {beer.id}
        </Text>
        <View>
          <TouchableOpacity onPress={onRemove} disabled={this.props.loading}><Text>{btnText}</Text></TouchableOpacity>
        </View>
      </View>
    )
  }
}



export default BeerItem
