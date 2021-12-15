import React, { Component } from 'react';
import SignUp from './SignUp';
import Login from './LogIn';
import './App.css'

export default class App extends Component {
  state = {
    active: false,
  };
  render() {
    const login = () => {
      this.setState({ active: false });
    };

    const signUp = () => {
      this.setState({ active: true });
    };

    return (
      <div className='wrapper'>
        <div>
          {this.state.active ? (
            <Login onClick={login} />,
          ) : (
            <SignUp onClick={signUp} />
          )}
        </div>
           
      </div>
    );
  }
}
