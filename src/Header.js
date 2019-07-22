import React from 'react';
import Button from '@material-ui/core/Button';
import SessionDialog from './SessionDialog';
import './Header.css';

//TODO
// create array of sessionLogs and add to it after submitting new session in form
// style recordsDisplay components similar to miniPalettes from colorcopy
// save logs in localStorage
// save logs to database (research serverless)
// move styles to their own components

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
		return (
			<div className='Header'>
					<h1>App.Fit</h1>
					<h5>&#123;code - move - repeat&#125;</h5>
					<Button 
						size='large' 
						color='primary'
						variant='contained'
						onClick={this.handleClickOpen}
					>
						New Session
					</Button>
					<SessionDialog 
						handleClose={this.handleClose}
						{...this.state} 
					/>
			</div>
		);
	}
}

export default Header;