import React from 'react';

//import fruitData from 

import Button from './Button';

const Fruits = props => {
    // console.log(props.fruit.fruitData.map(x=> x));

    const fruitHeader = props.fruit.fruitData.map(item =>

        <div className="fruit"
            style={{ width: "100%", height: "100%", backgroundColor: "blue" }}>
            <h1 id={item.name} style={{ width: "100%", height: "50%", backgroundColor: `${item.color}` }} key={item.name}>{item.name}</h1>
            <Button handleClick={props.function} deleteFruit = {props.deleteFruit} id = {item.name} innerText = {"change the color"} innerTextDelete= {"delete the fruit"}/>
        </div>

    );
    return fruitHeader
}

export default Fruits;



