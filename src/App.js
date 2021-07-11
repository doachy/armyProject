import './App.css';
import React, { Component } from 'react';

import { BrowserRouter , Switch, Route } from 'react-router-dom';
import Navbar from './components/NewBar.js';
import Home from './components/pages/Homepage/Home.js';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Navbar></Navbar>
				<Switch>
					<Route path='/' exact component={Home} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;