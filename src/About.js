import React, { Component } from 'react';
import history from './history';
// import { Link } from 'react-router-dom';

export default class About extends Component {
  componentDidMount() {}

  goHome = e => {
    e.preventDefault();
    history.push('/');
  };

  render() {
    return (
      <div>
        About Erin!
        {/* <Link to="/">Click me to go home</Link> */}
        {/* <button onClick={this.goHome}>click me to go home</button> */}
      </div>
    );
  }
}
