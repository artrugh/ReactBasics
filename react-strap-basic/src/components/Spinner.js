import React from 'react';

const SpinnerComponent = props => {

    return (
        <div className="ui segment" style={{ height: "100vh" }}>
            <div className="ui active dimmer">
                <div className="ui massive text loader">{props.message}</div>
            </div>
        </div>
    );
}
SpinnerComponent.defaultProps = {
    message: "Have patience..."
};

export default SpinnerComponent;