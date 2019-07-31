import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Session from './Session';
import SessionDialog from './SessionDialog';
import '../styles/SessionContainer.css';

function SessionContainer() {
	const [sessionArr, setSessionArr] = useState([]);
	const addSession = (newSession) => {
		setSessionArr([...sessionArr, newSession]);
	};
	const sessions = sessionArr.map(
		(s, i) => <Session key={i} exercise={s.exercise} reps={s.reps} />
	);
	
	return (
		<Paper elevation={3} className='SessionContainer'>
			<SessionDialog addSession={addSession} />
			<div className='Cards'>{sessions}</div>
		</Paper>
	);
}

export default SessionContainer;

//TODO
// add date to card
// sort cards array by recency
// save logs in localStorage
// save logs to database (research serverless)