import config from '../constants/config'

const apiUrl = config.API_URL

export default function (beer) {
  return fetch(apiUrl + '/beers/' + beer.beerId, {
    method: 'DELETE'
  })
    .then(response => {
      if (!response.ok) {
        throw response
      }
    })
}
