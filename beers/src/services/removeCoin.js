import config from '../constants/config'

const apiUrl = config.API_URL

export default function (coin) {
  return fetch(apiUrl + '/coins/' + coin.coinId, {
    method: 'DELETE'
  })
    .then(response => {
      if (!response.ok) {
        throw response
      }
    })
}
