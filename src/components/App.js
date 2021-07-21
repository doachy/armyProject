import './App.css';
import React, { useState, useEffect } from 'react';
import { authService } from 'FBase';
import AppRouter from 'components/Router';

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