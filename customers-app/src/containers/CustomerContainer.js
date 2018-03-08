import React, { Component } from 'react'
import AppFrame from '../components/AppFrame'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCustomerByDni } from '../selectors/customers'
import PropTypes from 'prop-types'
import CustomerEdit from '../components/CustomerEdit'
import CustomerData from '../components/CustomerData'
import { fetchCustomers } from '../actions/fetchCustomers'
import { updateCustomer } from '../actions/updateCustomers'
import { SubmissionError } from 'redux-form'
import { deleteCustomer } from '../actions/deleteCustomer'


class CustomerContainer extends Component {

	componentDidMount() {
		if (!this.props.customer) {
			this.props.fetchCustomers()

		}
	}

	handleSubmit = values => {
		const {id} = values
		return this.props.updateCustomer(id, values).then(r => {
			if (r.error) {
				throw new SubmissionError(r.payload)
			}
		})
	}

	handleOnBack = () => {
		this.props.history.goBack()
	}

	handleSubmitSuccess = () => {
		this.props.history.goBack()
	}

	handleDelete = id => {
		this.props.deleteCustomer(id).then( () => {
			this.props.history.goBack()
		})
	}

	renderCustomerControl = (isEdit, isDelete) => {
		if (this.props.customer) {
			const CustomerControl = isEdit ? CustomerEdit : CustomerData

			return <CustomerControl {...this.props.customer}
			                        onSubmit={this.handleSubmit}
			                        onSubmitSuccess={this.handleSubmitSuccess}
			                        onBack={this.handleOnBack}
			                        isDeleteAllow={!!isDelete}
			                        onDelete={this.handleDelete}
			/>
		}
		return null
	}

	renderBody = () => (
		<Route path='/customers/:dni/edit' children={
			({match: isEdit}) => (
				<Route path='/customers/:dni/del' children= {
					({ match: isDelete } ) => (
					this.renderCustomerControl(isEdit, isDelete))
				}/>)
		}/>
	)


	render() {
		return (
			<div>
				<AppFrame header={`Cliente ${this.props.dni}`}
				          body={this.renderBody()}/>

			</div>
		)
	}
}

CustomerContainer.propTypes = {
	dni: PropTypes.string.isRequired,
	customer: PropTypes.object,
	fetchCustomers: PropTypes.func.isRequired,
	updateCustomer: PropTypes.func.isRequired,
}

const mapStateToProps = (state, props) => ({
	customer: getCustomerByDni(state, props)
})

export default withRouter(connect(mapStateToProps, {
	fetchCustomers,
	updateCustomer,
	deleteCustomer
})(CustomerContainer))