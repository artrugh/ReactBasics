import React, { useState } from 'react';

// COMPONENTS
import Header from './components/Header'

const App = () => {
    //hooks - setting the state
    const [active, setActive] = useState(true);
    const [number, setNumber] = useState(0);

    const onclick = () => {
        onclickactive()
        onclicknumber()
    }
    const onclickactive = () => setActive(!active)
    const onclicknumber = () => setNumber(number + 1)
    return (
        <div>
            <div onClick={() => onclick()}
                className={active ? "active" : "non"}
                style={{
                    backgroundColor: active ? "green" : "yellow",
                    width: "200px",
                    height: "200px",
                    border: "1px solid black"
                }}>{}</div>
                {/* passing props and communicating components */}
            <Header number={number} active = {active}/>
        </div >
    )
}

export default App;

