import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import { authService, firebaseInstance } from '../../FBase';
import { IoLogoGoogle } from 'react-icons/io5';

//login form options done

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		marginBottom: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	iconsGoogle: {
		marginRight: theme.spacing(1),
	},
}));

export default function SignIn() {
	const classes = useStyles();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [newAcount, setNewAcount] = useState(false);
	const [error, setError] = useState('');

	const onSocialClick = async (event) => {
		const {
			target: { name },
		} = event;

		let provider;

		provider = new firebaseInstance.auth.GoogleAuthProvider();
		const data = await authService.signInWithPopup(provider);
		console.log(data);
	};

	const onChange = (event) => {
		const {
			target: { name, value },
		} = event;
		if (name === 'email') {
			setEmail(value);
		} else if (name === 'password') {
			setPassword(value);
		}
	};

	const onSubmit = async (event) => {
		event.preventDefault();
		try {
			if (newAcount) {
				await authService.createUserWithEmailAndPassword(email, password);
			} else {
				await authService.signInWithEmailAndPassword(email, password);
			}
		} catch (error) {
			console.log(error);
			setError(error.message);
		}
	};

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}></Avatar>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
				<form className={classes.form} noValidate onSubmit={onSubmit}>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
						value={email}
						onChange={onChange}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						value={password}
						onChange={onChange}
						autoComplete="current-password"
					/>
					<FormControlLabel
						control={<Checkbox value="remember" color="primary" />}
						label="Remember me"
					/>
					{error}
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Sign In
					</Button>
					<Grid container>
						<Grid item xs>
							<Link to="/sign-up" variant="body2">
								Forgot password?
							</Link>
						</Grid>
						<Grid item>
							<Link to="/sign-up" variant="body2">
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
					<Button
						onClick={onSocialClick}
						type="button"
						fullWidth
						variant="outlined"
						color="secondary"
						className={classes.submit}
					>
						<IoLogoGoogle className={classes.iconsGoogle} />
						Login with Google account
					</Button>
				</form>
			</div>
		</Container>
	);
}