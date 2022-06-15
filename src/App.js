import React from "react";
import "./App.css";
// import { Route, Switch } from "react-router-dom";
// import About from "./About/About";
// import Home from "./Home/Home";
// import Navbar from "./Components/Navbar/Navbar";
// import Contact from "./Components/Contact";
// import Client_forms from "./Components/Client_forms/Client_forms";
// import Services from "./Components/Services/Services";
import Main from "./Components/Main";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      {/* <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/client_forms" component={Client_forms} />
        <Route exact path="/" component={Main} />
      </Switch> */}

      <Footer />
    </div>
  );
}

export default App;
