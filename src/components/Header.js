import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import '../styles/Header.css';

function Header() {
	return (
		<Paper elevation={3} className='Header'>
			<Typography 
				variant='h2' 
				color='primary'
				className='header-text'
			>
				app
			</Typography>
			<Typography 
				color='textPrimary' 
				variant='subtitle2' 
				className='header-text'
			>
				dot
			</Typography>
			<Typography 
				variant='h2' 
				color='primary'
				className='header-text'
			>
				fit
			</Typography>
			<Typography 
				paragraph
				variant='subtitle1'
			>
				&#123;code - move - repeat&#125;
			</Typography>
		</Paper>
	);
}

export default Header;