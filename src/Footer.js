import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Footer.css';

function Footer() {
	return (
			<Paper elevation={3} className='Footer' >
				<Typography 
					color='textSecondary'
					variant='subtitle2' 
				>
					© 2019   &#123; @lowtrey &#125;
				</Typography>
			</Paper>
	);
}

export default Footer;