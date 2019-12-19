import React from 'react';
import Header from '../components/Header';

class Home extends React.Component {

    componentDidMount() {
        document.title = "Aloha"
    }
    render() {
        return (
            <div className="container">
                <Header title = "Aloha" tagline="What are looking for?" name = "home"/>
                <p>Here you gonna find exactly what you are looking for!</p>
                <p>Yes, I promise it.</p>
            </div>
        )
    }
}

export default Home;