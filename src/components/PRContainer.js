import React from 'react';
import Paper from '@material-ui/core/Paper';
import PR from './PR';
import SessionDialog from './SessionDialog';
import '../styles/PRContainer.css';

class PRContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = { sessionLogs: [] };
		this.addSession = this.addSession.bind(this);
	};
	addSession(newSession) {
		this.setState({
			sessionLogs: [...this.state.sessionLogs, newSession]
		});
	};

	render() {
		const sessionsRender = this.state.sessionLogs.map(
			(s, i) => <PR key={i} exercise={s.exercise} reps={s.reps} />
		);
		return (
				<Paper elevation={3} className='PRContainer'>
					<SessionDialog addSession={this.addSession} />
					<div className='CardContainer'>
						{sessionsRender}
					</div>
				</Paper>
		);
	}
}

export default PRContainer;

//TODO
// save logs in localStorage
// save logs to database (research serverless)
// move styles to their own components