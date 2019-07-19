import React from 'react';
import Header from './Header';
import RecordsDisplay from './RecordsDisplay';
import Footer from './Footer';

class AppDotFit extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<RecordsDisplay />
				<Footer />
			</div>
		)
	}
}

export default AppDotFit;