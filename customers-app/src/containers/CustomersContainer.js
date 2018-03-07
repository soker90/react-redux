import React, { Component } from 'react'
import AppFrame from '../components/AppFrame'
import CustomersList from '../components/CustomersList'
import CustomersActions from '../components/CustomersActions'
import { withRouter } from 'react-router-dom'
import { fetchCustomers } from '../actions/fetchCustomers'
import { connect } from 'react-redux'
import { getCustomers } from '../selectors/customers'
import PropTypes from 'prop-types'




class CustomersContainer extends Component {
	componentDidMount() {
		this.props.fetchCustomers()
	}

	handleAddNew = () => {
		this.props.history.push('/customers/new')
	}
	renderBody = customers => (
		<div>
			<CustomersList
				customers={customers}
				urlPath={'customers/'}/>
			<CustomersActions>
				<button onClick={this.handleAddNew}> Nuevo Cliente</button>
			</CustomersActions>
		</div>
	)

	render() {
		return (
			<div>
				<AppFrame header={'Listado de clientes'}
				          body={this.renderBody(this.props.customers)}/>

			</div>
		)
	}
}

CustomersContainer.propTypes = {
	fetchCustomers: PropTypes.func.isRequired,
	customers: PropTypes.array.isRequired,
}

CustomersContainer.defaultProps = {
	customers : [ ]
}

const mapStateToProps = state => ({
	customers: getCustomers(state)
})

export default withRouter(connect(mapStateToProps, { fetchCustomers })(CustomersContainer))