import React from 'react';

const Header = props => {

    return (
        <>
            <h2
                style={{
                    backgroundColor: props.active ? "red" : "blue",
                    width: "200px",
                    height: "200px"
                }}>{props.number}</h2>

        </>
    )
};

export default Header;
