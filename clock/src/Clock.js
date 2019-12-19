import React from 'react';

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    
    componentDidMount() {

        this.timerID = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <>
                <h1>This is real, I promise.</h1>
                <h2>For the last time, it is {this.state.date.toLocaleTimeString()}</h2>
            </>
        );
    }
}

export default Clock;