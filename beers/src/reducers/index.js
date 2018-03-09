import { combineReducers } from 'redux'
import beers from './beer'
import modal from './modal'
import coins from './coin'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  beers,
  modal,
  coins,
  form: formReducer
})

export default rootReducer
