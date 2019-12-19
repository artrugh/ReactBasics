import React from 'react';
import ReactDom from 'react-dom';

// fakerAPI has been installed using npm (look the package.JSON)
//import faker from 'faker';
//or
var faker = require('faker');


// the lenguage can be setted here
faker.locale = "es";

const App = () => {
    return (
        <>
            <img src={faker.image.avatar()} alt={faker.name.jobTitle()} />
            <h1>{faker.name.firstName()}</h1>
            <h2>{faker.name.lastName()}</h2>
            <p>{faker.name.jobTitle()}</p>
            <p>{faker.internet.email()}</p>
            <p>{faker.company.companySuffix()}</p>
            <p>{faker.address.country()}</p>
            <img src={faker.image.abstract()} />
        </>
    );
}

ReactDom.render(<App />, document.getElementById("root"));