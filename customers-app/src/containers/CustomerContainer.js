import React, { Component } from 'react'
import AppFrame from '../components/AppFrame'
import CustomersList from '../components/CustomersList'
import CustomersActions from '../components/CustomersActions'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCustomerByDni, getCustomers } from '../selectors/customers'
import PropTypes from 'prop-types'
import CustomerEdit from '../components/CustomerEdit'
import CustomerData from '../components/CustomerData'


class CustomerContainer extends Component {

//<p>Datos del cliente {this.props.customer.name}</p>
	renderBody = () => (
		<Route path='/customers/:dni/edit' children={
			({match}) => {
				const CustomerControl = match ? CustomerEdit : CustomerData

						return <CustomerControl {...this.props.customer} />

			}
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
	customer: PropTypes.object.isRequired
}

const mapStateToProps = (state, props) => ({
	customer: getCustomerByDni(state, props)
})

export default withRouter(connect(mapStateToProps, null)(CustomerContainer))