import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Detail from "./components/Detail";
import NoPage from "./components/NoPage";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/detail">
            <Detail />
          </Route>
          <Route path="*">
            <NoPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
