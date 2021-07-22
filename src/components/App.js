import './App.css';
import React, { useState, useEffect } from 'react';
import { authService } from '../FBase';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './NewBar.js';
import Home from '../routes/Homepage/Home.js';
import Footer from '../routes/Footer/Footer.js';
import SignUp from '../routes/SignUp/SignUp';
import SignIn from '../routes/SignIn/SignIn';
import Mypage from '../routes/Mypage/Mypage';
import Search from '../routes/Search/Search';
import Loading from './Loading';

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
			{init ? <AppRouter /> : <Loading />}
			<Footer></Footer>
		</BrowserRouter>
	);
}

export default App;