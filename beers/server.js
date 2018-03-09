'use strict'

const express = require('express')
const webpack = require('webpack')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const app = express()

app.use(cors())

let bodyParser = require('body-parser')
app.use(bodyParser.json())

let beers = []
app.get('/api/beers', (req, res) => {
  setTimeout(() => res.json({beers}), 2000)
})
app.post('/api/beers', (req, res) => {
  const beer = {id: 'beer_' + beers.length + 1, name: req.body.name, graduation: req.body.graduation, price: req.body.price}
  beers.push(beer)
  setTimeout(() => res.json(beer), 2000)
})
app.delete('/api/beers/:beerId', (req, res) => {
  beers = beers.filter(beer => beer.id !== req.params.beerId)
  setTimeout(() => res.sendStatus(204), 2000)
})

let coins = []
app.get('/api/coins', (req, res) => {
  setTimeout(() => res.json({coins}), 2000)
})
app.post('/api/coins', (req, res) => {
  const coin = {id: 'coin_' + coins.length + 1, name: req.body.name, value: req.body.value}
  coins.push(coin)
  setTimeout(() => res.json(coin), 2000)
})
app.delete('/api/coins/:coinId', (req, res) => {
  coins = coins.filter(coin => coin.id !== req.params.coinId)
  setTimeout(() => res.sendStatus(204), 2000)
})

app.listen(PORT, 'localhost', (err) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(`server initialized at http://localhost:${PORT}`)
})
