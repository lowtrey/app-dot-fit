import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';

//TODO
// create array of sessionLogs and add to it after submitting new session in form
// style recordsDisplay components similar to miniPalettes from colorcopy
// save logs in localStorage
// save logs to database (research serverless)
// move dialog to its own component
// move styles to their own components

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
			selectedDate: Date(),
			exercise: '',
			reps: '',
			sessionLog: [
				{}
			]
		};
		this.handleDateChange = this.handleDateChange.bind(this);
		this.handleClickOpen = this.handleClickOpen.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleClose = this.handleClose.bind(this);
	};
	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	};
	handleClickOpen() {
		this.setState({ open: true });
	};
	handleClose() {
		this.setState({ open: false, exercise: '', reps: '' });
	};
	handleSubmit() {
		console.log("Submitted!");
	};
	handleDateChange(e) {
		this.setState({ selectedDate: e });
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
					<Button 
						size='large' 
						color='primary'
						variant='contained'
						onClick={this.handleClickOpen}
					>
						New Session
					</Button>
					<Dialog disableBackdropClick disableEscapeKeyDown open={this.state.open} onClose={this.handleClose}>
						<DialogTitle>Enter Session Details:</DialogTitle>
						<DialogContent>
							<form className={classes.container} id='form' onSubmit={this.handleSubmit}>
								<FormControl className={classes.formControl}>
									<MuiPickersUtilsProvider utils={DateFnsUtils}>
										<DatePicker
											label="Date"
											disableFuture
											inputVariant='outlined'
											value={this.state.selectedDate}
											onChange={this.handleDateChange}
										/>
									</MuiPickersUtilsProvider>
								</FormControl>
								<FormControl className={classes.formControl}>
									<InputLabel htmlFor="exercise-type">Exercise</InputLabel>
									<Select
										native
										required
										name='exercise'
										value={this.state.exercise}
										onChange={this.handleChange}
										input={<Input id="exercise-type" />}
									>
										<option value=""></option>
										<option value='squats'>Squats</option>
										<option value='pushups'>Pushups</option>
										<option value='dips'>Dips</option>
										<option value='planks'>Planks</option>
									</Select>
								</FormControl>
								<FormControl className={classes.formControl}>
									<InputLabel htmlFor="exercise-reps">Reps</InputLabel>
									<Select
										native
										required
										name='reps'
										value={this.state.reps}
										onChange={this.handleChange}
										input={<Input id="exercise-reps" />}
									>
										<option value=""></option>
										<option value={5}>5</option>
										<option value={10}>10</option>
										<option value={15}>15</option>
										<option value={20}>20</option>
										<option value={25}>25</option>
										<option value={30}>30</option>
										<option value={35}>35</option>
										<option value={40}>40</option>
										<option value={45}>45</option>
										<option value={50}>50</option>
									</Select>
								</FormControl>
							</form>
						</DialogContent>
						<DialogActions>
							<Button onClick={this.handleClose} color="secondary">
									Cancel
							</Button>
							<Button type='submit' form='form' color="primary">
									Log!
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