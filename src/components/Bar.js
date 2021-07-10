import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
		display: "flex",
		alignContent: "space-between",
	},
	logo: {
		fontWeight: "bolder",
		padding: 10,
		paddingRight: 50,
	},
	link: {
		color: "white",
		textDecorationLine: 'none',
}
}));

export default function ButtonAppBar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<div className={classes.title}>
						<Typography variant="h6" className={classes.logo}><Link className={classes.link} to={'/main'}>ArmyStudy</Link></Typography>
						<Button color="inherit"><Link className={classes.link} to={'/search'}>탐색</Link></Button>
						<Button color="inherit"><Link className={classes.link} to={'/submit'}>과제제출</Link></Button>
						<Button color="inherit"><Link className={classes.link} to={'/mypage'}>마이페이지</Link></Button>
						<Button color="inherit"><Link className={classes.link} to={'/more'}>더보기</Link></Button>
					</div>
					<Button color="inherit"><Link className={classes.link} to={'/login'}>Login</Link></Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}