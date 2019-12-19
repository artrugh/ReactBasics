import React from 'react';

import Welcome from './components/Welcome';
import WelcomeFunction from './components/WelcomeFunction';
import ReverseBox from './components/ReverseBox';
import Toggle from './components/Toggle';

const App = () => {
    return (
        <>
            <Welcome name = "class" />
            <WelcomeFunction name = "function"/>
            <ReverseBox/>
            <Toggle/>
        </>
    )
};

export default App;