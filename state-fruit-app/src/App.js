import React from 'react';

//COMPONENTS
import Fruits from './components/Fruits';
import Button from './components/Button';

//DATA
import fruitData from './fruitData';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { fruitData: fruitData };
        this.handleClick = this.handleClick.bind(this);
        this.deleteFruit = this.deleteFruit.bind(this);
        this.reset = this.reset.bind(this);
        this.deleteAll = this.deleteAll.bind(this)
    }

    randomNum(num) { return Math.floor(Math.random() * num); }

    handleClick = (e) => {

        const colors = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
        let result = this.randomNum(colors.length);

        let randomColor = colors[result];
        let name = e.target.id;

        this.setState(state => {
            state.fruitData.map(x => {
                if (x.name === name) {
                    return x.color = randomColor
                }
            })
            return state;
        });
    }

    deleteFruit = (e) => {

        let name = e.target.id;
        let newState = this.state.fruitData.filter(x => x.name !== name)
        this.setState({ fruitData: newState })
    };

    reset = () => {
        this.setState({ fruitData: fruitData })
    }

    deleteAll = () => {
        this.setState({ fruitData: [] })
    }

    render() {

        return (
            <>
                <h1>Play around with the State using fruits!</h1>
                
                <Fruits fruit={this.state}
                    handleClick={this.handleClick}
                    deleteFruit={this.deleteFruit} />
                <Button function={this.reset}
                    deleteFruit={this.deleteAll}
                    innerText={"reset"}
                    innerTextDelete={"delete all the fruit"} />
            </>
        )
    }
}

export default App;