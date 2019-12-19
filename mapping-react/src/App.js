import React from 'react';

import { Superheroes80, Superheroes90 } from './data';



const numbers = [1, 2, 3, 4, 5];
// plain vanilla
const listItems = numbers.map(number => <li>{number}</li>);

// React using props
const NumberList = props => {

    const listItems = props.numbers.map(number => (
        <li key={number.toString()}> {number}</li>));
    return <ul>{listItems}</ul>
}

const ListComponent = props => {
    const listItems = props.items.map(item => <li id={item.value} key={item.id}>{item.value}</li>);
    return <ul>{listItems}</ul>
}

const App = () => {
    return (
        <>
            <ListComponent items={Superheroes80} />
            <NumberList numbers={numbers} />
            <ListComponent items={Superheroes90} />

        </>
    )
}
export default App;