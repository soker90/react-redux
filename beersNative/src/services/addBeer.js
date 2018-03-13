import config from '../constants/config'

const apiUrl = config.API_URL

export default function (beer) {
  return fetch(apiUrl + '/beers',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({
      name: beer.name,
      graduation: beer.graduation,
      price: beer.price
    })
  })
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw response
      }
    })
}
