import './App.css';
import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';
import ButtonAppBar from './components/Bar.js';

class App extends Component {
	render() {
		return (
			<div className="App">
				<ButtonAppBar></ButtonAppBar>
				<Switch>
					<Route path="/" />
				</Switch>
			</div>
		);
	}
}

export default App;