import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import AppPage from './containers/AppPage'
import './index.css'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
      <AppPage/>
  </Provider>,
  document.getElementById('root')
)
