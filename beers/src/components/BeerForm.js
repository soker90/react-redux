import React, { Component } from 'react'

class BeerForm extends Component {

  handleSubmit (e) {
    e.preventDefault()
    this.props.addBeer(this.refs.name.value, this.refs.graduation.value)
    console.log(this.refs.name.value)
  }

  render () {
    const btnText = this.props.loading ? 'Loading...' : 'Add Beer'

    return (
      <div>
        <form action="#" onSubmit={(e) => this.handleSubmit(e)}>
          <input type="text" ref="name" name="beerName" required="required" />
          <input type="text" ref="graduation" name="beerGraduation" required="required" />
          <input type="submit" value={btnText} disabled={this.props.loading} />
        </form>
      </div>
    )
  }

}

export default BeerForm
