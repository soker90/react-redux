import React, { Component } from 'react'

class CoinItem extends Component {
  render() {
    const {coin, onRemove} = this.props
    const btnText = this.props.loading ? 'Loading...' : 'Remove Coin'

    return (
      <div>
        <p>
          <b>{coin.name}</b> ({coin.value}€) <i>{coin.id}</i>
        </p>
        <div>
          <button onClick={onRemove} disabled={this.props.loading}>{btnText}</button>
        </div>
      </div>
    )
  }
}


export default CoinItem
