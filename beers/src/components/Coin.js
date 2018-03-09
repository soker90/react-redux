import React, { Component } from "react"
import CoinForm from "./CoinForm"
import CoinList from "./CoinList"
import "./Beer.css"

class Coin extends Component {
  constructor(props) {
    super(props)

    this.onRemove = this.onRemove.bind(this)

  }

  componentDidMount() {
    this.props.fetchCoin()
  }

  onRemove(coinId) {
    let modalData = {
      title: 'Are you sure?',
      body: 'You want to delete the coin with id: ' + coinId,
      callback: this.props.removeCoin,
      extraParams: coinId
    }

    this.props.openModal(modalData)
  }

  render() {
    const {coinList, error, loading} = this.props

    return (
      <div className="beer">

        <CoinForm addCoin={this.props.addCoin} loading={loading}/>
        {error && <p className="beer-error"> An coin error occurred: {error.statusText}: {error.status}</p>}
        {coinList.length
          ? <CoinList coinList={coinList} removeCoin={this.onRemove} loading={loading}/>
          : <p>The coin list is empty</p>}
      </div>
    )
  }

}

export default Coin
