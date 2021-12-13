import React, { Component } from 'react';
import './App.css';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  render() {
    const clic = () => {
      this.setState({
        active: !this.state.active,
      });
    };
    return (
      <div className='wrapper'>
        <div className='card'>
          <h1>{this.state.active ? 'Create account' : 'Welcome'}</h1>
          <input type='text' placeholder='Name' />
          {this.state.active && <input type='email' placeholder='Email' />}
          <input type='password' placeholder='Password' />
          <button>{this.state.active ? 'Create' : 'Login '}</button>
          <a href='#' onClick={() => clic()}>
            {this.state.active ? 'Sign In' : 'Create account'}
          </a>
        </div>
      </div>
    );
  }
}
