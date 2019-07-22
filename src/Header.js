import React from 'react';
import Paper from '@material-ui/core/Paper';
import SessionDialog from './SessionDialog';
import Typography from '@material-ui/core/Typography';
import './Header.css';

function Header() {
	return (
			<Paper className='Header' >
				<Typography 
					variant='h2' 
					gutterBottom
				>
					App.Fit
				</Typography>
				<Typography 
					variant='subtitle1' 
					gutterBottom 
					paragraph
				>
					&#123;code - move - repeat&#125;
				</Typography>
				<SessionDialog/>
			</Paper>
	);
}

export default Header;

//TODO
// create array of sessionLogs and add to it after submitting new session in form
// style recordsDisplay components similar to miniPalettes from colorcopy
// save logs in localStorage
// save logs to database (research serverless)
// move styles to their own components