// server_handlers.js

import { fakeServer } from './server'

process.setMaxListeners(0)

export default function() {
  this.registerHandler('BeforeFeatures', () => {
    this.world.server = fakeServer()
  })

  this.registerHandler('AfterFeatures', () => {
    this.world.server.stop()
  })

  this.registerHandler('BeforeScenario', (feature, callback) => {
    this.world.server.start(callback)
  })

  this.registerHandler('AfterScenario', () => {
    this.world.server.reset()
  })

}
