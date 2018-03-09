let config = null

if (process.env.NODE_ENV === 'development') {
  config = require('./config.dev').default
} else {
  config = require('./config.pro').default
}

export default config
