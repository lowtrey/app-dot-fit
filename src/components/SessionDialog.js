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
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import AddCircleIcon from '@material-ui/icons/AddCircleOutline';
import { ValidatorForm, TextValidator, SelectValidator } from 'react-material-ui-form-validator';

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
			reps: ''
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
          style={{ paddingLeft: '1rem' }}
          size='medium' 
          color='primary'
          variant='contained'
          onClick={this.handleClickOpen}
        >
          <AddCircleIcon style={{height: '1rem'}} className='icon' />
          New Session 
        </Button>
        <Dialog disableBackdropClick open={open} onClose={this.handleClose}>
          <DialogTitle>Enter Session Details:</DialogTitle>
          <DialogContent>
            <ValidatorForm 
              id='form'
              onSubmit={this.handleSubmit}
              instantValidate={false}
            >
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
                <SelectValidator
                  required
                  name='exercise'
                  label='Exercise'
                  value={exercise}
                  onChange={this.handleChange}
                >
                  <MenuItem value=""></MenuItem>
                  <MenuItem value='Squats'>Squats</MenuItem>
                  <MenuItem value='Push-ups'>Pushups</MenuItem>
                  <MenuItem value='Dips'>Dips</MenuItem>
                  <MenuItem value='Planks'>Plank(secs)</MenuItem>
                </SelectValidator>
              </FormControl>
              <FormControl className={classes.formControl}>
                <SelectValidator
                  required
                  name='reps'
                  label='Reps'
                  value={reps}
                  onChange={this.handleChange}
                >
                  <MenuItem value=""></MenuItem>
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
                </SelectValidator>
              </FormControl>
            </ValidatorForm>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="secondary">
                Cancel
            </Button>
            <Button 
              type='submit'
              color="primary"
              form='form'
            >
                Log!
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(SessionDialog);