import React from 'react'
import ProppTypes from 'prop-types'
import './style.css'


const Location = ({city}) => {
	return (
		<div className='LocationCont'>
			<h1>{city} </h1>
		</div>
	)
}

Location.prototype = {
	Location: ProppTypes.string.isRequired
}

export default Location