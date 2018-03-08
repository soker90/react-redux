import React, { Component } from 'react'
import AppFrame from '../components/AppFrame'
import CustomersActions from '../components/CustomersActions'
import { withRouter } from 'react-router-dom'

class HomeContainer extends Component {
	handleOnClick = () => {
		this.props.history.push('/customers')

	}

	render() {
		return (
			<div>
				<AppFrame
					header='Inicio'
					body={
						<div>
							<img
								src="https://udemy-images.udemy.com/course/750x422/1374394_f1a8_2.jpg"
								alt=""/> <CustomersActions>
							<button onClick={this.handleOnClick}>Listado de clientes</button>
						</CustomersActions>
						</div>
					}/>
			</div>
		)
	}
}


export default withRouter(HomeContainer)