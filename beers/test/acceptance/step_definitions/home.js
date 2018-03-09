// home.js
import { expect } from 'chai'

export default function () {
  this.Then(/^the header title is "([^"]*)"$/, (text) => {
    let value = browser.getText('h2')
    expect(value).to.equal(text)
  })
}
