import "./App.css";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Homapages/Home/Home";
import Appointment from "./Pages/Appoimnet/Appoinment/Appointment";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/appointment">
          <Appointment />
          </Route>
          <Route path="/home">
          <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
