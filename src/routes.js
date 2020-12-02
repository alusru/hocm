import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Layout from "./hoc/layout/layout";
class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" exact component={About}></Route>
        </Switch>
      </Layout>
    );
  }
}

export default Routes;