import './App.css';
import React, { useState, useEffect } from 'react';
import { authService } from './firebase';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/NewBar.js';
import Home from './components/pages/Homepage/Home.js';
import Footer from './components/pages/Footer/Footer.js';
import SignUp from './components/pages/SignUp/SignUp';
import SignIn from './components/pages/SignIn/SignIn';
import Mypage from './components/pages/Mypage/Mypage';
import Search from './components/pages/Search/Search';

//router 파일 따로 만들기

function AppRouter() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	return (
		<>
				<Switch>
					{isLoggedIn ? (
						<>
							<Route exact path="/" component={Home}></Route>
						</>
					) : (
						<>
							<Route path="/" exact component={Home} />
							<Route path="/sign-in" component={SignIn} />
							<Route path="/sign-up" component={SignUp} />
							<Route path="/my-page" component={Mypage} />
							<Route path="/search" component={Search} />
						</>
					)}
				</Switch>
		</>
	);
};

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