import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <div className='card'> 
        <h1>Login Form</h1>
        <input type='text' placeholder='UserName' required />
            <input type='password' placeholder='Password' minLength={8} />
            <button className='btn'>Submit</button>
        <button className='link' onClick={this.props.onClick}> Sign Up</button>
      </div>
    );
  }
}
