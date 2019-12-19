import React, { useState } from 'react';


import './App.css';

const App = () => {
  const [active, setActive] = useState(false);

  const Img = () => (<img
    src={require(`./images/nintendo.jpg`)}
    className={active ? "section collapsible" : "section collapsed"}
  />)


  return (
    <>
      <button onClick={() => setActive(!active)}>pressHereToSeeMoreImg</button>
      <div className = "container">
        <img
          src={require(`./images/nintendo.jpg`)}
          className="section collapsible" 
        />
        <img
          src={require(`./images/nintendo.jpg`)}
          className={active ? "section collapsible" : "section collapsed"}
        />
        <img
          src={require(`./images/nintendo.jpg`)}
          className={active ? "section collapsible" : "section collapsed"}
        />
        <img
          src={require(`./images/nintendo.jpg`)}
          className={active ? "section collapsible" : "section collapsed"}
        />

      </div>
    </>
  );
}

export default App;

