import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Forms extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            currentEmail: '',
            currentPassword: ''
        }
    }
    addData = (e) => {
        let obj = {'email': this.state.currentEmail, 'password': this.state.currentPassword}
        
        this.props.arr(obj);

    }
    
    handleEmail = (e)=>{
        this.setState({currentEmail: e.target.value});
    }
    handlePassword = (e)=>{
        this.setState({currentPassword: e.target.value});
    }
    render() {
        return (
            <div>
                <h1>CRUD APPLICATION</h1>
                        <label>Email address</label>
                        <input type="email" value={this.state.currentEmail} onChange={this.handleEmail} placeholder="Enter email" />
                           
                        <label>Password</label>
                        <input type="text" value={this.state.currentPassword} onChange={this.handlePassword} placeholder="Password" />
                        <br />
                
                    <button className="btn btn-primary" onClick={this.addData}>Add</button>
                    {/* <button className="btn btn-primary" onClick={this.gotoNextPage}>Show Data</button> */}
                    <Link to={'/showpage'}>Show Data</Link>
            </div>
        )
    }
}