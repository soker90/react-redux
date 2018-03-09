// world_handlers.js

export default function() {
  this.registerHandler('AfterScenario', () => {
    this.world.clear()
  })
}