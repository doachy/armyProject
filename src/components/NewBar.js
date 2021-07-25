import React, { useState, useEffect } from 'react';
import { Button } from 'components/button.js';
import { Link } from 'react-router-dom';
import 'components/Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import { authService } from '../FBase';


//IsLoggedIn 상태에 따라서 로그인 버튼의 유무를 결정. 해당 클래스 네임을 display: none으로 설정 후 다른 버튼 대

function AccountMenu() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const onLogOutClick = () => {
		setAnchorEl(null);
		authService.signOut();
	};

	return (
		<div>
			<Avatar aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} src="../../public/profile.png" />
			<Menu
				id="simple-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<MenuItem onClick={handleClose}>Profile</MenuItem>
				<MenuItem onClick={handleClose}>My account</MenuItem>
				<MenuItem onClick={onLogOutClick}>Logout</MenuItem>
			</Menu>
		</div>
	);
}

function Navbar({ isLoggedIn }) {
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
								{isLoggedIn ? (
									<Link
										to="/search"
										className="nav-links"
										onClick={closeMobileMenu}
									>
										Search
									</Link>
								) : (
									<Link
										to="/sign-in"
										className="nav-links"
										onClick={closeMobileMenu}
									>
										Search
									</Link>
								)}
							</li>
							<li className="nav-item">
								{isLoggedIn ? (
									<Link
										to="/my-page"
										className="nav-links"
										onClick={closeMobileMenu}
									>
										MyPage
									</Link>
								) : (
									<Link
										to="/sign-in"
										className="nav-links"
										onClick={closeMobileMenu}
									>
										MyPage
									</Link>
								)}
							</li>
							{isLoggedIn ? (
								<AccountMenu />
							) : (
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
							)}
						</ul>
					</div>
				</nav>
			</IconContext.Provider>
		</>
	);
}

export default Navbar;