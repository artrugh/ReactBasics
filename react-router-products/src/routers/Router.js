import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Routers
import Home from './Home';
import Products from './Products';
import About from './About'
import NotFound from './NotFound';

const Router = () => (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/products" component={Products} />
                <Route path="/about" component={About} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>  
);

export default Router;
