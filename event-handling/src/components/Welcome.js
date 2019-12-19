import React from 'react';

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.boundSayName = () => this.sayName();
    }
    sayName() {
        alert(this.props.name);
    }
    render() {
        return <button onClick={this.boundSayName}>Say my name, say my name</button>;
    }
}

export default Welcome;