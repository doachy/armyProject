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
// 로그인/비로그인 케이스별 구분하기
// case(1)  router에 로그인,회원가입 포함(버튼 유효) isloggedin 상태변수로 제출,마이페이지 클릭 시 로그인 페이지로 이동
// case(2) firebase로 auth 유효성 확인 (Loading) 후에 라우터에 로그인, 회원가입 페이지 버튼 제거 -> 그 자리에 사용자 프로필 생성.

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