import React, { Component } from "react"
import BeerForm from "./BeerForm"
import BeerList from "./BeerList"
import { Text, View } from 'react-native'

class Beer extends Component {
  constructor(props) {
    super(props)

    this.onRemove = this.onRemove.bind(this)

  }

  componentDidMount() {
    this.props.fetchBeer()
  }

  onRemove(beerId) {
	  this.props.removeBeer(beerId)
  }

  render() {
    const {beerList, error, loading} = this.props
    return (
      <View className="beer">

        <BeerForm addBeer={this.props.addBeer} loading={loading}/>
        {error && <Text className="beer-error"> An beer error occurred: {error.statusText}: {error.status}</Text>}
        {beerList.length
          ? <BeerList beerList={beerList} removeBeer={this.onRemove} loading={loading}/>
          : <Text>The beer list is empty</Text>}
      </View>
    )
  }

}

export default Beer
