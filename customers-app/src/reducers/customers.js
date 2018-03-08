import { handleActions } from 'redux-actions'
import { DELETE_COSTUMER, FETCH_CUSTOMERS, INSERT_COSTUMER, UPDATE_CUSTOMER } from '../constants'

export const customers = handleActions({
	[FETCH_CUSTOMERS]: (state, action) => [...action.payload],
	[INSERT_COSTUMER]: (state, action) => [...state, action.payload],
	[UPDATE_CUSTOMER]: (state, action) => {
		const customerPayload = action.payload
		const {id} = customerPayload
		const customers = state
		const initialValue = []

		const newCustomers = customers.reduce((acc, customer) => {
			if (customer.id === id) {
				return [...acc, customerPayload]
			} else {
				return [...acc, customer]
			}
		}, initialValue)

		return newCustomers
	},
	[DELETE_COSTUMER]: (state, action) => [...state.filter(c => c.id !== action.payload)]
}, [])

