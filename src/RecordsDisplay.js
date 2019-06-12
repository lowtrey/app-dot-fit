import React from 'react';
import SquatRecords from './SquatRecords';
import PushupRecords from './PushupRecords';
import DipRecords from './DipRecords';
import PlankRecords from './PlankRecords';

class RecordsDisplay extends React.Component {
    render() {
        return (
            <div>
                <SquatRecords />
                <br />
                <PushupRecords />
                <br />
                <DipRecords />
                <br />
                <PlankRecords />
            </div>
        )
    }
}

export default RecordsDisplay;