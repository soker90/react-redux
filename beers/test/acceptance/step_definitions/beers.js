// beers.js
import { expect } from 'chai'
import { fillInput, clickOnΒutton } from '../pages/beer'


export default function () {
  this.When(/^user is on the Beers screen$/, () => {
    this.world.server.fakeFetchBeerResponse()
    browser.url('/beers')
  })

  this.Then(/^the first beer text is "([^"]*)"$/, (beer) => {
    let beers = browser.getText('p')

    expect(beers[0]).to.equal(beer)
  })

  this.When(/^the user add a new name "([^"]*)" and graduation "([^"]*)"$/, (beer, graduation) => {
    fillInput('[name=beerName]', beer)
    fillInput('[name=beerGraduation]', graduation)
  })


  this.When(/^the user send the form$/, () => {
    this.world.server.fakeAddBeerResponse()
    clickOnΒutton('[type=submit]')
  })

  this.When(/^the user press remove button from the first beer$/, () => {
    this.world.server.fakeRemoveBeerResponse('beer_01')
    clickOnΒutton('button=Remove Beer')
  })

  this.When(/^accept modal dialog with question message$/, () => {
    clickOnΒutton('button=Accept')
  })

  this.Then(/^the first beer of the list is "([^"]*)"$/, (beer) => {
    let beers = browser.getText('p')

    expect(beers[0]).to.equal(beer)
  })
}
