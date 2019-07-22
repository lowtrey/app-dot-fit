import React from 'react';
import Divider from '@material-ui/core/Divider';
import Header from './Header';
import RecordsDisplay from './RecordsDisplay';
import Footer from './Footer';

class AppDotFit extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Divider variant='middle' />
				<RecordsDisplay />
				<Divider variant='middle' />
				<Footer />
			</div>
		)
	}
}

export default AppDotFit;