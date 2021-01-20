import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import About from "./pages/About";
import Film from "./pages/Film";
import Error from "./pages/Error";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/films/:id">
          <Film />
        </Route>
        <Route exact path="/films">
          <p>All Film</p>
        </Route>

        <Route exact path="/schedule">
          <p>Schedule</p>
        </Route>

        <Route exact path="/tickets">
          <p>Tickets</p>
        </Route>

        <Route exact path="/">
          <p>Home</p>
        </Route>

        <Route path="/">
          <Error />
        </Route>

      </Switch>
      <Footer />
    </div>
  );
}

export default App;
