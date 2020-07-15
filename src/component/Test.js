import React from "react"

export default class Test extends React.Component {
    constructor() {
        super()
        this.state = { num: 0 }
    }

    sample = () => {
        console.log("Click!")
        this.setState({ num: this.state.num + 1 })
    }

    render() {
        return (
            <div>
                <button onClick={this.sample}>buttom</button>
                {this.state.num}
            </div>
        )
    }
}