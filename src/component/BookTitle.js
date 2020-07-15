import React from 'react'

export default class BookTitle extends React.Component {

    render() {
        return (
                <h2 className="text-primary">{this.props.title}</h2>
        )
    }
}