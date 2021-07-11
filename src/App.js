import './App.css';
import React, { Component } from 'react';

import { BrowserRouter , Switch, Route } from 'react-router-dom';
import Navbar from './components/NewBar.js';
import Home from './components/pages/Homepage/Home.js';
import Footer from './components/pages/Footer/Footer.js';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Navbar></Navbar>
				<Switch>
					<Route path='/' exact component={Home} />
				</Switch>
				<Footer></Footer>
			</BrowserRouter>
		);
	}
}

export default App;