import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import About from './About/About';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Contact from './Contact';
import Client_forms from './Client_forms/Client_forms';
import Services from './Services/Services';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/client_forms" component={Client_forms} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
