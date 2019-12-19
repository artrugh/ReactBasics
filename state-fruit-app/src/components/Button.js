import React from 'react';

//import fruitData from './../fruitData'

const Button = props => {

    return (
        <>
            <button
                className="color-button"
                id={props.id}
                onClick={props.function}
            >
                {props.innerText}
            </button>
            <button id={props.id} onClick={props.deleteFruit}>{props.innerTextDelete}</button>
        </>
    )
}

export default Button;