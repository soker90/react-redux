import React, { Component } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'


class BeerForm extends Component {
  constructor(props) {
    super(props)
    this.name = null
    this.graduation = null
    this.price = null
  }

  handleSubmit(e) {
    
    this.props.addBeer(this.name, this.graduation, this.price)
  }

  render() {
    const btnText = this.props.loading ? 'Loading...' : 'Add Beer'

    return (
      <View>
        <View action="#" >
          <View>
            <Text>Name </Text>
            <TextInput type="text" onChangeText={(text) => this.name = text} name="beerName" required="required"/>
          </View>
          <View>
            <Text>Graduation </Text>
            <TextInput type="text" onChangeText={(text) => this.graduation = text} name="beerGraduation" required="required"/>
          </View>
          <View>
            <Text>Price </Text>
            <TextInput type="text" onChangeText={(text) => this.price = text} name="beerPrice" required="required"/>
          </View>
          <TouchableOpacity onPress={(e) => this.handleSubmit(e)} disabled={this.props.loading}>
            <Text>{btnText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

}

export default BeerForm
