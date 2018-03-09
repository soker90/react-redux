// about.js
import { expect } from 'chai'

export default function () {
  this.When(/^the title is "([^"]*)"$/, (text) => {
    let value = browser.getText('h4')
    expect(value).to.equal(text)
  })

  this.Then(/^the two first worlds is "([^"]*)"$/, (text) => {
    let value = browser.getText('p')
    let matches = value.match(/([\w+]+)/g)
    expect(`${matches[0]} ${matches[1]}`).to.equal(text)
  })
}
