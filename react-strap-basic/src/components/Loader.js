import React from 'react';

const Loader = props => {
    return (
        <div className="ui active dimmer">
            <div className="ui massive text loader">{props.message}</div>
        </div>
    );
};

Loader.defaultProps = {
    message: "Patience.."
};

export default Loader;

