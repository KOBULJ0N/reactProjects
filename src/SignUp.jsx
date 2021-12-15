import React, { Component } from 'react'

export default class SignUp extends Component {
    render() {
        return (
            <div className='card'>
             
                <h1>Sign Up Form</h1>
                <input type="text" placeholder='Your Name' required/>
                <input type="text" placeholder='SurName'  required/>
                <input type="email" placeholder=' qobiljon@gmail.com'  required/>
                <input type="password" placeholder='Password' minLength={8} />
                <button className='btn'>Submit</button>
                <button className='link' onClick={this.props.onClick}> Login</button>
            </div>
        )
    }
}
