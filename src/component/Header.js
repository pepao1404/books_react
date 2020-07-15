import React from 'react'

export default class Header extends React.Component {
    handleChange = e =>{
        const title = e.target.value
        this.props.changeTitle(title)
    }

    render() {
        
        return (
            <header className="m-2 mb-4">
                <h1>{this.props.title}</h1>
                <input value={this.props.title} onChange={this.handleChange} />
            </header>
        )
    }
}