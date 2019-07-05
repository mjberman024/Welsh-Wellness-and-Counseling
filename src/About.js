import React, { Component } from 'react';
import history from './history';

export default class About extends Component {
  componentDidMount() {}

  goHome = e => {
    e.preventDefault();
    history.push('/');
  };

  render() {
    return (
      <div>
        <button onClick={this.goHome}>click me to go home</button>
      </div>
    );
  }
}
