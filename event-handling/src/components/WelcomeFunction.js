import React from 'react';

const WelcomeFunction = props => {

    const boundSayName = () => sayName();

    const sayName = () => alert(props.name);

    return <button onClick={boundSayName}>Say my name, say my name</button>;

}

export default WelcomeFunction;