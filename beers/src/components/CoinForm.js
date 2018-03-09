import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class CoinForm extends Component {

  handleSubmit(e) {
    e.preventDefault()
    this.props.addCoin(this.refs.name.value, this.refs.value.value)
  }

  render() {
    const btnText = this.props.loading ? 'Loading...' : 'Add Coin'

    return (
      <div>
        <form action="#" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label htmlFor="coinName">Name </label>
            <Field component='input' type="text" ref="name" name="coinName" required="required"/>
          </div>
          <div>
            <label htmlFor="coinValue">Value </label>
            <Field component='input' type="text" ref="value" name="coinValue" required="required"/>
          </div>
          <input type="submit" value={btnText} disabled={this.props.loading}/>
        </form>
      </div>
    )
  }

}

export default reduxForm({
  form: 'coinForm'
})(CoinForm)
