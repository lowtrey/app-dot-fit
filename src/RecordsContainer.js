import React from 'react';
import SessionDialog from './SessionDialog';

class RecordsContainer extends React.Component {
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
			<div>
				<SessionDialog addSession={this.addSession} />
			</div>
		);
	}
}

export default RecordsContainer;

//TODO
// create array of sessionLogs and add to it after submitting new session in form
// style recordsDisplay components similar to miniPalettes from colorcopy
// save logs in localStorage
// save logs to database (research serverless)
// move styles to their own components