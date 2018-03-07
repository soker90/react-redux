import { INSERT_COSTUMER } from '../constants'
import { createAction } from 'redux-actions'
import { apiPost } from '../api'
import { urlCustomers } from '../api/urls'


export const insertCustomer = createAction(INSERT_COSTUMER,
	customer => apiPost(urlCustomers, customer)())