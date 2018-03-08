import { DELETE_COSTUMER } from '../constants'
import { createAction } from 'redux-actions'
import { apiDelete } from '../api'
import { urlCustomers } from '../api/urls'


export const deleteCustomer = createAction(DELETE_COSTUMER,
	id => apiDelete(urlCustomers, id)())