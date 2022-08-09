import React from "react";

class MyComponent extends React.Component {

    state = {
        name: '123'
    }
    onClickMe = () => {
        alert(this.state.name)
    }

    ChangeText = (even) => {
        this.setState({
            name: even.target.value
        })
    }
    render() {

        return (
            <>
                <div>
                    <input value={this.state.name} type='text' onChange={(even) => this.ChangeText(even)} />
                </div>

                <div>
                    <h2>Hello {this.state.name}</h2>
                </div>
                <div>
                    <button onClick={() => this.onClickMe()}>click me</button>
                </div>
            </>

        )
    }
}

export default MyComponent