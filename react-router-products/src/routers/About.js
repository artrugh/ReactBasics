import React from 'react';

import Header from './../components/Header';

class About extends React.Component {

    render() {
        return (
            <div className="container">
                <Header title="ABOUT" tagline="Ops, forget our name. RouterReact company!" name="about" />
                <p className="info">
                    my text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s, when an unknown printer took
                      a galley of type and scrambled it to make a ty
                      \pe specimen book. It has survived not only five cen
                      turies, but also the leap into electronic typesetti
               </p>
            </div>
        )
    }
}

export default About;