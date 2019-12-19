import React from "react";
import ReactDOM from "react-dom";

// import Loader from "./Loader";
import "bootstrap/dist/css/bootstrap.min.css";



// COMPONENTS
import TooltipComponent from './components/Tooltip';
// import Loader from './components/Loader';
// import SpinnerComponent from './components/Spinner';
import GeoLocator from './components/GeoLocator';


class App extends React.Component {

  render() {
    return (
      <>
        {/* <Loader message = "Waiting..."/> */}
        {/* <SpinnerComponent message = "Time is consumed!"/> */}
        <TooltipComponent />
        <GeoLocator/>
      </>
    );
  }
}

ReactDOM.render(
  <App />, document.getElementById("root"));