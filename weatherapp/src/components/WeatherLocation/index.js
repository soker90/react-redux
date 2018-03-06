import React  from 'react'
import PropTypes from 'prop-types'
import Location from './Location'
import WeatherData from './WeatherData/index'
import './style.css'
import CircularProgress from 'material-ui/CircularProgress'


const WeatherLocation = ({onWeatherLocationClick, city, data}) => (
	<div className='weatherLocationCont' onClick={onWeatherLocationClick}>
		<Location city={city}/>
		{data ? <WeatherData data={data}/> : <CircularProgress size={60} thickness={7}/>}
	</div>

)


WeatherLocation.propTypes = {
	city: PropTypes.string,
	onWeatherLocationClick: PropTypes.func,
	data: PropTypes.shape({
		temperature: PropTypes.number.isRequired,
		weatherState: PropTypes.string.isRequired,
		humidity: PropTypes.number.isRequired,
		wind: PropTypes.string.isRequired,
	}),
}

export default WeatherLocation