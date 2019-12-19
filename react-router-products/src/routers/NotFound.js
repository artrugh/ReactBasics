import React from 'react';
import Header from '../components/Header';

class NotFound extends React.Component {

    componentDidMount() {
        document.title = "Error 404 | What to do?"
    }
    render() {
        return (
            <div className="container">
                <Header title = "U've missed sth!" tagline="404 - Page not found!" />
            </div>
        )
    }
}

export default NotFound;