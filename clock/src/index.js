import React from 'react';
import ReactDOM from 'react-dom';

import {Tick} from './Tick'
import {AnotherClock} from './AnotherClock'
import Clock from './Clock'

const App = () => {
    return (
        <>
        <Clock/>
        <Tick/>
        <AnotherClock/>
        </>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));