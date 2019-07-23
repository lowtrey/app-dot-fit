import React from 'react';
import Paper from '@material-ui/core/Paper';
import PR from './PR';
import SessionDialog from './SessionDialog';
import Typography from '@material-ui/core/Typography';
import '../styles/PRContainer.css';

class PRContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sessions: []
		};
		this.addSession = this.addSession.bind(this);
	};
	addSession(newSession) {
		this.state.sessions.push(newSession);
		console.log(this.state.sessions);
	};

	render() {
		return (
				<Paper elevation={3} className='PRContainer'>
					<SessionDialog addSession={this.addSession} />
					<div className='CardContainer'><PR exercise='Pushups' reps={25} /><PR /><PR /><PR /></div>
					
				</Paper>
		);
	}
}

export default PRContainer;

//TODO
// style recordsDisplay components similar to miniPalettes from colorcopy
// save logs in localStorage
// save logs to database (research serverless)
// move styles to their own components