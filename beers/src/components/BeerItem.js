import React, { Component } from 'react'

class BeerItem extends Component {
  render() {
    const {beer, onRemove} = this.props
    const btnText = this.props.loading ? 'Loading...' : 'Remove Beer'

    return (
      <div>
        <p>
          <b>{beer.name}</b> ({beer.graduation}%) <i>{beer.id}</i>
        </p>
        <div>
          <button onClick={onRemove} disabled={this.props.loading}>{btnText}</button>
        </div>
      </div>
    )
  }
}


export default BeerItem
