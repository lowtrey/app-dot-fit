import React from 'react';
import TrackerForm from './TrackerForm';

class TrackerDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {logs: []};
    }
    render() {
        return (
            <div>
                <br /><hr />
                <TrackerForm />
                <br /><hr />
                <h2>Track Your Progression Here!</h2>
                <h5>Render Logs here</h5>
            </div>
        )
    }
}

export default TrackerDisplay;