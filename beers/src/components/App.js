import React, { Component } from 'react'
import { BrowserRouter as Router, Route,Link } from 'react-router-dom'
import BeerPage from '../containers/BeerPage'
import ModalPage from '../containers/ModalPage'
import About from '../components/About'
import logo from '../logo.svg'
import './App.css'
import CoinPage from '../containers/CoinPage'

class App extends Component {
	openModal() {
		let modalData = {
			title: 'This is the modal title!',
			body: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.'
		}
		this.props.modalAction.openModal(modalData)
	}

  render() {
    return (
    <Router>
      <div className="app">
        {this.props.modal.open && <ModalPage />}
        <div className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h2>Welcome to BeersApp</h2>
        </div>
        <nav>
          <ul>
            <li><Link to={'/beers'}>Beers</Link></li>
            <li><Link to={'/coins'}>Coins</Link></li>
            <li><Link to={'/about'}>About</Link></li>
          </ul>
        </nav>
        <button onClick={() => this.openModal()}>Open Modal</button>

        {
          (() => {
            if (process.env.NODE_ENV === 'development') {
              const DevTools = require('../containers/DevTools').default
              return <DevTools />
            }
          })()
        }

        <Route path="/about" component={About}/>
        <Route path="/beers" component={BeerPage}/>
        <Route path="/coins" component={CoinPage}/>
      </div>
    </Router>
    )
  }
}

export default App
