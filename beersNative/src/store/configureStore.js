let configureStore = null

if (process.env.NODE_ENV === 'production') {
  configureStore = require('./configureStore.pro').default
} else {
  configureStore = require('./configureStore.dev').default
}

export default configureStore
