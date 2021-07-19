import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Homepage/Home.js';
import Footer from './Footer/Footer.js';
import SignUp from './SignUp/SignUp';
import SignIn from './SignIn/SignIn';
import Mypage from './Mypage/Mypage';
import Search from './Search/Search';

export default function AppRouter() {
	const [isLoggedIn, setIsLoggedIn] = useState();
	return (
		<>
			<Router>
				<Switch>
					{isLoggedIn ? (
						<>
							<Route exact path="/" component={Home}></Route>
						</>
					) : (
						<>
							<Route path="/sign-in" exact component={SignIn} />
							<Route path="/" component={Home} />
							<Route path="/sign-up" component={SignUp} />
							<Route path="/my-page" component={Mypage} />
							<Route path="/search" component={Search} />
						</>
					)}
				</Switch>
			</Router>
		</>
	);
};