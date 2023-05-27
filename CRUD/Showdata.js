import React, { Component } from 'react'

export default class Showdata extends Component {
    render() {
        return (
            <div>
                <h1>Show Data:</h1>
                {this.props.arr.map((item, index) => (
                    <div key={index}>
                        <p>Email: {item.email}</p>
                        <p>Password: {item.password}</p>
                    </div>
                ))}
            </div>
        )
    }
}