import React from "react";
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import Main from './Main'
import './App.css';

import Nav from "./components/Nav";
import Line from "./components/Line";

function App() {
  return (
    <div>
      <Line></Line>
      <Router>
        <Nav></Nav>
        <Switch>
          <Route exact path="/" component={Main}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
