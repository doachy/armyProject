import './App.css';
import React, { useState } from 'react';
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

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(authService.correntUser);

	return (
		<BrowserRouter>
			<Navbar></Navbar>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/sign-in" component={SignIn} />
				<Route path="/sign-up" component={SignUp} />
				<Route path="/my-page" component={Mypage} />
				<Route path="/search" component={Search} />
			</Switch>
			<Footer></Footer>
		</BrowserRouter>
	);
}

export default App;