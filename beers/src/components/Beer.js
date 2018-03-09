import React, { Component } from "react"
import BeerForm from "./BeerForm"
import BeerList from "./BeerList"
import "./Beer.css"

class Beer extends Component {
  constructor(props) {
    super(props)

    this.onRemove = this.onRemove.bind(this)

  }

  componentDidMount() {
    this.props.fetchBeer()
  }

  onRemove(beerId) {
    let modalData = {
      title: 'Are you sure?',
      body: 'You want to delete the beer with id: ' + beerId,
      callback: this.props.removeBeer,
      extraParams: beerId
    }

    this.props.openModal(modalData)
  }

  render() {
    const {beerList, error, loading} = this.props

    return (
      <div className="beer">

        <BeerForm addBeer={this.props.addBeer} loading={loading}/>
        {error && <p className="beer-error"> An beer error occurred: {error.statusText}: {error.status}</p>}
        {beerList.length
          ? <BeerList beerList={beerList} removeBeer={this.onRemove} loading={loading}/>
          : <p>The beer list is empty</p>}
      </div>
    )
  }

}

export default Beer
