import React from 'react'
import WeatherIcons from 'react-weathericons'
import PropTypes from 'prop-types'
import './style.css'


const WeatherTemperature = ({temperature, weatherState}) => (
	<div className='weatherTemperatureCont'>
		<WeatherIcons className='wicon' name={weatherState} size='3x'/>
		<span className='temperature'>
			{`${temperature}`}
		</span>
		<span className='temperaturetype'>ºC</span>
	</div>
)

WeatherTemperature.propTypes = {
	temperature: PropTypes.number.isRequired,
	weatherState: PropTypes.string.isRequired,
}

export default WeatherTemperature