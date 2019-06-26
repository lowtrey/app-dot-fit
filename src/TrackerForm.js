import React from 'react';

class TrackerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {squats: '', pushups: '', dips: '', plank: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    handleSubmit(evt) {
        evt.preventDefault();
        console.log('Submitted');
        this.setState({squats: '', pushups: '', dips: '', plank: ''});
    }
    render() {
        return (
            <div>
                <h2>Log Your Workout Here!</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='squats'>Squats: </label>
                    <input
                        id='squats'
                        type='number'
                        name='squats'
                        value={this.state.squats}
                        onChange={this.handleChange}
                    />
                    <br />
                    <label htmlFor='pushups'>Pushups: </label>
                    <input
                        id='pushups'
                        type='number'
                        name='pushups'
                        value={this.state.pushups}
                        onChange={this.handleChange}
                    />
                    <br />
                    <label htmlFor='dips'>Dips: </label>
                    <input
                        id='dips'
                        type='number'
                        name='dips'
                        value={this.state.dips}
                        onChange={this.handleChange}
                    />
                    <br />
                    <label htmlFor='plank'>Plank: </label>
                    <input
                        id='plank'
                        type='number'
                        name='plank'
                        value={this.state.plank}
                        onChange={this.handleChange}
                    />
                    <br />
                    <button>+</button>
                </form>
            </div>
        )
    }
}

export default TrackerForm;