import React from 'react';

class ReverseBox extends React.Component {

    state = {
        input: "",
        reversedText: ""
    };

    // function to set a new state for the input
    handleChange = e => {
        const value = e.target.value;
        this.setState({
            input: value
        });
    }

    handleReverse = e => {
        e.preventDefault();
        const text = this.state.input;
        this.setState({
            input: "",
            reversedText: text
                .split("")
                .reverse("")
                .join(""),
        });
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleReverse}>
                    <div>
                        <label htmlFor="">
                            Text: {this.state.input}
                        </label>
                    </div>
                    <div>
                        <input
                            type="text"
                            value={this.state.input}
                            onChange={this.handleChange}
                            placeholder="ENTER TEXT"
                        />
                    </div>
                    <div>
                        <button >Reverse Text</button>
                    </div>
                </form>
                <p>Reversed Text: {this.state.reversedText}</p>
            </>
        )
    }
}

export default ReverseBox;