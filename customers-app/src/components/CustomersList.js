import React from 'react'
import PropTypes from 'prop-types'
import CustomerListItem from './CustomerListItem'

const CustomersList = ({customers, urlPath}) => {
	return (
		<div className='customers-list'>
			{
				customers.map(c =>
					<CustomerListItem
						key={c.dni}
						dni={c.dni}
						name={c.name}
						editAction={'Editar'}
						delAction={'Eliminar'}
						urlPath={urlPath}/>
				)
			}
		</div>
	)
}

CustomersList.prototype = {
	customers: PropTypes.array.isRequired,
	urlPath: PropTypes.string.isRequired
}

export default CustomersList