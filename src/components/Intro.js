import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	title: {
		display: 'flex',
		padding: 50,
		fontWeight: 'bolder',
		fontSize: 46,
		justifyContent: 'center',
	},
	contents: {
		display: 'flex',
		justifyContent: 'center',
		padding: 10,
	},
}));

export default function Intro() {
	const classes = useStyles();
	return (
		<div>
			<div className={classes.title}>Introduce the our Service</div>
			<div className={classes.contents}>we help people study well</div>
			<div className={classes.contents}>
				our team is preparing the small project that korean soldiers can do Self-development
				in ROKA
			</div>
			<div className={classes.contents}>
				If you want more informations. Click this Button!
			</div>
			<div className={classes.contents}>
				<Button variant="outlined" color="secondary">
					More Informations
				</Button>
			</div>
		</div>
	);
}