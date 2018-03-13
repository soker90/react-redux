import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

class CoinForm extends Component {

	handleSubmit(e) {
		e.preventDefault()
		console.log(this)
		this.props.addCoin(this.refs.name.value, this.refs.value.value)
	}

	render() {
		const btnText = this.props.loading ? 'Loading...' : 'Add Coin'

		return (
			<View>
				<View action="#" >
					<View>
						<Text htmlFor="coinName">Name </Text>
						<TextInput component='input' type="text" ref="name" name="coinName" required="required"/>
					</View>
					<View>
						<Text htmlFor="coinValue">Value </Text>
						<TextInput component='input' type="text" ref="value" name="coinValue" required="required"/>
					</View>
					<TouchableOpacity onPress={(e) => this.handleSubmit(e)} disabled={this.props.loading}><Text>{btnText}</Text></TouchableOpacity>
				</View>
			</View>
		)
	}

}

export default reduxForm({
	form: 'coinForm'
})(CoinForm)
