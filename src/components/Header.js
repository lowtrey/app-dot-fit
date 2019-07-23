import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import '../styles/Header.css';

function Header() {
	return (
			<Paper elevation={3} className='Header' >
				<Typography 
					color='primary'
					variant='h2' 
					gutterBottom
				>
					app<Typography color='textPrimary' variant='subtitle2' style={{display: 'inline'}}>dot</Typography>fit
				</Typography>
				<Typography 
					variant='subtitle1' 
					gutterBottom 
					paragraph
				>
					&#123;code - move - repeat&#125;
				</Typography>
			</Paper>
	);
}

export default Header;