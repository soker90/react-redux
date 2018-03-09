// navigate_to_screen.js

const map = {
  'Home': '/',
  'About': '/about'
}

export default function () {
  this.Given(/^user is on the "([^"]*)" screen/, (screen) => {
      browser.url(`${map[screen]}`)
    }
  )
}
