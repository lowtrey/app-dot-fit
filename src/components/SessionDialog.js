import React from 'react';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import { withStyles } from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircleOutline';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import styles from '../styles/SessionDialogStyles';
import useSelectState from '../hooks/useSelectState';

function SessionDialog(props) {
  const [exercise, exerciseInvalid, setExerciseInvalid, handleExerciseChange, open, handleClickOpen, handleClose, selectedDate, handleDateChange] = useSelectState('');
  const [reps, repsInvalid, setRepsInvalid, handleRepsChange] = useSelectState('');
  
  const { classes } = props;

	const handleSubmit = e => {
    e.preventDefault();
    if(exercise === '') {
      setExerciseInvalid(true);
    } else if(reps === '') {
      setRepsInvalid(true);
    } else {
        const newSession = {
          date: selectedDate,
          exercise: exercise,
          reps: Number(reps)
        };
        handleClose();
        props.addSession(newSession);
      };
	};

  return (
    <div>
      <Button
        size='medium' 
        color='primary'
        variant='contained'
        className={classes.button}
        onClick={handleClickOpen}
      >
        <AddCircleIcon className={classes.icon} />
        New Session 
      </Button>
      <Dialog disableBackdropClick open={open} onClose={handleClose}>
        <DialogTitle className={classes.title}>
          Enter Session Details:
        </DialogTitle>
        <DialogContent>
          <form 
            id='form'
            onSubmit={handleSubmit}
            className={classes.container}
          >
            <FormControl className={classes.formControl}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                  label="Date"
                  disableFuture
                  value={selectedDate}
                  inputVariant='outlined'
                  onChange={handleDateChange}
                />
              </MuiPickersUtilsProvider>
            </FormControl>
            <FormControl required className={classes.formControl} error={exerciseInvalid}>
              <InputLabel htmlFor="exercise-type">Exercise</InputLabel>
              <Select
                name='exercise'
                value={exercise}
                onChange={handleExerciseChange}
                inputProps={{ id: 'exercise-type' }}
              >
                <MenuItem dense value=""></MenuItem>
                <MenuItem dense value='Squats'>Squats</MenuItem>
                <MenuItem dense value='Push-ups'>Pushups</MenuItem>
                <MenuItem dense value='Dips'>Dips</MenuItem>
                <MenuItem dense value='Planks'>Plank(secs)</MenuItem>
              </Select>
              {exerciseInvalid && <FormHelperText margin='dense'>Required</FormHelperText>}
            </FormControl>
            <FormControl required className={classes.formControl} error={repsInvalid}>
              <InputLabel htmlFor="exercise-reps">Reps</InputLabel>
              <Select
                name='reps'
                value={reps}
                onChange={handleRepsChange}
                inputProps={{ id: 'exercise-reps' }}
              >
                <MenuItem dense value=""></MenuItem>
                <MenuItem dense value={5}>5</MenuItem>
                <MenuItem dense value={10}>10</MenuItem>
                <MenuItem dense value={15}>15</MenuItem>
                <MenuItem dense value={20}>20</MenuItem>
                <MenuItem dense value={25}>25</MenuItem>
                <MenuItem dense value={30}>30</MenuItem>
                <MenuItem dense value={35}>35</MenuItem>
                <MenuItem dense value={40}>40</MenuItem>
                <MenuItem dense value={45}>45</MenuItem>
                <MenuItem dense value={50}>50</MenuItem>
              </Select>
              {repsInvalid && <FormHelperText margin='dense'>Required</FormHelperText>}
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
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

export default withStyles(styles, { withTheme: true })(SessionDialog);