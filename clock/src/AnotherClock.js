import React from 'react';

export class AnotherClock extends React.Component {

// State is referred to the local state off the component which cannot be accessed or modified
 // outside of the component and only can be used and modifidied inside the component.

    state = {
        date: new Date()
    }
       render() {
        return (
            <React.Fragment>
                <h1>Tell me the time!</h1>
                <h2>Ok, it is {this.state.date.toLocaleTimeString()} hs.</h2>
            </React.Fragment>

        );

    }
}

