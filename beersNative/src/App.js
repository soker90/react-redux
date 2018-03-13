import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View
} from 'react-native'

import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import CoinPage from './containers/CoinPage'
import About from './components/About'
import BeerPage from './containers/BeerPage'
import { MemoryRouter as Router, Route, Link } from 'react-router-native'

const store = configureStore()

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<View style={styles.container}>
					<Router>
						<View className="app">
							<View className="app-header">
								<Link to={'/beers'}><Text>Beers</Text></Link>
								<Link to={'/coins'}><Text>Coins</Text></Link>
								<Link to={'/about'}><Text>About</Text></Link>
							</View>


							<Route path="/about" component={About}/>
							<Route path="/beers" component={BeerPage}/>
							<Route path="/coins" component={CoinPage}/>
					</View>
				</Router>
			</View>
		</Provider>


			/*<View style={styles.container}>
				/*<Router>
					<View className="app">
						<View className="app-header">
							<Text>Welcome to BeersApp</Text>
						</View>
						/*<nav>
							<ul>
								<li><Link to={'/beers'}>Beers</Link></li>
								<li><Link to={'/coins'}>Coins</Link></li>
								<li><Link to={'/about'}>About</Link></li>
							</ul>
						</nav>
						<button onClick={() => this.openModal()}>Open Modal</button>



						<Route path="/about" component={About}/>
						<Route path="/beers" component={BeerPage}/>
						<Route path="/coins" component={CoinPage}/>*/
						/*</View>
					</Router>
				</View>*/
			//</Provider>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});
