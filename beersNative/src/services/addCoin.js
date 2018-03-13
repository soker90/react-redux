import config from '../constants/config'

const apiUrl = config.API_URL

export default function (coin) {
  return fetch(apiUrl + '/coins',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({
      name: coin.name,
      value: coin.value
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
