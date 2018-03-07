import { handleActions } from 'redux-actions'
import { FETCH_CUSTOMERS, INSERT_COSTUMER } from '../constants'

export const customers = handleActions({
	[FETCH_CUSTOMERS]: (state, action) => [...action.payload],
	[INSERT_COSTUMER]: (state, action) => [...state, action.payload],
}, [])

