import React from 'react';

class App extends React.Component {
    
    state = { 
        number: 0
    }
    onclick = () => { 
        
        this.setState({ number: this.state.number + 1}) }

    render() {
        //just an example to use the state number as an index, after 3 the name is undefined
        const name = ["Osi", "Martin", "Johnny"]
        return (
            <div>
                <p> {this.state.number}</p>
                <p onClick={() => this.onclick()}> {name[this.state.number]}</p>
            </div >
        )
    }
}

export default App;