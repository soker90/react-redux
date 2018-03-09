import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'


class BeerForm extends Component {

  handleSubmit(e) {
    e.preventDefault()
    this.props.addBeer(this.refs.name.value, this.refs.graduation.value, this.refs.price.value)
    console.log(this.refs.price.value)
  }

  render() {
    const btnText = this.props.loading ? 'Loading...' : 'Add Beer'

    return (
      <div>
        <form action="#" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label htmlFor="beerName">Name </label>
            <Field component='input' type="text" ref="name" name="beerName" required="required"/>
          </div>
          <div>
            <label htmlFor="beerGraduation">Graduation </label>
            <Field component='input' type="text" ref="graduation" name="beerGraduation" required="required"/>
          </div>
          <div>
            <label htmlFor="beerPrice">Price </label>
            <Field component='input' type="text" ref="price" name="beerPrice" required="required"/>
          </div>
          <input type="submit" value={btnText} disabled={this.props.loading}/>
        </form>
      </div>
    )
  }

}

export default reduxForm({
  form: 'beerForm'
})(BeerForm)
