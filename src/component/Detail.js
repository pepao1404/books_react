import React from "react"
import BookTitle from "./BookTitle"

export default class Detail extends React.Component {
    constructor() {
        super()
        this.state = {
            msgs: [],
            value: ""
        }
    }

    onChange = e => {
        this.setState({ value: e.target.value })
    }

    add = () => {
        this.setState({
            msgs: this.state.msgs.concat(this.state.value),
            value: ""
        })
    }

    render() {
        const { title } = this.props.match.params

        const comments = this.state.msgs.map((com, key) => {
            return (
                <div className="card px-2 py-3 mt-2 w-75" key={key}>
                    {com}
                </div>
            )
        })

        return (
            <div className="container my-4">
                <BookTitle title={title}></BookTitle> 
                <p className="mb-4 text-secondary">コメント一覧</p>

                {comments}

                <div className="row align-items-end mx-1 my-4">
                    <textarea onChange={this.onChange} value={this.state.value} rows="3" className="w-50 p-2" />
                    <button onClick={this.add} className="btn btn-primary p-2 mx-2" >コメント</button>
                </div>
            </div>
        )
    }
}