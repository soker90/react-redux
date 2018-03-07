import React, { Component } from 'react'
import AppFrame from '../components/AppFrame'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import CustomerEdit from '../components/CustomerEdit'


class NewCustomerContainer extends Component {
	handleSubmit = () => {

	}

	handleOnSubmitSuccess = () => {

	}

	handleOnBack = () => {
		this.props.history.goBack()
	}

	renderBody = () => {
		const newCustomer = {
			'id': '',
			'dni': '',
			'name': '',
			'age': 0
		}

		return <CustomerEdit {...newCustomer}
			onSubmit={this.handleSubmit}
			obSubmitSuccess={this.handleOnSubmitSuccess}
			onBack={this.handleOnBack}/>
	}

	render() {
		return (
			<div>
				<AppFrame header={`Creación de nuevo cliente`}
				          body={this.renderBody()}/>
			</div>
		)
	}
}

NewCustomerContainer.propTypes = {


}


export default withRouter(connect(null, null)(NewCustomerContainer))