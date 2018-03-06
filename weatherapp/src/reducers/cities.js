import { GET_WEATHER_CITY, SET_FORECAST_DATA, SET_WEATHER_CITY } from '../actions'
import { createSelector } from 'reselect'
import toPairs from 'lodash.topairs'

export const cities = (state = {}, action) => {
	switch (action.type) {
		case SET_FORECAST_DATA:
			const {city, forecastData} = action.payload
			return {...state, [city]: {...state[city], forecastData, forecastDataDate: new Date()}}
		case GET_WEATHER_CITY: {
			const city = action.payload
			return {...state, [city]: {...state[city], weather: null}}
		}

		case SET_WEATHER_CITY: {
			const {city, weather} = action.payload
			return {...state, [city]: {...state[city], weather}}
		}
		default:
			return state
	}

}

export const getForecastDataFromCities = createSelector((state, city) => state[city] && state[city].forecastData, forecastData => forecastData)

const fromObjToArray = cities => (toPairs(cities).map(([key,value]) => ({ key, name: key, data: value.weather})))
export const getWeatherCities =
	createSelector(state => fromObjToArray(state), cities => cities)