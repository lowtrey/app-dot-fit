import React from 'react';

class TrackerForm extends React.Component {
    render() {
        return (
            <div>
                <h2>Log Your Workout Here!</h2>
                <form>
                    <label htmlFor='squats'>Squats: </label>
                    <input id='squats' type='number'></input>
                    <br />
                    <label htmlFor='pushups'>Pushups: </label>
                    <input id='pushups' type='number'></input>
                    <br />
                    <label htmlFor='dips'>Dips: </label>
                    <input id='dips' type='number'></input>
                    <br />
                    <label htmlFor='plank'>Plank: </label>
                    <input id='plank' type='number'></input>
                </form>
            </div>
        )
    }
}

export default TrackerForm;