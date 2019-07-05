import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={Home} />
      </Switch>
      {/* <a href="/about">about me</a> */}
      {/* <About /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
