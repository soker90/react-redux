// world.js

class World {

  constructor() {
    this.store = {}
  }

  register(key, value) {
    this.store[key] = value
  }

  get(key) {
    return this.store[key]
  }

  clear() {
    this.store = {}
  }

}

export default function() {
  this.world = new World()

  this.register = this.world.register.bind(this.world)
  this.get = this.world.get.bind(this.world)

}