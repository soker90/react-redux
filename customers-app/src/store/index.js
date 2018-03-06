import { applyMiddleware, compose, createStore } from 'redux'
import reducers from './../reducers'
import promiseMiddleware from 'redux-promise'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(promiseMiddleware)))

