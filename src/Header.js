import React from 'react';
import SessionDialog from './SessionDialog';
import './Header.css';

function Header() {
	return (
		<div className='Header'>
				<h1>App.Fit</h1>
				<h5>&#123;code - move - repeat&#125;</h5>
				<SessionDialog/>
		</div>
	);
}

export default Header;

//TODO
// create array of sessionLogs and add to it after submitting new session in form
// style recordsDisplay components similar to miniPalettes from colorcopy
// save logs in localStorage
// save logs to database (research serverless)
// move styles to their own components