import './App.css';
import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';
import ButtonAppBar from './components/Bar.js';
import Navbar from './components/NewBar.js';

class App extends Component {
	render() {
		return (
			<div className="App">
				<ButtonAppBar></ButtonAppBar>
				<Navbar></Navbar>
				<Switch>
					<Route path="/" />
				</Switch>
			</div>
		);
	}
}

export default App;