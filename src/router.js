import React from "react";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import Profile from "./pages/Profile";
import OsPrinter from "./pages/OsPrinter";
import OsPrint from "./pages/OsPrint";

import Form from "./pages/Form";
import {isAutenticated} from "./services/auth";

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route
    {...rest}
    render={(props) =>
      isAutenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{pathname: "/", state: {from: props.location}}} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={OsPrinter} />
      <Route path="/osprinter" component={OsPrinter} />
      <Route path="/osprint" component={OsPrint} />
      <PrivateRoute path="/profile" component={Profile} />
      <PrivateRoute path="/Form" component={Form} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
