import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from 'components/NewBar.js';
import Home from 'components/routes/Homepage/Home';
import Footer from 'components/routes/Footer/Footer';
import SignUp from 'components/routes/SignUp/SignUp';
import SignIn from 'components/routes/SignIn/SignIn';
import Mypage from 'components/routes/Mypage/Mypage';
import Search from 'components/routes/Search/Search';

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/sign-in" component={SignIn} />
				<Route path="/sign-up" component={SignUp} />
				<Route path="/my-page" component={Mypage} />
				<Route path="/search" component={Search} />
			</Switch>
		</BrowserRouter>
	);
};
export default AppRouter;