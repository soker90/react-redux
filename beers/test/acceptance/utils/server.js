// server.js
import express from 'express'
import cors from 'cors'
import debug from 'debug'

const PORT = 3001

const fakeServer = () => {
  let server = null
  let fakeResponses = {}
  const app = express()

  return {
    start: (callback) => {
      if (server) {
        callback()
        return
      }
      app.options('*', cors())
      app.use(cors())
      app.use((req, res) => {
        const responseId = `${req.method}_${req.url.replace(/\?(.+)/, '')}`
        if (fakeResponses.hasOwnProperty(responseId)) {
          debug(`[mockServer] received request: ${req.method} ${req.url}`)
          fakeResponses[responseId](req, res)
          return
        }
        console.log('[mockServer] No response found, use:')
        console.log(`
          this.world.server.fakeResponse({
            method: '${req.method}',
            path: '${req.url.replace(/\?(.+)/, '')}',
            middleware: (req, res) => {
              res.send(response)
            }
          })
        `)
        res.sendStatus(500)
      })

      server = app.listen(PORT, 'localhost', callback)
    },

    reset: () => {
      fakeResponses = {}
    },

    stop: () => {
      server.close()
    },
    fakeResponse: ({method, path, middleware}) => {
      debug(`Registering ${method.toUpperCase()} ${path}`)
      fakeResponses[`${method.toUpperCase()}_${path}`] = middleware
    },
    fakeFetchBeerResponse() {
      this.fakeResponse({
        method: 'get',
        path: '/api/beers',
        middleware: (req, res) => {
          const response = require('./responses/beers.json')
          res.send(response)
        }
      })
    },
    fakeAddBeerResponse() {
      this.fakeResponse({
        method: 'post',
        path: '/api/beers',
        middleware: (req, res) => {
          const response = require('./responses/add_beer.json')
          res.send(response)
        }
      })
    },
    fakeRemoveBeerResponse(beerId) {
      this.fakeResponse({
        method: 'delete',
        path: `/api/beers/${beerId}`,
        middleware: (req, res) => {
          res.sendStatus(204)
        }
      })
    }
  }
}

export {
  fakeServer
}
