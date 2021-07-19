import './App.css';
import React, { useState, useEffect } from 'react';
import { AppRouter } from './components/pages/Router.js';
import { authService } from './firebase';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/NewBar.js';

//router 파일 따로 만들기

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [init, setInit] = useState(false);

	useEffect(() => {
		authService.onAuthStateChanged((user) => {
			if (user) {
				setIsLoggedIn(true);
			} else {
				setIsLoggedIn(false);
			}
			setInit(true);
		});
	}, []);

	return (
		<BrowserRouter>
			<Navbar></Navbar>
			{init ? <AppRouter /> : 'Loading...'}
			<Footer></Footer>
		</BrowserRouter>
	);
}

export default App;