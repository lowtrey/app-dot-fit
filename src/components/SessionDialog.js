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
import AddCircleIcon from '@material-ui/icons/AddCircleOutline';

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

class SessionDialog extends React.Component {
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
  handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	};
	handleClickOpen() {
		this.setState({ open: true });
	};
	handleClose() {
		this.setState({ open: false, exercise: '', reps: '' });
	};
	handleSubmit() {
    const newSession = {
      date: this.state.selectedDate,
      exercise: this.state.exercise,
      reps: Number(this.state.reps)
    };
    this.handleClose();
    this.props.addSession(newSession);
	};
	handleDateChange(e) {
		this.setState({ selectedDate: e });
	};
  
  render() {
    const { exercise, open, reps, selectedDate } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <Button
          style={{marginBottom: '1rem', paddingLeft: '1rem'}}
          size='large' 
          color='primary'
          variant='contained'
          onClick={this.handleClickOpen}
        >
          <AddCircleIcon style={{height: '1rem'}} className='icon' />New Session 
        </Button>
        <Dialog disableBackdropClick open={open} onClose={this.handleClose}>
          <DialogTitle>Enter Session Details:</DialogTitle>
          <DialogContent>
            <form className={classes.container}>
              <FormControl className={classes.formControl}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <DatePicker
                    label="Date"
                    disableFuture
                    inputVariant='outlined'
                    value={selectedDate}
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
                  value={exercise}
                  onChange={this.handleChange}
                  input={<Input id="exercise-type" />}
                >
                  <option value=""></option>
                  <option value='Squats'>Squats</option>
                  <option value='Pushups'>Pushups</option>
                  <option value='Dips'>Dips</option>
                  <option value='Planks'>Planks (s)</option>
                </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="exercise-reps">Reps</InputLabel>
                <Select
                  native
                  required
                  name='reps'
                  value={reps}
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
            <Button onClick={this.handleSubmit} color="primary">
                Log!
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(SessionDialog);