import React from 'react';
        

import { Route, Switch, Redirect } from "react-router-dom";

//COMPONENTS
import Home from "./components/Home";
import Messages from "./components/Messages";
import About from "./components/About";

const App = () => {
  return (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/messages" component={Messages} />
            <Route path="/about" component={About} />
            <Redirect to ="/"/>
          </Switch>
  );
}

export default App;
