import React from "react";
import { Route, Switch } from "react-router-dom";

import Events from "../pages/Events";
import Event from "../pages/Event";
import Login from "../pages/auth/Login";
import About from "../pages/About";
import Editor from "../pages/Editor";
import Details from "../pages/Details";
import Templates from "../pages/Templates";
import Signup from "../pages/auth/Signup";


const Routes = ({ location }) => {
  return (
    <Switch location={location}>
      <Route exact path="/" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/event" component={Event} />
      <Route exact path="/events" component={Events} />
      <Route exact path="/about" component={About} />
      <Route exact path="/details" component={Details} />
      <Route exact path="/templates" component={Templates} />
      <Route exact path="/editor" component={Editor} />
    </Switch>
  );
};

export default Routes;
