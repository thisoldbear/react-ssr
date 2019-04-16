import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";

import Home from './home';
import About from './about';

class Layout extends Component {
  render() {
    return (
      <div>
        <h1>React SSR</h1>
        <div>
          <Link to="/">Home</Link><br />
          <Link to="/about">About</Link>
        </div>
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/about" exact component={ About } />
        </Switch>
      </div>
    );
  }
};

export default Layout;
