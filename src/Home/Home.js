import React, { Component } from 'react';
import history from '../history';

export default class Home extends Component {
  componentDidMount() {}

  goHome = e => {
    e.preventDefault();
    history.push('/about');
  };

  render() {
    return (
      <div>
        Welcome to da home
        {/* <button onClick={this.goHome}>click me to go to about</button> */}
      </div>
    );
  }
}
