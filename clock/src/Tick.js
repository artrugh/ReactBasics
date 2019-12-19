import React from 'react';

export const Tick = () => {
    return (
        <>
            <h1>What time is it?</h1>
            <h2>Hey it's {new Date().toLocaleTimeString()}</h2>
        </>
    );
};
