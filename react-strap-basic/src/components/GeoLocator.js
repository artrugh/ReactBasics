import React from 'react';

import { Spinner } from "reactstrap";

class GeoLocator extends React.Component {

    state = { lat: null, errorMessage: "" };

    //ComponentDidMount() is invoked immediately after a component is mounted (inserted into the tree).
    //  Initialization that requires DOM nodes should go here.
    //  If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }
    renderThis() {
        //it there is an error
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }
        //if all ok
        if (!this.state.errorMessage && this.state.lat) {
            return (
                <div
                    className="ui huge header"
                    style={{
                        textAlign: "center",
                        marginTop: "200px",
                        boxSize: "border-box"
                    }}
                >
                    lat: {this.state.lat.toFixed(4)}
                </div>
            );
        }
        //otherwise display a Spinner = loading
        return (

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100vh"
                }}
            >
                <Spinner style={{ width: "3rem", height: "3rem" }} type="grow" />
            </div>
        );
    }

    render() {
        return (
            <div style={{ border: "20px solid orangered", height: "100vh", margin: "0" }}>
                {this.renderThis()}
            </div>
        )
    }
}

export default GeoLocator;