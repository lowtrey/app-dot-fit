import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
});

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			age: ''
		};
		this.handleClickOpen = this.handleClickOpen.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}
	handleChange = name => event => {
		this.setState({ [name]: Number(event.target.value) });
	};
	handleClickOpen() {
		this.setState({ open: true });
	};
	handleClose() {
		this.setState({ open: false });
	};

	render() {
		const { classes } = this.props;
		return (
			<div className='Header'>
				<div>
					<h1>App.Fit</h1>
					<h5>&#123;code - move - repeat&#125;</h5>
				</div>
				<div>
					<Button onClick={this.handleClickOpen}>New Session</Button>
					<Dialog disableBackdropClick disableEscapeKeyDown open={this.state.open} onClose={this.handleClose}>
						<DialogTitle>Log Your Workout</DialogTitle>
						<DialogContent>
							<form className={classes.container}>
								<FormControl className={classes.formControl}>
									<InputLabel htmlFor="age-native-simple">Exercise</InputLabel>
									<Select
										native
										value={this.state.age}
										onChange={this.handleChange('age')}
										input={<Input id="age-native-simple" />}
									>
										<option value="" />
										<option value={10}>Squats</option>
										<option value={20}>Pushups</option>
										<option value={30}>Dips</option>
										<option value={30}>Plank</option>
									</Select>
								</FormControl>
								<FormControl className={classes.formControl}>
									<InputLabel htmlFor="age-simple">Reps</InputLabel>
									<Select
										value={this.state.age}
										onChange={this.handleChange('age')}
										input={<Input id="age-simple" />}
									>
										<MenuItem value="">
											<em>None</em>
										</MenuItem>
										<MenuItem value={5}>5</MenuItem>
										<MenuItem value={10}>10</MenuItem>
										<MenuItem value={15}>15</MenuItem>
										<MenuItem value={20}>20</MenuItem>
										<MenuItem value={25}>25</MenuItem>
										<MenuItem value={30}>30</MenuItem>
										<MenuItem value={35}>35</MenuItem>
										<MenuItem value={40}>40</MenuItem>
										<MenuItem value={45}>45</MenuItem>
										<MenuItem value={50}>50</MenuItem>
									</Select>
								</FormControl>
							</form>
						</DialogContent>
						<DialogActions>
							<Button onClick={this.handleClose} color="primary">
									Cancel
							</Button>
							<Button onClick={this.handleClose} color="primary">
									Ok
							</Button>
						</DialogActions>
					</Dialog>
				</div>
				<hr /><br />
			</div>
		);
	}
}

export default withStyles(styles, { withTheme: true })(Header);