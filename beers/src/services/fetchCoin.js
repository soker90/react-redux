import config from '../constants/config'

const apiUrl = config.API_URL

export default function () {
  return fetch(apiUrl + '/coins')
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw response
      }
    })
}
