import React from 'react'
import ProppTypes from 'prop-types'
import './style.css'

const WeatherExtraInfo = ({humidity, wind}) => (
	<div className='weatherExtraInfoCont'>
		<span className='extraInfoText'>{`Humedad: ${humidity} %`}</span>
		<span className='extraInfoText'>{`Vientos: ${wind}`}</span>
	</div>
)

WeatherExtraInfo.prototype = {
	humidity: ProppTypes.number.isRequired,
	wind: ProppTypes.string.isRequired,
}

export default WeatherExtraInfo