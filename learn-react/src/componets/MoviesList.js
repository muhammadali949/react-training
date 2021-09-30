import React, { Component } from 'react'

export default class MoviesList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.mobiles.map(mobile =>
                        <li key={mobile.id}>{mobile.name}</li>
                    )}
                </ul>

            </div>
        )
    }
}

