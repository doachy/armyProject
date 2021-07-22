import React, { useState, useEffect } from 'react';
import { Button } from './button.js';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

//IsLoggedIn 상태에 따라서 로그인 버튼의 유무를 결정. 해당 클래스 네임을 display: none으로 설정 후 다른 버튼 대체.

function Navbar() {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		showButton();
		window.addEventListener('resize', showButton);
		return window.removeEventListener('resize', showButton);
	}, []);

	return (
		<>
			<IconContext.Provider value={{ color: '#fff' }}>
				<nav className="navbar">
					<div className="navbar-container container">
						<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
							ArmyStudy
						</Link>
						<div className="menu-icon" onClick={handleClick}>
							{click ? <FaTimes /> : <FaBars />}
						</div>
						<ul className={click ? 'nav-menu active' : 'nav-menu'}>
							<li className="nav-item">
								<Link to="/" className="nav-links" onClick={closeMobileMenu}>
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link
									to="/search"
									className="nav-links"
									onClick={closeMobileMenu}
								>
									Search
								</Link>
							</li>
							<li className="nav-item">
								<Link
									to="/my-page"
									className="nav-links"
									onClick={closeMobileMenu}
								>
									MyPage
								</Link>
							</li>
							<li className="nav-btn">
								{button ? (
									<Link to="/sign-in" className="btn-link">
										<Button buttonStyle="btn--outline">SIGN IN</Button>
									</Link>
								) : (
									<Link to="/sign-in" className="btn-link">
										<Button
											buttonStyle="btn--outline"
											buttonSize="btn--mobile"
											onClick={closeMobileMenu}
										>
											SIGN IN
										</Button>
									</Link>
								)}
							</li>
						</ul>
					</div>
				</nav>
			</IconContext.Provider>
		</>
	);
}

export default Navbar;